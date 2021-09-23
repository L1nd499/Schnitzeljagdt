
 
// var name = window.prompt("wie heisst du");  //window fragt ab
//alert ("name",name);



function klick(){
	//document.write("hey");
	document.getElementById("navi").innerHTML = 'neu';
}




//document.getElementsByTagName('p')[0].innerHTML = 'Absatz durch JavaScript geändert';

function loeschen(){
    var loeschDiv = document.getElementById('kontainer');
	loeschDiv.parentNode.removeChild(loeschDiv);
}





	
	
	function eingabespeichern() {  
        var antwort = document.getElementById("input_id").value;
		
			
		if (antwort == "g"){
	    window.alert("jeah!");
		}
		
		}	