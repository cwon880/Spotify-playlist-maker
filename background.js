var client_id = '8dd0d7b10337406cb7e83196ab2eb701';
var redirectUri = chrome.identity.getRedirectURL("spotify");
var access_token = null;
var time_out = null; 



var video_id = "Yqk1RwLwcXo"
var yt_api_key = "AIzaSyAXdSuNOLvC8Dihin_Xtvrn9FGEDMo7jXg"
yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=" + yt_api_key;

var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET", yt_snippet_endpoint,true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function(){
  var data = JSON.parse(xhr.responseText);
  console.log(data);
}
xhr.send();

chrome.runtime.onMessage.addListener(function(message, sender, response){
    //oauth flow here
    if (message.action === 'launchOauth'){
        this.getToken();
    }
});

function getToken(){
    //implicit grant flow for browser-based javascript application 
    chrome.identity.launchWebAuthFlow({
        "url": "https://accounts.spotify.com/authorize?client_id="+client_id+
               "&redirect_uri="+ encodeURIComponent(redirectUri) + 
               "&response_type=token", 
        'interactive': true,  
      },
      //callback to process url returned from spotify 
      function(redirect_url) {
        if (chrome.runtime.lastError) {
            callback(new Error(chrome.runtime.lastError));
            return;
        }
        console.log(redirect_url);
        //regex to extract access token 
        access_token = redirect_url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
        //regex to extract expiry time 
        time_out = redirect_url.match(/(?:expires_in)\=(\d+)/)[1];
        console.log("token is "+access_token);
        console.log(" expire in "+time_out);
      });
}

// checks if token has expired and requests new token again 
function checkRefreshToken(){
    
}

