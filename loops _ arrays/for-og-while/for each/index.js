// const KLESPLAGG = ["Kjole","Dress","Bukse","Skjorte"];

// KLESPLAGG.forEach(plagg => {document.body.innerHTML+= `<article>${plagg}</article>`});

const KLESPLAGG_OG_PRIS = [
    {
        klesplagg: "Kjole",
        pris: 2300,
        bilde: "./"
    },
    {
        klesplagg: "Dress",
        pris: 8000
    },
    {
        klesplagg: "Bukse",
        pris: 599
    },
    {
        klesplagg: "Skjorte",
        pris: 399
    }
]

console.log(KLESPLAGG_OG_PRIS[0]);
console.log(KLESPLAGG_OG_PRIS[0].klesplagg);
console.log(KLESPLAGG_OG_PRIS[0].pris);

KLESPLAGG_OG_PRIS.forEach(item => {
    document.body.innerHTML += `
    <article>
        <p>Klesplagg: ${item.klesplagg}</p>
        <p>Pris: ${item.pris}</p>
    </article>
    `
})