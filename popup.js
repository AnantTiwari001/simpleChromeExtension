// the script file linked to popup html
//Sending the message to content.js so that to show the pop up at event of click of button
document.getElementById('showTitle').addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "alert"}, function() {
            console.log('message sent!')
        });
      });
})

