"use strict";



function fizzBuzz() {
	const first = document.getElementById('firstName').value;
	const mid = document.getElementById('middleInitial').value;
	const last = document.getElementById('lastName').value;
	const newGreeting = `Welcome to Little Guy Cafe ${first} ${mid} ${last}!`;
	document.getElementById('greeting').innerHTML = newGreeting;
	let outputText = "";
	for (var i = 1; i <= 140; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            outputText += i + " House<br>";
        }
        else {
            outputText += i.toString();
            if (i % 3 == 0) {
                outputText += " Residentiail Building";
            }
            if (i % 5 == 0) {
                outputText += " Skyscraper";
            }
            outputText += "<br>";
        }
    } 
	document.getElementById('output').innerHTML = outputText;
}
