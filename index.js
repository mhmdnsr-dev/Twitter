import fetchData from "./Ajax.js";

// 1) UI/UX

// 1.1) show/hidden register boxs

// Boxes variables
const overflowBox = document.querySelector(".overflow-box");
const signupBox = document.querySelector(".signup-box");
const loginBox = document.querySelector(".login-box");
const spinnerBox = document.querySelector(".spinner-box");
// const imgUser = document.querySelector("#imgUser");

// buttons variables
const registerBtns = document.querySelectorAll(".register-btn");
const toggleRegisterBoxs = (
  e,
  fromSignup = false,
  toLogin = false,
  fromLogin = false
) => {
  if (fromLogin) {
    loginBox.classList.toggle("show-register-box"); //remove
    spinnerBox.classList.toggle("show-register-box"); //add
  } else if (fromSignup) {
    signupBox.classList.toggle("show-register-box"); //remove
    spinnerBox.classList.toggle("show-register-box"); //add
  } else if (toLogin) {
    spinnerBox.classList.toggle("show-register-box"); //remove
    loginBox.classList.toggle("show-register-box"); //add
  } else {
    overflowBox.classList.toggle("show-overflow-box");
    if (e.target.classList.toString() === "signup register-btn")
      signupBox.classList.toggle("show-register-box");
    else if (e.target.classList.toString() === "login register-btn")
      loginBox.classList.toggle("show-register-box");
  }
};

registerBtns.forEach((btn) =>
  btn.addEventListener("click", toggleRegisterBoxs)
);

// 1.2) Nice transition when focusing the input
const inputs = document.querySelectorAll("input");
const prettyTransFocus = (targetEl, e) => {
  const placeholdText = document.querySelector(
    `label[for=${targetEl.id}] .placeholder`
  );
  // if (e.target != imgUser) {
  if (!placeholdText) return;
  if (e.type === "focusin")
    placeholdText.style = `
      left: 2%;
      transform: translateY(-150%);
      color: rgb(18, 153, 242);
      font-size: 1.2rem;
`;
  else if (e.type === "focusout") {
    if (targetEl.value === "") placeholdText.style = "";
    else if (targetEl.value !== "")
      placeholdText.style = `
      left: 2%;
      transform: translateY(-150%);
      color: rgb(83, 100, 113);
      font-size: 1.2rem;
                `;
  }
  // }
};
inputs.forEach((el) =>
  el.addEventListener("focusin", prettyTransFocus.bind(null, el))
);
inputs.forEach((el) =>
  el.addEventListener("focusout", prettyTransFocus.bind(null, el))
);

// 1.3) fix some bug when mouse hover on input
document.querySelectorAll(".placeholder").forEach((el) => {
  el.addEventListener(
    "mouseover",
    () =>
      (el.nextElementSibling.style.backgroundColor =
        "rgba(142, 210, 255, 0.277)")
  );
  el.addEventListener(
    "mouseleave",
    () => (el.nextElementSibling.style.backgroundColor = "")
  );
});

//////show password
document.querySelectorAll(".show-password").forEach((el) =>
  el.addEventListener("click", () => {
    const input = el.closest("label").querySelector("input");
    const typeAttr = input.getAttribute("type");
    const newType = typeAttr === "password" ? "text" : "password";
    input.setAttribute("type", newType);
  })
);

////////////////////////////local storage
let users = null;
window.addEventListener(
  "load",
  () => (users = JSON.parse(localStorage.getItem("users")) || [])
);

// 1.4) Validation inputs
const formValid = { taken: null, twoPass: null };
let isNotValid = null;
let timer;
const lazyValidation = (cb, clear) => {
  clear();
  cb();
};

const notValid = (targetEl, msgErr) => {
  targetEl.nextElementSibling.textContent = msgErr;
  targetEl.nextElementSibling.style = `
      color:rgb(244, 33, 46);
      font-weight: 400;
      font-size: 1.05rem;
      margin: 3px 0 0 2px
    `;
  targetEl.style = `
      outline: 0.01px solid red;
    `;
  targetEl.closest("label").firstElementChild.style.color = "rgb(244, 33, 46)";
};

inputs.forEach((el) => {
  const passwdEl = document.getElementById("pw-signup");
  const rPasswdEl = document.getElementById("rpw-signup");
  let msgErr;

  const valid = (twoEl = false) => {
    if (isNotValid) return;
    if (!el.nextElementSibling) return;
    el.nextElementSibling.textContent = "";
    el.nextElementSibling.style = ``;
    el.style = ``;
    let placeholdText = el.closest("label").firstElementChild;
    placeholdText.style.color =
      placeholdText.style.color === "rgb(83, 100, 113)"
        ? "rgb(83, 100, 113)"
        : "rgb(18, 153, 242)";
    if (twoEl) {
      const otherEl = [passwdEl, rPasswdEl].find(
        (passEl) => passEl.id !== el.id
      );
      otherEl.nextElementSibling.textContent = "";
      otherEl.nextElementSibling.style = ``;
      otherEl.style = ``;
      otherEl.closest("label").firstElementChild.style.color =
        "rgb(83, 100, 113)";
    }
  };

  el.addEventListener("input", function (e) {
    lazyValidation(
      () => {
        timer = setTimeout(() => {
          ///////////////// user input validaty
          if (el.id === "fulln-signup")
            msgErr = "Minimum 3 alphanumeric characters including _ and -.";
          if ((el.id === "usr-signup") | (el.id === "usr-login"))
            msgErr = "Minimum 5 alphanumeric characters including _ and -.";
          if (el.id === "email-signup")
            msgErr = "The email provided is invalid.";
          if (
            el.id === "pw-signup" ||
            el.id === "rpw-signup" ||
            el.id === "pw-login"
          )
            msgErr = "1 lowercase, 1 uppercase, 1 number, minimum length 8.";
          //////////form data validity

          /////

          isNotValid = false;

          ///// Signup validity
          const formData = Object.fromEntries(
            new FormData(e.target.closest("form"))
          );
          const takenUsrN = users.find(
            (el) => el["usr-signup"] === formData["usr-signup"]
          );
          const takenEmail = users.find(
            (el) => el["email-signup"] === formData["email-signup"]
          );
          if (takenUsrN && el.id === "usr-signup") {
            msgErr = "Username is taken ; Please enter a different one.";
            notValid(el, msgErr);
            isNotValid = true;
            formValid.taken = false;
          }
          if (takenEmail && el.id === "email-signup") {
            msgErr = "Email is taken ; Please enter a different one.";
            notValid(el, msgErr);
            isNotValid = true;
            formValid.taken = false;
          }
          if (!takenUsrN && !takenEmail) formValid.taken = true;

          if (el.validity.patternMismatch || el.validity.typeMismatch) {
            notValid(el, msgErr);
          } else if (
            passwdEl.value !== "" &&
            rPasswdEl.value !== "" &&
            passwdEl.value !== rPasswdEl.value
          ) {
            msgErr = "The two passwords should match";
            notValid(el, msgErr);
            formValid.twoPass = false;
          } else {
            if (el.id === "pw-signup" || el.id === "rpw-signup") {
              valid(true);
              formValid.twoPass = true;
            } else valid();
          }
        }, 1000);
      },
      () => clearTimeout(timer)
    );
  });

  // imgUser.removeEventListener("input", inputEvent);
  // document.querySelector("#usr-login").removeEventListener("input", inputEvent);
  // document.querySelector("#pw-login").removeEventListener("input", inputEvent);

  el.addEventListener("focusout", () => {
    if (
      formValid.taken === false ||
      (el.value.length > 0 && el.validity.patternMismatch) ||
      el.validity.typeMismatch ||
      (passwdEl.value !== "" &&
        rPasswdEl.value !== "" &&
        passwdEl.value !== rPasswdEl.value &&
        el.nextElementSibling.textContent !== "")
    )
      el.closest("label").firstElementChild.style.color = "rgb(244, 33, 46)";
  });
  el.addEventListener("focusin", () => {
    const targetEl = el.closest("label").firstElementChild;
    if (
      el.validity.patternMismatch ||
      el.validity.typeMismatch ||
      el.style.outline === "red solid 0.01px"
    )
      targetEl.style.color = "rgb(244, 33, 46)";
  });
});

const fakeFetching = async () => {
  return new Promise((resolv, _) => {
    setTimeout(() => {
      resolv();
    }, 2000);
  });
};

//// Sign Up
const submitSignupHandler = async (e) => {
  e.preventDefault();
  // const usersArray = localStorage.getItem("users") || [];
  if (!formValid.taken || !formValid.twoPass) return;

  //////
  const formData = Object.fromEntries(new FormData(e.target));

  // stored img in local storage
  const inputImg = document.getElementById("img-signup");
  // inputImg.addEventListener("change", (e) => {
  const fileReader = new FileReader();

  const img = inputImg.files[0] || new Blob([], { type: "image/png" });
  fileReader.readAsDataURL(img);

  fileReader.onload = () => {
    formData["img-signup"] = fileReader.result;
    if (!inputImg.files[0]) formData["img-signup"] = null;
    formData.id = crypto.randomUUID();
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    ////// Clear inputs
    inputs.forEach((el) => {
      // if (el != imgUser) {
      el.value = "";

      const placeholdText = document.querySelector(
        `label[for=${el.id}] .placeholder`
      );
      if (placeholdText) placeholdText.style = "";
      // }
    });
  };

  toggleRegisterBoxs(null, true, null);
  await fakeFetching();
  toggleRegisterBoxs(null, null, true);
};
document
  .querySelector(".form.signup")
  .addEventListener("submit", submitSignupHandler);

//// Sign In
document.querySelector(".login-box").addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailEl = e.target.querySelector('input[type="text"]');
  const passwdEl = e.target.querySelector('input[type="password"]');
  /// if user created new account
  const users = JSON.parse(localStorage.getItem("users"));
  const formData = Object.fromEntries(new FormData(e.target));
  let user;
  if (users) {
    user = users.find((user) => {
      return (
        user["email-signup"] === formData["usr-login"] ||
        user["usr-signup"] === formData["usr-login"]
      );
    });
  }

  if (!user) {
    notValid(emailEl, "The username or email entered does not exist.");
    return;
  } else if (user["pw-signup"] !== formData["pw-login"]) {
    notValid(passwdEl, "The Password is incorrect");
    return;
  }

  //// Redirect to home
  users.forEach((user) => {
    user.taken =
      user["usr-signup"] === formData["usr-login"] ||
      user["usr-email"] === formData["usr-login"]
        ? true
        : false;
  });

  localStorage.setItem("users", JSON.stringify(users));
  // spinner box
  toggleRegisterBoxs(null, null, null, true);

  await fakeFetching();
  location.pathname = `./home.html`;
});
