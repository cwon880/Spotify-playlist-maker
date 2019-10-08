console.log("background");
var client_id = '8dd0d7b10337406cb7e83196ab2eb701';
var redirectUri = chrome.identity.getRedirectURL("spotify");
var access_token = null;
var time_out = null; 

console.log(redirectUri);
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

