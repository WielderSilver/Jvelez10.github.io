"use strict";

function greetChange() {
	const first = document.getElementById('firstName').value;
	const mid = document.getElementById('middleInitial').value;
	const last = document.getElementById('lastName').value;
	const newGreeting = `Greetings from Silverbeam Industries' ${first} ${mid} ${last}!`;
	document.getElementById('greeting').innerHTML = newGreeting;
	
	let result = '';	
	
	const firstDiv = 3;
	const secondDiv = 5;
 	 const thirdDiv = 7;
	
	for (var i = 1; i <= 140; i++) {
		result += i.toString();
		if (!evenDiv(i, firstDiv) && !evenDiv(i, secondDiv)) {
			result += " house";
		}
		else {
			if (evenDiv(i, firstDiv)) {
				result += " residential building";
			}
			if (evenDiv(i, secondDiv)) {
				result += " Skyscraper";
			}
      	if (evenDiv(i, thirdDiv)) {
				result += " Hotel";
			}
		}
		result += "<br>";
	}
	
	document.getElementById('output').innerHTML = result;
}

function evenDiv(num1, num2) {
	return (num1 % num2 == 0 ? true : false);
}
