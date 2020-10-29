

for (let i = 0; i<5; i++){
    document.body.innerHTML +=`
    <div class="sirkel"></div>
    `
}


let variabel = 1;

while(variabel<=4){    
    document.body.innerHTML +=`
        <div class="firkant"></div>
    `
    variabel++;

}

const KLESPLAGG = ["Bukse","Skjorte","Dress","Kjole"];
console.log(KLESPLAGG);

// console.log (KLESPLAGG[0]);
// console.log (KLESPLAGG[1]);
// console.log (KLESPLAGG[2]);
// console.log (KLESPLAGG[3]);

for (let i=0; i<KLESPLAGG.length; i++){
    console.log (KLESPLAGG[i]);
}

//opprett array med valgfritt innhold. bruke en for loop for å presentere det innholdet i body elementet