chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.startsWith("http")) {
    checkWebsite(tab.url, tabId);
  }
});

async function checkWebsite(url, tabId) {
  try {
    const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyBUSl9fnYpZLcHf85HzXetEwOIupBDUW8Y.`, {
      method: 'POST',
      body: JSON.stringify({
        client: {
          clientId: "securewebalert",
          clientVersion: "1.0"
        },
        threatInfo: {
          threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "POTENTIALLY_HARMFUL_APPLICATION"],
          platformTypes: ["ANY_PLATFORM"],
          threatEntryTypes: ["URL"],
          threatEntries: [{ url: url }]
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (data.matches) {
      chrome.action.setIcon({ path: "icon.png", tabId: tabId });  // You can change to an alert icon
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => {
          alert("⚠️ Warning: This website might be dangerous or a phishing site!");
        }
      });
    }
  } catch (error) {
    console.error("Error checking URL:", error);
  }
}

  
  