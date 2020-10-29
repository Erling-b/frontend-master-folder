const KLESPLAGG = ["Kjole","Bukse","Skjorte"];

const SOMMERKOLLEKSJON = KLESPLAGG.map( plagg => "Sommer"+plagg.toLocaleLowerCase() );
console.log(SOMMERKOLLEKSJON);


SOMMERKOLLEKSJON.map(sommerplagg =>{
document.body.innerHTML += `
<p>${sommerplagg}</p>
`
} );

const KLESKOLLEKSJON = [
    {
        klesplagg: "Kjole",
        pris: 299
    },
    {
        klesplagg:"Bukse",
        pris: 599
    },
    {
        klesplagg:"Skjorte",
        pris: 399
    }
]
const FILTER_RESULTAT = KLESKOLLEKSJON.filter(plagg => plagg.klesplagg === "Kjole" || plagg.klesplagg ==="Bukse"); 

console.log(FILTER_RESULTAT);