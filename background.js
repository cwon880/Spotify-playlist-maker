console.log("background");
chrome.browserAction.onClicked.addListener(function(tab){

    let msg = {
        txt: "hello world"
    }
    chrome.tabs.sendMessage(tab.id, msg);
});