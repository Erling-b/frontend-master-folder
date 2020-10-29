// const ARRAY = ["Katt", "Hund", "Ku", "Hest"]

// console.log(ARRAY[3]);

// const KATT = ARRAY [0];

// console.log(KATT);
// //push legger til verdi i slutten av arrayet
// ARRAY.push("Rådyr");
// console.log(ARRAY);

// //pop fjerner på slutten
// const DELETED = ARRAY.pop()
// console.log(DELETED);
// console.log(ARRAY);

// console.log(ARRAY);

// ARRAY.splice(1, 1);

// console.log(ARRAY);
//const ARRAY = ["Katt", "Hund", "Ku", "Hest"]
//shift bruker shift og unshift til å fjerne/legge tul verdier i begynnelsen av ett array
//ARRAY.shift();
// console.log(ARRAY);
//ARRAY.unshift();

//ARRAY[0] = "Giraff";

const ARRAY2 = [
{
    klesplagg: "Kjole",
    pris: 100
},
{
    klesplagg: "Dress",
    pris:5000
},
{
    klesplagg: "skjorte",
    pris:499
},
{
    klesplagg: "jeans",
    pris:699
}
]
//console.log(ARRAY2[0],ARRAY2[1]);
//console.log(ARRAY2[0].klesplagg);
//console.log(ARRAY2[0].pris);


const TILFELDIG_TALL = Math.random();
//console.log(TILFELDIG_TALL);

const TILPASSET_TALL = Math.random() * ARRAY2.length
//console.log(TILFELDIG_TALL);

const AVRUNDET_TALL = Math.floor(TILFELDIG_TALL);
//console.log(AVRUNDET_TALL);

const KJOLE = ARRAY2[AVRUNDET_TALL].klesplagg;
const KJOLEPRIS = ARRAY2[AVRUNDET_TALL].pris;

document.body.innerHTML = `
    <h1>Klesplagg: ${KJOLE}</h1>
    <p>Pris: ${KJOLEPRIS}</p>
`

const ARRAY3 = [
{
    klesplagg: "Lue",
    pris: 199
},
{
    klesplagg: "Sokker",
    pris: 79
}
]

const SORT = [...ARRAY2, ...ARRAY3];

const ARRAY_KOPI = [...ARRAY3];



