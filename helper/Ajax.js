// let divTest = document.querySelector(".second-div.section");
// let fetchDataExport
// addEventListener("load",()=>{

function fetchData(fun) {
  let paragraphDataServer = [];
  let userDataServer = [];
  let xhttp = new XMLHttpRequest();
  xhttp.open("Get", "/data/placeholder-posts.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      paragraphDataServer = JSON.parse(this.responseText);

      let xhttp = new XMLHttpRequest();
      xhttp.open("Get", `${"/data/users.json"}`);
      xhttp.send();
      xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
          userDataServer = JSON.parse(this.responseText);
          setTimeout(() => {
            fun(userDataServer, paragraphDataServer);
          }, 500);
        }
      };
    }
  };
}

// })

export default fetchData;
