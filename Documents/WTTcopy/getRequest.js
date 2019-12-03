

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const url='url';
Http.onreadystatechange = function() {
    if (Http.readyState == 4 && xmlHttp.status == 200)
        callback(Http.responseText);
};
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};
