console.log("background");
chrome.browserAction.onClicked.addListener(function(tab){
    console.log(tab);
});