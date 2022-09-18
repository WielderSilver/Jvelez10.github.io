"use strict";

function greetChange() {
	let firstName = document.getElementById('fName').value;
	let midInitial = document.getElementById('mName').value;
	let lastName = document.getElementById('lName').value;
	let newGreet = `Welcome, ${firstName} ${midInitial} ${lastName}!`
	document.getElementById('greeting').innerHTML = newGreet;
	
	let countMax = prompt(`How high do you want to count, ${firstName}?`)
	let result = '';
	for (var i = 1; i <= countMax; i++) {
		i % 2 === 0 ? result += "Web Spun - the number is even<br>" : result += "Web Spun - the number is odd<br>";
	}
	
	document.getElementById('output').innerHTML = result;
}
