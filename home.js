// addEventListener("load",()=>{
import fetchData from "./Ajax.js";
import createTwitPost from "./createTwitPost.js";

var twitForm = document.getElementById("twitForm");
var twitTextBox = document.getElementById("twitTextBox");
var homeFeatureNine = document.getElementById("homeFeatureNine");
var twitsLest = document.getElementById("twitsLest");
var imgAccount = document.getElementById("imgAccount");
const twitterhomeee = document.getElementById("twitterhomeee");
const localUserData = JSON.parse(localStorage.getItem("localUserData"));

// var timerTwit = document.querySelector("#timerTwit")
imgAccount.setAttribute("src", localUserData.src);
// imgAccount.src = localUserData.src
likeToProfile(imgAccount, localUserData);
likeToProfile(homeFeatureNine, localUserData);
// var twitValidationMessage = document.querySelector("#twitValidationMessage")
twitTextBox.value = "";

function addTwit(e) {
  e.preventDefault();
  let timeNow = new Date();

  const {
    newTwitDiv,
    newTwitDivBodyDetailsAUsername,
    newTwitDivBodyDetailsAname,
    imgTwitPerson,
  } = createTwitPost(localUserData.name, localUserData.src, twitTextBox.value);
  newTwitDivBodyDetailsAUsername.innerHTML = `${localUserData.handleuser} <sup>.</sup> 0m`;

  setInterval(() => {
    let hour = new Date().getMinutes() - timeNow.getMinutes();
    let minutes = new Date().getMinutes() - timeNow.getMinutes();
    if (minutes < 0) {
      --hour;
      minutes -= 60;
    }

    newTwitDivBodyDetailsAUsername.innerHTML = `${localUserData.handleuser} <sup>.</sup> ${minutes}m`;
  }, 10000);

  twitsLest.prepend(newTwitDiv);

  if (twitTextBox.value != 0) {
    twitForm.removeEventListener("submit", addTwit);
  }

  setTimeout(() => {
    twitForm.addEventListener("submit", addTwit);
    //  clearInterval(stopIntervalTwitBox)
    //  timerTwit.innerHTML=""
    //  timer = 2
  }, 5000);
  ////////////
  //  timerTwit.innerHTML =1
  //  let timer =2

  //  var stopIntervalTwitBox = setInterval(()=>{
  //     timerTwit.innerHTML =timer++

  //  },1000)
  /////////////
  let twit = {
    userId: localUserData.userId,
    title: twitTextBox.value,
  };
  twitTextBox.value = "";
  likeToProfile(newTwitDivBodyDetailsAUsername, localUserData);
  likeToProfile(newTwitDivBodyDetailsAname, localUserData);
  likeToProfile(imgTwitPerson, localUserData);
  let twitArry = [];
  twitArry.unshift(twit);
  localStorage.setItem("twitArry", JSON.stringify(twitArry));
}
function twitValidation(e) {
  e.preventDefault();
  var twitText = twitTextBox.value;
  twitForm.addEventListener("submit", addTwit);
  // twitValidationMessage.innerHTML = ""
  if (twitText.length > 50 || twitText.length == 0) {
    twitForm.removeEventListener("submit", addTwit);
    //  twitValidationMessage.style.color = "red"
    //  twitValidationMessage.innerHTML = "Max lenght 30 letter"
  }
}

twitForm.addEventListener("submit", twitValidation);
twitForm.addEventListener("submit", addTwit);
twitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  twitForm.addEventListener("submit", addTwit);
});

function creatfetchTwit(userDataServer, paragraphDataServer) {
  for (let i = 0; i < userDataServer.length * 3; i++) {
    let randomUserID = Math.ceil(Math.random() * userDataServer.length);
    let randomUserPost = Math.ceil(Math.random() * paragraphDataServer.length);

    let randomUser = userDataServer[randomUserID - 1];

    let userParagraph = paragraphDataServer.find((twit) => {
      return twit.id == randomUserPost;
    });

    let randomTime = Math.floor(Math.random() * 12);
    let time;
    if (randomTime == 0) {
      randomTime = Math.ceil(Math.random() * 55);
      time = `${randomTime}m`;
    } else {
      time = `${randomTime}h`;
    }

    const {
      newTwitDiv,
      newTwitDivBodyDetailsAUsername,
      newTwitDivBodyDetailsAname,
      imgTwitPerson,
    } = createTwitPost(randomUser.name, randomUser.src, userParagraph.title);
    newTwitDivBodyDetailsAUsername.innerHTML = `${randomUser.handleuser} <sup>.</sup> ${time}`;
    twitsLest.appendChild(newTwitDiv);
    likeToProfile(newTwitDivBodyDetailsAUsername, randomUser);
    likeToProfile(newTwitDivBodyDetailsAname, randomUser);
    likeToProfile(imgTwitPerson, randomUser);
    
  }
}
console.log("fetch data ya ahmed please", fetchData);

fetchData(creatfetchTwit);

addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop ==
    document.documentElement.scrollHeight - window.innerHeight
  ) {
    fetchData(creatfetchTwit);
  }
});

// })
function likeToProfile(ele, user) {
  console.log("user = = = ", user);

  // console.log(user.srcBack);
  ele.addEventListener("click", () => {
    location.href = `profile.html?name=${user.name}&src=${user.src}&handleuser=${user.handleuser}&srcBack=${user.srcBack}&userId=${user.userId}`;
  });
}
function searchprofile(x, y) {
  console.log(x, y);
}
const formsearch = document.querySelector("#formsearch");
// const searchbar = document.querySelector("#searchbar");
formsearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = formsearch.searchbar.value;
  console.log(a);
  formsearch.reset();
  fetchData(function (x, y) {
    console.log(" x= ", x, " y = ", y);
    let FilterdSearch = x.filter((word) => {
      return word.name === a;
    });
    console.log(FilterdSearch[0]);
    location.href = `profile.html?name=${FilterdSearch[0].name}&src=${FilterdSearch[0].src}&handleuser=${FilterdSearch[0].handleuser}&srcBack=${FilterdSearch[0].srcBack}&userId=${FilterdSearch[0].userId}`;
  });
});
