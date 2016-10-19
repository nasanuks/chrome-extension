// A function to use as callback
function doStuffWithDom(domContent) {
  //console.log('I received the following DOM content:\n' + domContent);
}

function callback() {
    if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
    } else {
        // Tab exists
    }
}

chrome.runtime.onInstalled.addListener(function (reason) {
  chrome.storage.local.set({'status': 1})
})

chrome.browserAction.onClicked.addListener(function (tab) {
});
