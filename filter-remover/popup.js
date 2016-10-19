var statusDOM = undefined;
var btnStatusDOM = undefined;
var btnRunDOM = undefined;

function toggleStatus() {
  chrome.storage.local.get('status', function (obj) {
    setStatusText(!obj.status)
    chrome.tabs.query({'active': true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: 'run', status: obj.status, toggle: 1}, function (x) { return x});
    })
  })
}

function runScript () {
  chrome.tabs.query({'active': true}, function (tabs) {
    // Set status 0 because it will be forece to 1 by Toggle function inside content.
    chrome.tabs.sendMessage(tabs[0].id, {text: 'run', status: 1, toggle: 0}, function (x) { return x});
  })
}

function setStatusText (status) {
  var statusText = status == 1 ? "on" : "off";
  var statusTextToggle = status == 1 ? "off" : "on";
  chrome.browserAction.setIcon({
      path: status == 1 ? "icon16.png" : "icon16-off.png"
    }
  );

  statusDOM.innerText = statusText;
  statusDOM.className = statusText;
  btnStatusDOM.innerText = statusTextToggle;
  btnRunDOM.style = status == 1 ? 'display: block;' : 'display: none;'
}

document.addEventListener('DOMContentLoaded', function() {
  statusDOM = document.getElementById("status");
  btnStatusDOM = document.getElementById("btnToggleStatus");
  btnRunDOM = document.getElementById("btnRunManaully");
  btnStatusDOM.onclick = toggleStatus;
  //btnRunDOM.onclick = runScript;
  chrome.storage.local.get('status', function (obj) {
    setStatusText(obj.status)
  })
})
