document.body.innerHTML +=`
<div id ="nmr1"></div>
<div id ="nmr2"></div>
`
nmr1.style.width = "100px";
nmr1.style.height = "100px";
nmr1.style.backgroundColor = "#fdccfe";

nmr2.style.width = "100px";
nmr2.style.height = "100px";
nmr2.style.backgroundColor = "#adfcfe";



let divs = document.body.innerHTML +=`
<div class="nmr3">
<div></div>
<div></div>
</div>
`
let fitteFaen = document.querySelector(".nmr3")
let fitt1 = document.querySelector(".nmr3 div:nth-child(1)")
let fitt2 = document.querySelector(".nmr3 div:nth-child(2)")
fitt2.style.width = "100px";
fitt2.style.height = "100px";
fitt2.style.backgroundColor = "#c52a2a";
fitt1.style.height = "100px";
fitt1.style.width = "100px";
fitt1.style.backgroundColor = "#7b2f7c";


console.log(fitteFaen);
console.log(fitt1);