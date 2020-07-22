function getData(cb) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText)); //runs the function that we pass in as a callback - when getData called function will be executed here with this as the data argument
    }
  };
}

function printDataToConsole(data) {
    console.log(data);
}

//calling getData function
getData(printDataToConsole);