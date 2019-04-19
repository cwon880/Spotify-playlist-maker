console.log("hello");
chrome.runtime.onMessage.addListener(function(message,sender, response){
    console.log(message.action);
    console.log("wait a min")
})