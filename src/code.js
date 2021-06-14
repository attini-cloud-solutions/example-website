// function myFunction() {

//   document.getElementById("demo").innerHTML = "Hello World";
// }

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
var xmlHttp = new XMLHttpRequest();

console.log(baseUrl)


function putValue() {
  var value = document.getElementById("myValue").value;
  xmlHttp.open( "POST", baseUrl.concat("/api/put-value"), false );
  xmlHttp.send( value );
}

function getValue()
{
    xmlHttp.open( "GET", baseUrl.concat("/api/get-value"), false );
    xmlHttp.send( null );
    console.log(xmlHttp)
    document.getElementById("demo").innerHTML = xmlHttp.responseText;
}