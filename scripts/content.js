// the main script file of extension
// Recieving the message and checking if it is 'alert' so to alert the document tittle
chrome.runtime.onMessage.addListener(function (request) {
    if (request.greeting == "alert") {
      alert(`The title of the document is:--  ${document.title}`);
  }
});
