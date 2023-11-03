// Function to send a URL to the backend for analysis
function sendUrlForAnalysis(url) {
    // Send the URL to the background script (popup.js) using a message
    chrome.runtime.sendMessage({ type: "analyzeUrl", url: url }, (response) => {
      if (response && response.isPhishing) {
        // Handle phishing URL - you can add code to notify the user here
      }
    });
  }
  
  // Add an event listener to capture URL clicks
  document.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      const url = event.target.href; // Define 'url' within this scope
      sendUrlForAnalysis(url);
    }
  });
  