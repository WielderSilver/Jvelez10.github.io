"use strict";



function greetChange() {
	let firstName = document.getElementById('fName').value;
	let midInitial = document.getElementById('mName').value;
	let lastName = document.getElementById('lName').value;
	let newGreet = `Welcome, ${firstName} ${midInitial} ${lastName}!`
document.getElementById('greeting').innerHTML = newGreeting;
	let outputText = "";
	for (var i = 1; i <= 140; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            outputText += i + " house <br>";
        }
        else {
            outputText += i.toString();
            if (i % 3 == 0) {
                outputText += " Residential Buildings";
            }
            if (i % 5 == 0) {
                outputText += " skyscraper";
            }
            outputText += "<br>";
        }
    } 
	document.getElementById('output').innerHTML = outputText;
}
