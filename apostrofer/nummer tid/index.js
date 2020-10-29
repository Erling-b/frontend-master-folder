let minListe = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let mainBoks = document.querySelector('#main');

let teller = 0;

function minFunksjon() {
 let bredde = minListe[teller] + 'px';
 mainBoks.style.width = bredde;
 teller++;

 if(teller >= minListe.length) {
     teller = 0;
 }
}

window.setInterval(minFunksjon, 500)