function getdata(){
	return "test"

};

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
   // document.getElementById("tbody").innerHTML = 
    var test= xhttp.responseText;
    test2= JSON.parse(test)
    
var html="";
    for (i=0; i<test2.length; i++ ){
    
    		html+="<tr><td>"+test2[i].id+ "</td>"+
                "<td>"+ test2[i].firstName+"</td>"+
                "<td>"+ test2[i].lastName+"</td>"+
                "<td>"+test2[i].email+"</td>"
              +"</tr>";

    }
    document.getElementById("tbody").innerHTML=html; 
    }
  };
  xhttp.open("GET", "http://localhost:3000/getAllData", true);
  xhttp.send();
}

loadDoc();

