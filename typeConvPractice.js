function addConvData() {

	printUndEx();
	printTypeOf();
}
window.onload = addConvData;

// function prints undefined examples
function printUndEx() {
	var und1 = document.getElementById("und1");
	und1.innerHTML = "A function without a return statement will return: undefined";
	turnTxtRed(und1);
	var und2 = document.getElementById("und2");
	und2.innerHTML = "The value of a variable without an assigned value is: undefined";
	turnTxtRed(und2);
	var und3 = document.getElementById("und3");
	und3.innerHTML = "The value of an array item that doesn't exist in a sparse array: undefined";
	turnTxtRed(und3);
	var und4 = document.getElementById("und4");
	und4.innerHTML = "The value of a property that doesn't exist: undefined";
	turnTxtRed(und4);
	var und5 = document.getElementById("und5");
	und5.innerHTML = "The value of a property that's been deleted: undefined";
	turnTxtRed(und5);
	var und6 = document.getElementById("und6");
	und6.innerHTML = "The value that can't be assigned to a property when an object is created: undefined";
	turnTxtRed(und6);
}

// function to turn all undefined text examples red
function turnTxtRed(elementId) {
	return elementId.setAttribute("class", "redtxt");
}

function printTypeOf() {
	var test1 = "abcdef";
	var test2 = 123;
	var test3 = true;
	var test4 = {};
	var test5 = [];
	var test6;
	var test7 = { "abcdef": 123 };
	var test8 = ["abcdef", 123];

	var typeOf1 = document.getElementById("typeOf1");
	typeOf1.innerHTML = (typeof test1);
	var typeOf2 = document.getElementById("typeOf2");
	typeOf2.innerHTML = (typeof test2);
	var typeOf3 = document.getElementById("typeOf3");
	typeOf3.innerHTML = (typeof test3);
	var typeOf4 = document.getElementById("typeOf4");
	typeOf4.innerHTML = (typeof test4);
	var typeOf5 = document.getElementById("typeOf5");
	typeOf5.innerHTML = (typeof test5);
	var typeOf6 = document.getElementById("typeOf6");
	typeOf6.innerHTML = (typeof test6);
	var typeOf7 = document.getElementById("typeOf7");
	typeOf7.innerHTML = (typeof test7);
	var typeOf8 = document.getElementById("typeOf8");
	typeOf8.innerHTML = (typeof test8);
}