function removeFilter () {
  var a = document.querySelectorAll('html,body,div,section,img,nav');
  Object.keys(a).map(function(x) {a[x].style.filter = "none"})
}
function setFilter () {
  return;
  var a = document.querySelectorAll('html,body,div,section,img,nav');
  Object.keys(a).map(function(x) {a[x].style.filter = "grayscale(100%)"})
}

chrome.storage.local.get("status", function (x) {
  x.status == 1 ? removeFilter() : null;
})

// removeFilter();
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === 'run') {
    chrome.storage.local.get("status", function (x) {
      //console.log("status:", x, this)
      if(x.status == 1) {
        setFilter();
        // Toggle Status ON -> OFF
        if (msg.toggle) {
          chrome.storage.local.set({'status': 0})
        }
      }
      else {
        removeFilter();
        // Toggle Status OFF -> ON
        if (msg.toggle)
        {
          chrome.storage.local.set({'status': 1})
        }
      }
    })

  }
})
