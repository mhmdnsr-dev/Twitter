import createTwitPost from "./createTwitPost.js";
import fetchData from "./Ajax.js";
const user = new URLSearchParams(location.search);
const profilePhoto = document.getElementById("profilePhoto");
const twitsLest = document.getElementById("twitsLest");
const nameUser = document.getElementById("nameUser");
const handleuser = document.getElementById("handleuser");
const topName = document.getElementById("topName");
const backToHome = document.getElementById("backToHome");
const coverPhoto = document.getElementById("coverPhoto");
const twitterhome = document.getElementById("twitterhome");
profilePhoto.src = user.get("src");
nameUser.innerHTML = user.get("name");
handleuser.innerHTML = user.get("handleuser");
topName.innerHTML = user.get("name");

backToHome.addEventListener("click", () => {
  location.href = "home.html";
});
twitterhome.addEventListener("click", () => {
  location.href = "home.html";
});

coverPhoto.src = user.get("srcBack");
const twitArry = JSON.parse(localStorage.getItem("twitArry")) || [];

const userTwitArry = twitArry.filter((twit) => {
  return twit.userId == user.get("userId");
});

if (userTwitArry) {
  cryatTwets(userTwitArry);
}
function cryatTwets(userTwitArry) {
  userTwitArry.forEach((twit) => {
    const { newTwitDiv, newTwitDivBodyDetailsAUsername } = createTwitPost(
      user.get("name"),
      user.get("src"),
      twit.title
    );
    newTwitDivBodyDetailsAUsername.innerHTML = `${user.get(
      "handleuser"
    )} <sup>.</sup> 3m`;

    twitsLest.prepend(newTwitDiv);
  });
}
fetchData((userData, userTwitArry) => {
  cryatTwets(userTwitArry);
});

const formsearchh = document.querySelector("#formmmsearch");
// const searchbar = document.querySelector("#searchbar");
formsearchh.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = formsearchh.searchbarr.value;
  console.log(a);
  formsearchh.reset();
  fetchData(function (x, y) {
    console.log(" x= ", x, " y = ", y);
    let FilterdSearch = x.filter((word) => {
      return word.name === a;
    });
    console.log(FilterdSearch[0]);
    location.href = `profile.html?name=${FilterdSearch[0].name}&src=${FilterdSearch[0].src}&handleuser=${FilterdSearch[0].handleuser}&srcBack=${FilterdSearch[0].srcBack}&userId=${FilterdSearch[0].userId}`;
  });
});
