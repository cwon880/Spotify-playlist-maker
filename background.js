console.log("background");
var client_id = '8dd0d7b10337406cb7e83196ab2eb701';
var redirectUri = chrome.identity.getRedirectURL("spotify");
console.log(redirectUri);
chrome.runtime.onMessage.addListener(function(message, sender, response){
    //oauth flow here
    if (message.action === 'launchOauth'){
        chrome.identity.launchWebAuthFlow({
            "url": "https://accounts.spotify.com/authorize?client_id="+client_id+
                   "&redirect_uri="+ encodeURIComponent(redirectUri) + 
                   "&response_type=token", 
            'interactive': true,  
          },
          function(redirect_url) { 
            console.log(redirect_url);
          });
        console.log("more shit");   
    }

});