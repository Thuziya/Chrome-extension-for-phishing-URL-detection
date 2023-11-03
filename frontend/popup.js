document.getElementById("checkButton").addEventListener("click", () => {
    const url = document.getElementById("urlInput").value;
});
// Inside the click event listener
fetch('your-server-url/predict', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
})
.then(response => response.json())
.then(data => {
    const resultElement = document.getElementById('result');
    resultElement.textContent = data.isPhishing ? 'Likely phishing!' : 'Safe';
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "analyzeUrl") {
      const url = message.url;
  
      // Send the URL to your server for analysis
      // Handle the response and update the result on the popup
    }
  });
  