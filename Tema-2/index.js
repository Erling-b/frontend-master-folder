let kurv = document.querySelector("#kurv");
let produktliste = document.querySelector("#produktliste");
let kartCounter = document.getElementsByClassName("kartCounter");
let total = [];
let sum = 0;
let handlekurv = [];
let produkter = [
    {
        id: "prod-1",
        artist: "Wire",
        album: "Pink Flag",
        pris:349,
        bilde:"https://img.discogs.com/k_d8bomctadXs8JJpeET4S-vMjg=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2194306-1334102777.jpeg.jpg"
    },
    {
        id: "prod-2",
        artist: "Jay Reatard",
        album: "Blood Visions",
        pris:349,
        bilde:"https://upload.wikimedia.org/wikipedia/en/9/9a/BloodVisionsAlbum.jpg"
    },
    {
        id: "prod-3",
        artist: "Kate Bush",
        album: "The Dreaming",
        pris:349,
        bilde:"https://s3.amazonaws.com/quietus_production/images/articles/9945/10113_1505232920.jpg"
    },
    {
        id: "prod-4",
        artist: "Otis Redding",
        album: "Otis Blue: Otis Redding Sings Soul",
        pris:349,
        bilde:"https://cdn11.bigcommerce.com/s-rdecee92oy/images/stencil/1280x1280/products/13107/1738970/apsa095-large__26282.1544633465.jpg?c=2"
    },
    {
        id: "prod-5",
        artist: "Spiritualized",
        album: "Ladies and Gentlemen We Are Floating in Space",
        pris:349,
        bilde:"https://images-na.ssl-images-amazon.com/images/I/71%2Bmxe97GBL._SX425_.jpg"
    },
    {
        id: "prod-6",
        artist: "Weyes Blood",
        album: "Titanic Rising",
        pris:349,
        bilde:"https://media.pitchfork.com/photos/5c7eafd9b8753a13dd400085/1:1/w_600/WeyesBlood_TitanicRising.jpg"
    },
    {
        id: "prod-7",
        artist: "Black Star",
        album: "Mos Def & Talib Kweli Are Black Star",
        pris:349,
        bilde:"https://images-na.ssl-images-amazon.com/images/I/61OvtKlQe4L._SY355_.jpg"
    },
    {
        id: "prod-8",
        artist: "The Velvet Underground",
        album: "The Velvet Underground & Nico",
        pris:349,
        bilde:"https://images-na.ssl-images-amazon.com/images/I/61wJx-%2B0I2L._SL1400_.jpg"
    }
];
if (produktliste){
let html = ""

produkter.forEach( (produkt)=> {
    html+= `
    <div class="divGrid">
    <img src="${produkt.bilde}" alt="album bilde">
    <div class=divGrid3>
    <div>${produkt.artist}</div>
    <div>${produkt.album}</div>
    <div>${produkt.pris},-</div>
    </div>
    <button class="add_bttn" id="${produkt.id}">Legg til vare </button>
    </div>
    `;
    });
    produktliste.innerHTML = html;
}

    function LeggTil(evt){
    
        if(evt.target.className==="add_bttn"){
            let found = produkter.find(prod => prod.id===evt.target.id);
        handlekurv.push(found);
        let KurvString = JSON.stringify(handlekurv);
        localStorage.setItem("handlekurv",KurvString);
        kartCounter.innerHTML=`
        ${handlekurv.length}
        `
        }};
    if(produktliste){
    produktliste.addEventListener("click", LeggTil);
    }
    let backToArray = JSON.parse(localStorage.getItem("handlekurv"));
    if (backToArray){
        handlekurv=backToArray;
    }


if (handlekurv){
    let kurvHtml = ""
    sum = 0

    handlekurv.forEach( (kurvItem)=> {
        kurvHtml+=`
    <div class="divGrid2">
        <img src="${kurvItem.bilde}" alt="album bilde>
            <div class="kartDeling">
                <div>${kurvItem.artist}</div>
                <div>${kurvItem.album}</div>
                <div>${kurvItem.pris},-</div>
                <button class="remove_bttn" id="${kurvItem.id}">Fjern vare</button>
            </div>
    </div>
`;

sum+=kurvItem.pris;
sluttsum.innerHTML=`
TotalPris : ${sum},-
`

});
kurv.innerHTML = kurvHtml;
};


let kurvHtml = "";
function Fjern(e){
    kurvHtml=""
    let foundKurv = handlekurv.find(prodKurv => prodKurv.id===e.target.id);
    if(foundKurv){
    let kurvIndex = handlekurv.indexOf(foundKurv);
    handlekurv.splice(kurvIndex, 1);
    localStorage.setItem("handlekurv",JSON.stringify(handlekurv));
    handlekurv = JSON.parse(localStorage.getItem("handlekurv"))
    sum=0;
    handlekurv.forEach(kurvItem => {
        kurvHtml+=
        `
<div class="divGrid2">
<img src="${kurvItem.bilde}" alt="album bilde>
<div class="kartDeling">
<div>${kurvItem.artist}</div>
<div>${kurvItem.album}</div>
<div>${kurvItem.pris},-</div>
<button class="remove_bttn" id="${kurvItem.id}">Fjern vare</button>
</div>
</div>
`;

sum+=kurvItem.pris;
sluttsum.innerHTML=`
TotalPris : ${sum},-
`

});
if (handlekurv.length===0){
    sluttsum.innerHTML=`
    TotalPris : ${sum},-
    `
    kartCounter.innerHTML=`
    ${handlekurv.length}
    `
}
kurv.innerHTML = kurvHtml;
    };
};
   
    if(kurv){
        kurv.addEventListener("click", Fjern);
        }







let CLEAR = document.querySelector("#CLEAR");
function bjarne(){
localStorage.clear("handlekurv");
}
CLEAR.addEventListener("click",bjarne)
