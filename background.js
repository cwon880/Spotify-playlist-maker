console.log("background");
chrome.runtime.onMessage.addListener(function(message, sender, response){
    console.log(message.greetings)
    console.log("this is background");

    //oauth flow here
    if (message.action === 'launchOauth'){
        chrome.identity.launchWebAuthFlow({







        })
        
    }

});