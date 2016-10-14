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

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {text: 'report_back', status: status}, doStuffWithDom);
});

/*
// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
  // ...if it matches, send a message specifying a callback too
  // Toggle
  chrome.storage.local.get("status", (obj) => {
    status = !obj.status ? true : false
    // Change Icon
    chrome.browserAction.setIcon(
      {
        path: status ? "on.png" : "off.png",
        tabId: tab.id
      },
      callback
    );
    chrome.storage.local.set({"status": status}, () => {})
    //chrome.tabs.sendMessage(tab.id, {text: 'report_back', status: status}, doStuffWithDom);
  })
});
*/
