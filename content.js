console.log("hello");
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    console.log(message.txt);

})