function createTwitPost(userName, imgSrc, paragraph) {
    var newTwitDiv = document.createElement("div");
    var imgTwitPerson = document.createElement("img");
    var newTwitDivBody = document.createElement("div");
    newTwitDiv.classList.add("posts");
    imgTwitPerson.classList.add("post-img");
    imgTwitPerson.src = imgSrc;
    newTwitDivBody.classList.add("feed-details");
    newTwitDiv.appendChild(imgTwitPerson);
    newTwitDiv.appendChild(newTwitDivBody);
    ///////////////////////
    var newTwitDivBodyDetails = document.createElement("div");
    var newTwitDivBodyDetailsA = document.createElement("a");
    var newTwitDivBodyDetailsAname = document.createElement("span");
    var newTwitDivBodyDetailsAUsername = document.createElement("span");
    var newTwitDivBodyDetailsmoreHoriz = document.createElement("a");
    ///////////
    newTwitDivBodyDetailsAname.innerHTML = userName;
    newTwitDivBodyDetailsAUsername.classList.add("tweeter-username");
    //  newTwitDivBodyDetailsAUsername.innerHTML = `${hrefLinkUserHome} <sup>.</sup> ${time}`
    newTwitDivBodyDetailsA.classList.add("tweeter-nam");
    newTwitDivBodyDetailsA.appendChild(newTwitDivBodyDetailsAname);
    newTwitDivBodyDetailsA.appendChild(newTwitDivBodyDetailsAUsername);
    ///////////
    newTwitDivBodyDetailsmoreHoriz.classList.add(
      "material-icons-outlined",
      "span-more"
    );
    newTwitDivBodyDetailsmoreHoriz.innerHTML = "more_horiz";
    newTwitDivBodyDetails.classList.add("tweeter-details");
    newTwitDivBodyDetails.appendChild(newTwitDivBodyDetailsA);
    newTwitDivBodyDetails.appendChild(newTwitDivBodyDetailsmoreHoriz);
    newTwitDivBody.appendChild(newTwitDivBodyDetails);
    ///////////////////
    var newTwitDivBodyText = document.createElement("div");
    newTwitDivBodyText.classList.add("twt-txt");
    var newTwitDivBodyTextP = document.createElement("p");
    newTwitDivBodyTextP.innerHTML = paragraph;
  
    newTwitDivBodyText.appendChild(newTwitDivBodyTextP);
    newTwitDivBody.appendChild(newTwitDivBodyText);
  
    ////////////
    var newTwitDivBodyIcons = document.createElement("div");
    newTwitDivBodyIcons.classList.add("icons-twt");
    var icons = [
      "chat_bubble_outline",
      "restart_alt",
      "favorite_border",
      "upload",
    ];
    for (let icon of icons) {
      let newTwitDivBodyIconsIcon = document.createElement("span");
      newTwitDivBodyIconsIcon.classList.add(
        "material-icons-outlined",
        "span-more"
      );
      newTwitDivBodyIconsIcon.innerHTML = icon;
      newTwitDivBodyIcons.appendChild(newTwitDivBodyIconsIcon);
    }
    newTwitDivBody.appendChild(newTwitDivBodyIcons);
    ////////////////
    return { newTwitDiv, newTwitDivBodyDetailsAUsername ,newTwitDivBodyDetailsAname , imgTwitPerson};
  }
  export default createTwitPost