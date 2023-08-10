"use strict";
import fetchData from "./Ajax.js";
import createTwitPost from "./createTwitPost.js";
export const TWEETMOREOPTION = `
      <div role="menuitem" tabindex="0" class="delete-tweet">
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Not interested in this post</span>
          </div>
        </div>
      </div>
      <div role="menuitem" tabindex="0">
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm13 4v3h2v-3h3V8h-3V5h-2v3h-3v2h3zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Follow <span class="user__name"></span></span>
          </div>
        </div>
      </div>
      <a href="#" role="menuitem"
        ><div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5H12v2H5.5C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5V13h-2V4.5c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2zm10 7v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Add/remove <span class="user__name"></span> from Lists</span>
          </div>
        </div></a
      >
      <div role="menuitem" tabindex="0">
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Mute <span class="user__name"></span></span>
          </div>
        </div>
      </div>
      <div role="menuitem" tabindex="0" data-testid="block">
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Block <span class="user__name"></span></span>
          </div>
        </div>
      </div>
      <div role="menuitem" tabindex="0">
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Embed Tweet</span>
          </div>
        </div>
      </div>
      <div role="menuitem" tabindex="0" data-testid="report">
        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M3 2h18.61l-3.5 7 3.5 7H5v6H3V2zm2 12h13.38l-2.5-5 2.5-5H5v10z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <div dir="ltr">
            <span>Report Tweet</span>
          </div>
        </div>
      </div>
`;
//////////////////////
export function handelMoreOtion(TWEETMOREOPTION) {
  const spansMore = document.querySelectorAll(".tweeter-details .span-more");
  let isDropDown = false;
  spansMore.forEach((span, i) => {
    span.addEventListener("click", (e) => {
      /// Remove it if already exists
      if (document.getElementById("dropdown"))
        document.getElementById("dropdown").remove();

      /// Create DropDown
      const dropDown = document.createElement("div");
      dropDown.id = "dropdown";
      dropDown.innerHTML = TWEETMOREOPTION;
      dropDown.onclick = (e) => {
        e.stopPropagation();
      };
      const tweetBox = span.closest(".posts");
      if (!tweetBox) return;
      const userName = tweetBox.querySelector(".tweeter-username").textContent;
      dropDown
        .querySelectorAll(".user__name")
        .forEach(
          (x) => (x.innerText = userName.slice(0, userName.indexOf(" ")))
        );

      //////////////////// del tweet
      dropDown
        .querySelector(".delete-tweet")
        .addEventListener("click", function delTweet(e) {
          const targetTweet = e.target.closest(".posts");
          const replaceHtml = `
          <span>Thanks. team(9) will use this to make your timeline better.</span><span class="undo-del-tweet">Undo</span>
          `;
          const replaceEl = document.createElement("div");
          replaceEl.innerHTML = replaceHtml;
          replaceEl.id = "replace-tweet";
          targetTweet.replaceWith(replaceEl);
          replaceEl
            .querySelector(".undo-del-tweet")
            .addEventListener("click", (e) => {
              replaceEl.replaceWith(targetTweet);
            });
          dropDown.remove();
          setTimeout(() => {
            replaceEl.remove();
          }, 2500);
        });

      e.stopPropagation();
      isDropDown = true;
      tweetBox.appendChild(dropDown);

      ////hide dropdown
      document.body.addEventListener("click", (e) => {
        if (isDropDown) dropDown.remove();
        else isDropDown = false;
      });
    });
  });
}

export function handelSearchUser() {
  const ulEl = document.createElement("ul");
  const searchEl = document.querySelector("[placeholder='Search Twitter']");

  searchEl.addEventListener("input", (e) => {
    const val = e.target.value;
    searchUser(val, e);
  });
  searchEl.addEventListener("focusin", (e) => {
    const val = e.target.value;
    if (e.target.value !== "") searchUser(val, e);
  });
  searchEl.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", () => ulEl.remove());

  function searchUser(val, event) {
    fetchData(function (data) {
      const targetUsersSearch = data.filter((user) => {
        return val.includes(user.name.toLowerCase().slice(0, val.length));
      });

      ulEl.innerHTML = "";
      if (val === "") return;
      targetUsersSearch.forEach((user) => {
        ulEl.insertAdjacentHTML(
          "beforeend",
          `<li class="user-search"><img src="${user.src}"><span>${user.name}</span><li>`
        );

        ulEl.style = `position: absolute;list-style: none ;background-color: #ddda;width:23.5vw; padding: 15px; border-radius: 25px; top: 100%;min-height: 100px;text-align: center;backdrop-filter: blur(7px);`;

        event.target.closest(".aside_input").style.position = "relative";
        event.target.closest(".aside_input").appendChild(ulEl);
      });
      ///////////////////// redirect to spicefic home
      document.querySelectorAll(".user-search").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          const user = targetUsersSearch.find(
            (user) =>
              user.name === e.target.closest("li").lastElementChild.textContent
          );
          localStorage.setItem("static-user", user.handleuser);

          location.pathname = "/pages/Profile/profile.html";
        });
      });
    });
  }
}
document.body.lastElementChild;

export function cryatTwets(currentTweets, username, userFullName, userImg) {
  currentTweets.data.forEach((tweet) => {
    const { newTwitDiv, newTwitDivBodyDetailsAUsername } = createTwitPost(
      userFullName,
      userImg || "./assets/images/defualt-person-img-96.png",
      tweet
    );
    newTwitDivBodyDetailsAUsername.innerHTML = `  ${username} <sup>.</sup> 3m`;
    twitsLest.prepend(newTwitDiv);
  });

  //add for new tweeets
  handelMoreOtion(TWEETMOREOPTION);
}

///////////////////////
export function creatfetchTwit(userDataServer, paragraphDataServer) {
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
    newTwitDivBodyDetailsAUsername.innerHTML = ` ${randomUser.handleuser} <sup>.</sup> ${time}`;
    twitsLest.appendChild(newTwitDiv);
    // likeToProfile(newTwitDivBodyDetailsAUsername, randomUser);
    // likeToProfile(newTwitDivBodyDetailsAname, randomUser);
    // likeToProfile(imgTwitPerson, randomUser);
  }
}

////
// export function likeToProfile(ele, user) {
//   ele.addEventListener("click", () => {
//     location.pathname = `/pages/Profile/profile.html`;
//   });
// }

export const userImageHandler = () => {
  document.querySelectorAll(".post-img").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const staticUsers = JSON.parse(localStorage.getItem("static-users"));
      const targetUserName = e.target.nextElementSibling
        .querySelector(".tweeter-username")
        .textContent.trim();
      const handelTargetUserName = targetUserName.slice(
        0,
        targetUserName.indexOf(" ")
      );
      const user = staticUsers.find(
        (user) => user.handleuser === handelTargetUserName
      );
      if (!user) {
        localStorage.removeItem("static-user");
        location.pathname = "/pages/Profile/profile.html";
      } else {
        localStorage.setItem("static-user", user.handleuser);
        location.pathname = "/pages/Profile/profile.html";
      }
    });
  });
};
// document.body.nextElementSibling
