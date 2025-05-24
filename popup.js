document.getElementById("report").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    alert(`📩 Reported: ${url}`);
    // Later: Send to Firebase or your server
  });
});
