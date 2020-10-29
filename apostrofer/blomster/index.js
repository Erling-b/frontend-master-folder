// hente html elementer

let knapp = document.querySelector('#knapp_legg_til');
let input = document.querySelector('#blomsterinput');
let output = document.querySelector('#output');

let blomster = [];

function leggTilBlomst() {
    let blomst = input.value;
    blomster.push(blomst);
    input.value = "";
    console.log(blomster);
    output.textContent = blomster;
}

//legg til lytter på knapp
knapp.addEventListener('click', leggTilBlomst);