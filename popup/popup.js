function handler(){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: 'launchOauth'});
    });
    console.log("launching")
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('authBtn').addEventListener("click", handler)
})
