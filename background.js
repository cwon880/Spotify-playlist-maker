var client_id = '8dd0d7b10337406cb7e83196ab2eb701';
var redirectUri = chrome.identity.getRedirectURL("spotify");
var access_token = null;
var time_out = null; 
//var video_id = null; 
var yt_api_key = "AIzaSyAXdSuNOLvC8Dihin_Xtvrn9FGEDMo7jXg";
var data = null;

//build GET request with XMLHTTPRequest and retrive video info from youtube api
function getYoutubeData(video_id){
  var yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + video_id + "&key=" + yt_api_key;
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", yt_snippet_endpoint,true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function(){
    data = JSON.parse(xhr.responseText);
    console.log(data);
  }
  xhr.send();

}



function simpleSpotifyQuery(){
  var spotify_endpoint = "https://api.spotify.com/v1/search"+"q="+encodeURIComponent("slow dancing in the dark")+"&type=track"



}
// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//   var url = tabs[0].url;
//   console.log("tab rn "+ url);
// });

// listen for changes to the website url and get youtube data 
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url){
    console.log("new url" + changeInfo.url);
    // get the new youtube video id 
    var video_id = changeInfo.url.split('v=')[1];
    if (video_id != null && video_id.includes("&")){
      var ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
      console.log("removed amp");
    } 
    console.log(video_id);
    this.getYoutubeData(video_id);
  } else {
    console.log("no change");
  }
});

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

