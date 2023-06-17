function addConvData() {

	// undefined examples
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

	// function to turn all undefined text examples red
	function turnTxtRed(elementId) {
		return elementId.setAttribute("class", "redtxt");
	}
}
window.onload = addConvData;