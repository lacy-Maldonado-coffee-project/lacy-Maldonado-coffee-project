"use strict"

function renderCoffee(coffee) {
	var html = '<div class="coffee row">';
	html += '<div class="col d-none ">' + coffee.id + '</div>';
	html += '<div class="col">' + coffee.name + '</div>';
	html += '<div class="col">' + coffee.roast + '</div>';
	html += '</div>';

	return html;
}

function renderCoffees(coffees) {
	var html = '';
	for (var i = coffees.length - 1; i >= 0; i--) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}

function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data

	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];
	coffees.forEach(function (coffee) {
		if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
		} else if (selectedRoast === "any") {
			filteredCoffees.push(coffee);
		}
	});
	tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesText(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data

	var filteredCoffees = [];
	var textSearch = nameSelection.value.toLowerCase();
	var selectedRoast = roastSelection.value;
	console.log(textSearch);

	coffees.forEach(function (coffee) {
		if (coffee.name.toLowerCase().includes(textSearch) && (coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'any')) {
			filteredCoffees.push(coffee);
			// }
		}
	});
	writeCoffeeHtmlToPage(filteredCoffees);
}

function addCoffee(e) {
	e.preventDefault();
	var newRoast = newRoastSeletion.value;
	var newName = newNameSelection.value;
	var coffee = {name: newName, roast: newRoast}
	var coffeeJSON = JSON.stringify(coffee);
	localStorage.setItem("newCoffee", coffeeJSON);
	var text = localStorage.getItem("newCoffee");
	var obj = JSON.parse(text);
	coffees.push(obj);
	writeCoffeeHtmlToPage(coffees);


}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
	{id: 1, name: 'Columbian', roast: 'light'},
	{id: 2, name: 'Crow And Coffee', roast: 'light'},
	{id: 3, name: 'Darkness', roast: 'light'},
	{id: 4, name: 'Drank', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Din Din', roast: 'medium'},
	{id: 7, name: 'tea infused', roast: 'dark'},
	{id: 8, name: 'Halle Berry', roast: 'dark'},
	{id: 9, name: 'Popovich', roast: 'dark'},
	{id: 10, name: 'Euro Step', roast: 'dark'},
	{id: 11, name: 'Butter Pecan', roast: 'dark'},
	{id: 12, name: 'Texas Pecan', roast: 'dark'},
	{id: 13, name: 'Super Chill', roast: 'dark'},
	{id: 14, name: 'MeeMee', roast: 'dark'},
];
coffees.reverse();
function writeCoffeeHtmlToPage(coffeeArray) {
	tbody.innerHTML = renderCoffees(coffeeArray.sort((a, b) => (a.name > b.name) ? -1 : 1));
}


var addingCoffee = document.querySelector('#addCoffees');
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector("#submitType");
var newNameSelection = document.querySelector('#newName')
tbody.innerHTML = renderCoffees(coffees);
var newRoastSeletion = document.querySelector('#add-roast');

submitButton.addEventListener('click', updateCoffees);

addingCoffee.addEventListener('click', addCoffee);







// "use strict"
//
// function renderCoffee(coffee) {
// 	var html = '<div class="coffee row">';
// 	html += '<div class="col d-none ">' + coffee.id + '</div>';
// 	html += '<div class="col">' + coffee.name + '</div>';
// 	html += '<div class="col">' + coffee.roast + '</div>';
// 	html += '</div>';
//
// 	return html;
// }
//
// function renderCoffees(coffees) {
// 	var html = '';
// 	for (var i = coffees.length - 1; i >= 0; i--) {
// 		html += renderCoffee(coffees[i]);
// 	}
// 	return html;
// }
//
// function updateCoffees(e) {
// 	e.preventDefault(); // don't submit the form, we just want to update the data
//
// 	var selectedRoast = roastSelection.value;
// 	var filteredCoffees = [];
// 	coffees.forEach(function (coffee) {
// 		if (coffee.roast === selectedRoast) {
// 			filteredCoffees.push(coffee);
// 		} else if (selectedRoast === "any") {
// 			filteredCoffees.push(coffee);
// 		}
// 	});
// 	tbody.innerHTML = renderCoffees(filteredCoffees);
// }
//
// function updateCoffeesText(e) {
// 	//e.preventDefault(); // don't submit the form, we just want to update the data
//
// 	var filteredCoffees = [];
// 	var textSearch = nameSelection.value.toLowerCase();
// 	var selectedRoast = roastSelection.value;
// 	console.log(textSearch);
//
// 	coffees.forEach(function (coffee) {
// 		if (coffee.name.toLowerCase().includes(textSearch) && (coffee.roast.toLowerCase() === selectedRoast || selectedRoast === 'any')) {
// 			filteredCoffees.push(coffee);
// 			// }
// 		}
// 	});
// 	writeCoffeeHtmlToPage(filteredCoffees);
// }
//
// // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
// 	{id: 1, name: 'Columbian', roast: 'light'},
// 	{id: 2, name: 'Crown And Coffee', roast: 'light'},
// 	{id: 3, name: 'Darkness', roast: 'light'},
// 	{id: 4, name: 'Drank', roast: 'medium'},
// 	{id: 5, name: 'American', roast: 'medium'},
// 	{id: 6, name: 'Din Din', roast: 'medium'},
// 	{id: 7, name: 'CBD infused', roast: 'dark'},
// 	{id: 8, name: 'Halle Berry', roast: 'dark'},
// 	{id: 9, name: 'Popovich', roast: 'dark'},
// 	{id: 10, name: 'Euro Step', roast: 'dark'},
// 	{id: 11, name: 'Butter Pecan', roast: 'dark'},
// 	{id: 12, name: 'Texas Pecan', roast: 'dark'},
// 	{id: 13, name: 'Super Chill', roast: 'dark'},
// 	{id: 14, name: 'WeeWee', roast: 'dark'},
// ];
// coffees.reverse();
//
// function writeCoffeeHtmlToPage(coffeeArray) {
// 	tbody.innerHTML = renderCoffees(coffeeArray.sort((a, b) => (a.name > b.name) ? -1 : 1));
// }
//
//
// var tbody = document.querySelector('#coffees');
// var submitButton = document.querySelector('#submit');
// var roastSelection = document.querySelector('#roast-selection');
// var nameSelection = document.querySelector("#submitType");
// tbody.innerHTML = renderCoffees(coffees);
//
// submitButton.addEventListener('click', updateCoffees);