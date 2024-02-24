const btn = document.querySelector(".changecolorBtn");

btn.addEventListener("click", async () => {
  // Query for active tabs
  let tabs = await chrome.tabs.query({ active: true, currentWindow: true });

  // Check if any tabs are found
  if (tabs.length > 0) {
    // Use the first tab found
    let tab = tabs[0];

    // Execute the script on the tab
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: snatchColor,
    });
  } else {
    console.error("No active tabs found.");
  }
});

function snatchColor() {
  console.log("Script Working");
}
