function addConvData() {
	// function calls
	printUndEx();
	printTypeOf();
}
window.onload = addConvData;

// function prints undefined examples
function printUndEx() {
	var und1 = document.getElementById("und1"); // '&nbsp' adds a non-broken space
	und1.innerHTML = "A function without a return statement will return:" + '&nbsp;'.repeat(38) + "undefined";
	turnTxtRed(und1);
	var und2 = document.getElementById("und2");
	und2.innerHTML = "The value of a variable without an assigned value is:" + '&nbsp;'.repeat(33) + "undefined";
	turnTxtRed(und2);
	var und3 = document.getElementById("und3");
	und3.innerHTML = "The value of an array item that doesn't exist in a sparse array:" + '&nbsp;'.repeat(19) + "undefined";
	turnTxtRed(und3);
	var und4 = document.getElementById("und4");
	und4.innerHTML = "The value of a property that doesn't exist:" + '&nbsp;'.repeat(51) + "undefined";
	turnTxtRed(und4);
	var und5 = document.getElementById("und5");
	und5.innerHTML = "The value of a property that's been deleted:" + '&nbsp;'.repeat(48) + "undefined";
	turnTxtRed(und5);
	var und6 = document.getElementById("und6");
	und6.innerHTML = "The value that can't be assigned to a property when an object is created:" + '&nbsp;'.repeat(2) + "undefined";
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

	// typeOf examples 
	var typeOf1 = document.getElementById("typeOf1"); // '&nbsp' adds a non-broken space
	typeOf1.innerHTML = "var test1 = \"abcdef\";" + '&nbsp;'.repeat(19) + "is of type: " + (typeof test1);
	var typeOf2 = document.getElementById("typeOf2");
	typeOf2.innerHTML = "var test2 = 123;" + '&nbsp;'.repeat(27) + "is of type: " + (typeof test2);
	var typeOf3 = document.getElementById("typeOf3");
	typeOf3.innerHTML = "var test3 = true;" + '&nbsp;'.repeat(27) + "is of type: " + (typeof test3);
	var typeOf4 = document.getElementById("typeOf4");
	typeOf4.innerHTML = "var test4 = {};" + '&nbsp;'.repeat(29) + "is of type: " + (typeof test4);
	var typeOf5 = document.getElementById("typeOf5");
	typeOf5.innerHTML = "var test5 = [];" + '&nbsp;'.repeat(30) + "is of type: " + (typeof test5);
	var typeOf6 = document.getElementById("typeOf6");
	typeOf6.innerHTML = "var test6;" + '&nbsp;'.repeat(37) + "is of type: " + (typeof test6);
	var typeOf7 = document.getElementById("typeOf7");
	typeOf7.innerHTML = "var test7 = { \"abcdef\": 123 };" + '&nbsp;'.repeat(5) + "is of type: " + (typeof test7);
	var typeOf8 = document.getElementById("typeOf8");
	typeOf8.innerHTML = "var test8 = [ \"abcdef\", 123 ];" + '&nbsp;'.repeat(6) + "is of type: " + (typeof test8);
}