let divTest = document.querySelector(".second-div.section");
// let fetchDataExport
// addEventListener("load",()=>{

function fetchData(fun, isApi) {
  let paragraphDataServer = [];
  let userDataServer = [];
  let xhttp = new XMLHttpRequest();
  xhttp.open("Get", "./placeholder-posts.json", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      paragraphDataServer = JSON.parse(this.responseText);

      let xhttp = new XMLHttpRequest();
      xhttp.open(
        "Get",
        `${isApi ? "./placeholder-users.json" : "./users.json"}`,
        true
      );
      xhttp.send();
      xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
          userDataServer = JSON.parse(this.responseText);

          fun(userDataServer, paragraphDataServer);
        }
      };
    }
  };
}

// })

export default fetchData;
