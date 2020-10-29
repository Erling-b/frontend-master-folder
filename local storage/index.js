//lage enkeltverdier i local storage
let key = "name";
let value = "Kevin";

localStorage.setItem(key, value);

let localValue = localStorage.getItem(key);

console.log(localValue);

document.body.innerHTML +=localValue;


///

let array=["Kevin","Robert","Gløer"];

//for å legge array inn i local storage må jeg transformere det til en tekst string

let arrayAsString = JSON.stringify(array);
//console.log(arrayAsString);

// legger arrayasstring inn i local storage
localStorage.setItem("array", arrayAsString);

console.log(localStorage.getItem("array"));

let backToArray = JSON.parse(localStorage.getItem("array"));

console.log(backToArray);

backToArray.forEach(name => document.body.innerHTML += name);

//localStorage.removeItem("array");

//localStorage.clear();