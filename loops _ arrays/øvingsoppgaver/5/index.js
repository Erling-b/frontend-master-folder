let formDyr = document.querySelector(".form-dyr");
let inpDyr = document.querySelector(".inpDyr");
let inpUrl = document.querySelector(".inpUrl");
let sectionDyr = document.querySelector(".section-dyr");

let dyr = [];

function leggTilDyr(evt) {
    evt.preventDefault();
    dyr.push(
        {
            navn: inpDyr.value,
            bildeUrl: inpUrl.value
        }
    );

inpDyr.value="";
inpUrl.value="";

console.log(dyr);

visFremDyr();
};


function visFremDyr() {
    sectionDyr.innerHTML = "";

    dyr.forEach( dyr => {
        sectionDyr.innerHTML += `
        <article>
            <h2>${dyr.navn}</h2>
            <img src="${dyr.bildeUrl}" alt="">
        </article>
        `
    })
};

formDyr.addEventListener("submit", leggTilDyr);