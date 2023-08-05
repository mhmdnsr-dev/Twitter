import fetchData from "../../helper/Ajax.js";
import createTwitPost from "../../helper/createTwitPost.js";
import {
  TWEETMOREOPTION,
  handelMoreOtion,
  handelSearchUser,
  cryatTwets,
  creatfetchTwit,
} from "../../helper/helper.js";

const twitForm = document.getElementById("twitForm");
const twitTextBox = document.getElementById("twitTextBox");
const homeFeatureNine = document.getElementById("homeFeatureNine");
const twitsLest = document.getElementById("twitsLest");
const imgAccount = document.getElementById("imgAccount");
const accountName = document.querySelector(".account-name");
const accountNameIMG = document.querySelector(".account img");
const users = JSON.parse(localStorage.getItem("users")) || [];
const currentUser = users.find((user) => user.taken) || {};

imgAccount.setAttribute(
  "src",
  currentUser["img-signup"] || "../../assets/images/defualt-person-img-96.png"
);
accountNameIMG.src =
  currentUser["img-signup"] || "../../assets/images/defualt-person-img-96.png";
accountName.textContent = currentUser["fulln-signup"];
// likeToProfile(imgAccount, currentUser);
// likeToProfile(homeFeatureNine, currentUser);

twitTextBox.value = "";
const tweetsArr = JSON.parse(localStorage.getItem("tweetsArr")) || [];
const currentTweets =
  tweetsArr.find((tweets) => tweets.userId === currentUser.id) || {};
if (currentTweets.userId) {
  cryatTwets(
    currentTweets,
    currentUser["usr-signup"],
    currentUser["fulln-signup"],
    currentUser["img-signup"]
  );
}
function addTwit(e) {
  e.preventDefault();
  let timeNow = new Date();

  const {
    newTwitDiv,
    newTwitDivBodyDetailsAUsername,
    newTwitDivBodyDetailsAname,
    imgTwitPerson,
  } = createTwitPost(
    currentUser["fulln-signup"],
    currentUser["img-signup"] ||
      "../../assets/images/defualt-person-img-96.png",
    twitTextBox.value
  );
  newTwitDivBodyDetailsAUsername.innerHTML = ` @${currentUser["usr-signup"]} <sup>.</sup> 0m`;

  setInterval(() => {
    let hour = new Date().getMinutes() - timeNow.getMinutes();
    let minutes = new Date().getMinutes() - timeNow.getMinutes();
    if (minutes < 0) {
      --hour;
      minutes -= 60;
    }

    newTwitDivBodyDetailsAUsername.innerHTML = ` @${currentUser["usr-signup"]} <sup>.</sup> ${minutes}m`;
  }, 10000);

  twitsLest.prepend(newTwitDiv);

  handelMoreOtion(TWEETMOREOPTION);

  if (twitTextBox.value != 0) {
    twitForm.removeEventListener("submit", addTwit);
  }

  setTimeout(() => {
    twitForm.addEventListener("submit", addTwit);
  }, 5000);

  if (!currentTweets.userId) {
    currentTweets.userId = currentUser.id;
    currentTweets.data = [];
  }
  currentTweets.data.push(twitTextBox.value);

  twitTextBox.value = "";
  // likeToProfile(newTwitDivBodyDetailsAUsername, currentUser);
  // likeToProfile(newTwitDivBodyDetailsAname, currentUser);
  // likeToProfile(imgTwitPerson, currentUser);

  let isFoundTweets = false;
  tweetsArr.forEach((tweets) => {
    if (tweets.userId === currentUser.id) {
      tweets = currentTweets;
      isFoundTweets = true;
    }
  });
  if (!isFoundTweets) {
    tweetsArr.push(currentTweets);
  }
  localStorage.setItem("tweetsArr", JSON.stringify(tweetsArr));
}
function twitValidation(e) {
  e.preventDefault();
  const twitText = twitTextBox.value;
  twitForm.addEventListener("submit", addTwit);

  if (twitText.length > 50 || twitText.length == 0) {
    twitForm.removeEventListener("submit", addTwit);
  }
}

twitForm.addEventListener("submit", twitValidation);
twitForm.addEventListener("submit", addTwit);
twitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  twitForm.addEventListener("submit", addTwit);
});

addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    fetchData(creatfetchTwit);
    setTimeout(() => {
      handelMoreOtion(TWEETMOREOPTION);
    }, 1500);
  }
});

// })

///////////////////////search
handelSearchUser();

///// redirect to profile page
document
  .querySelector(".home-feature.eight")
  .addEventListener(
    "click",
    (e) => (location.pathname = "/pages/Profile/profile.html")
  );

// fetch fake tweets
fetchData(creatfetchTwit);
///////tweet more option
setTimeout(() => {
  handelMoreOtion(TWEETMOREOPTION);
}, 1500);

/////focus to write tweet
document.querySelector(".tweetbtn").addEventListener("click", (e) => {
  document.querySelector("#twitTextBox").focus();
});
////////////////// logout
const logoutBord = document.createElement("div");
logoutBord.innerHTML = `
<span >logout</span>
`;
logoutBord.style = `border-radius: 9px;
    background-color: rgb(148 149 149 / 67%);
    position: absolute;
    left: 0px;
    text-align: center;
    padding: 9px 40px;`;
const logoutBtn = document.querySelector(".account");
logoutBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  logoutBtn.appendChild(logoutBord);
  logoutBord.addEventListener("click", (e) => {
    setTimeout(() => {
      location.pathname = "/index.html";
    }, 500);
  });
});
document.addEventListener("click", (e) => {
  logoutBord.remove();
});
