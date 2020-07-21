var xhr = new XMLHttpRequest(); //creating a new instance of the XMLHttpRequest object
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //arguments: GET used when retrieving data from a server, 2nd argument: URL we want to retrieve
xhr.send();     //sends the request

xhr.onreadystatechange = function () {
    /* xhr object maintains an external state as it is completing various parts of our request operation,
     ready state = 4 means the operation is complete - see MDN for more on ready states */
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
    // http status code 200 means "ok - request succeeded"
        data = (JSON.parse(this.responseText));     // assigns parsed JSON data to the variable
    }
};

console.log(data);  // gets called before we have ready state of 4 - therefore data is undefined

setTimeout(function() {
    console.log(data);  
}, 500);        // console.log is now actually printing our data
                // because we set a delay of 500 milliseconds on its execution - which means we no longer require the setData function