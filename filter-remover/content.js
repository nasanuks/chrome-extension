var a = document.querySelectorAll('html,body,div,img');
Object.keys(a).map(function(x) {a[x].style.filter = "none"})

/*
chrome.storage.local.get("status", (obj) => {
  if (obj.status) {
    var a = document.querySelectorAll('html,body,div,img');
    Object.keys(a).map(function(x) {a[x].style.filter = "none"})
  }
  else {
    var b = document.querySelectorAll('html');
    Object.keys(b).map(function(x) {b[x].style.filter = "grayscale(100%)"})
  }
})
*/
/*
// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        if (msg.status) {
          var a = document.querySelectorAll('html,body,div,img');
          Object.keys(a).map(function(x) {a[x].style.filter = "none"})
        }
        else {
          var b = document.querySelectorAll('html');
          Object.keys(b).map(function(x) {b[x].style.filter = "grayscale(100%)"})
        }
        sendResponse(document.all[0].outerHTML);
    }
});
*/