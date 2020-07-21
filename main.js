var xhr = new XMLHttpRequest(); //creating a new instance of the XMLHttpRequest object

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //arguments: GET used when retrieving data from a server, 2nd argument: URL we want to retrieve
xhr.send();     //sends the request

xhr.onreadystatechange = function () {
    /* xhr object maintains an external state as it is completing various parts of our request operation,
     ready state = 4 means the operation is complete - see MDN for more on ready states */
    if (this.readyState == 4 && this.status == 200) {
    // http status code 200 means "ok - request succeeded"
        console.log(JSON.parse(this.responseText));
    // log to the console - parsed JSON data    
    }
};

