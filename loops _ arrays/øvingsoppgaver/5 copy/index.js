let formBloggere = document.querySelector(".form-bloggere")
let inpNavn = document.querySelector(".inpNavn");
let inpUrl = document.querySelector(".inpUrl");
let sectionBloggere = document.querySelector(".section-bloggere");


let bloggere = [];


// Oppgave 5a: Legge til bloggere i arrayet
function leggTilBloggere(evt) {
    evt.preventDefault();
    bloggere.push(
        {
            navn: inpNavn.value,
            bildeUrl: inpUrl.value
        }
    );
    
    inpNavn.value = "";
    inpUrl.value = "";
    
    console.log(bloggere);
    
    visFremBloggere();
};

// Oppgave 5b og 5c: Vise frem og oppdatere ved endring
function visFremBloggere() {
    sectionBloggere.innerHTML = "";
    
    bloggere.forEach( blogger => {
        sectionBloggere.innerHTML += `
            <article>
                <h2>${blogger.navn}</h2>
                <img src="${blogger.bildeUrl}" alt="">
            </article>
    ` 
    })
};

formBloggere.addEventListener("submit", leggTilBloggere);