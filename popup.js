// the script file linked to popup html
//Sending the message to content.js so that to show the pop up at event of click of button
document.getElementById("showTitle").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: "alert" }, function () {
      console.log("message sent!");
    });
  });
});

let urlArray = [
  "https://www.linkedin.com/in/aman-gupta-7217a515/",
  "https://www.linkedin.com/in/williamhgates/",
  // "https://www.linkedin.com/in/satyanadella/",
  // "https://www.linkedin.com/in/sivakumarbabujiofficial/",
  // "https://www.linkedin.com/in/kaushikmkj/",
  // "https://www.linkedin.com/in/anupamdubey/",
  // "https://www.linkedin.com/in/diegorodriguez/"
];

let profileBtn = document.getElementById("profiles");
profileBtn.addEventListener("click", () => {
  for (let i = 0; i < urlArray.length; i++) {
    openTab(urlArray[i]);
  }
});

async function openTab(url) {
  let tab = await chrome.tabs.create({ url: url });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: logInfo,
  });
}

function logInfo() {
  const location = document.getElementsByClassName(
    "text-body-small inline t-black--light break-words"
  )[0].innerText;
  const name = document.getElementsByClassName(
    "text-heading-xlarge inline t-24 v-align-middle break-words"
  )[0].innerText;
  console.log(`The persons's name is ${name}`);
  console.log(`The persons's location is ${location}`);
  console.log("The contact info with title and data goes here");

  //Contact info
  document.getElementById("top-card-text-details-contact-info").click(); //selecting the contact info popup
  setTimeout(() => {
    //giving popup the time to load waiting for 5 seconds
    let contactSections = document.getElementsByClassName(
      "pv-contact-info__contact-type"
    );
    for (let i = 0; i < contactSections.length; i++) {
      let itemArray = contactSections[i].innerText.split("\n");
      console.log(`The ${itemArray[0]} is: ${itemArray[1]}`);
    }
    document
      .getElementsByClassName(
        "artdeco-modal__dismiss artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
      )[0]
      .click();
  }, 5000);
}
