console.log("hello");
chrome.runtime.onMessage.addListener(function(message,sender, response){
    console.log(message.txt);
    //this will be where API calls to spotify will occur

})