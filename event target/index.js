let knapp1 = document.querySelector("#knapp1");
let knapp2 = document.querySelector("#knapp2");
let knapp3 = document.querySelector("#knapp3");

function minFunksjon(evt){
    console.log(evt.target.id);
}

knapp1.addEventListener("click", minFunksjon);
knapp2.addEventListener("click", minFunksjon);
knapp3.addEventListener("click", minFunksjon);