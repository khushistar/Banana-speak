var textInput = document.querySelector("#text-input");
var button = document.querySelector("#translate-btn");
var textOutput = document.querySelector("#output");

var serverAPI = "https://api.funtranslations.com/translate/minion.json";

function geturl(input) {
  return serverAPI + "?" + "text=" + input;
}
function errorhandle(error) {
  console.log(error);
  alert("Something  went wrong with server. Please try again");
}
function clickHandle() {
  var inputvalue = textInput.value;
  fetch(geturl(inputvalue))
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      textOutput.innerText = result.contents.translated;
    })
    .catch(errorhandle);
}

button.addEventListener("click", clickHandle);
