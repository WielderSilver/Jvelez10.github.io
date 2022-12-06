"use strict";

var welcome = "Welcome to Silverbeam Industries!";
var welcome2 = "We are a construction company that specializes in quick and affordable yet high quality work."

alert(welcome);
alert(welcome2);

var pricePerSqft = 18;
var quotePrompt = "How much squarefoot do you need built? ";
var priceStr = "$18 per square foot. $15 if 2500 Sqft or more.";
var input = prompt(quotePrompt + priceStr);
if (input >= 2500) {
	pricePerSqft = 15;
}
var estimate = pricePerSqft * input;

alert("Your estimated price is $" + estimate + ".");
alert("Contact us for inquiries and specifics regarding costs and building material.");
