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
	
	for (var i = 1; i <= 140; i++) {
		result += i.toString();
		if (!evenDiv(i, firstDiv) && !evenDiv(i, secondDiv)) {
			result += " House";
		}
		else {
			if (evenDiv(i, firstDiv)) {
				result += " Residential Building";
			}
			if (evenDiv(i, secondDiv)) {
				result += " Skyscraper";
			}
		}
		result += "<br>";
	}
	
	document.getElementById('output').innerHTML = result;
}

function evenDiv(num1, num2) {
	return (num1 % num2 == 0 ? true : false);
}
