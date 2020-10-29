const HESTER = ["Appaloosa","Arabian","Thoroughbred","Morgan","American Paint Horse"];
let LIST = document.querySelector("ul")
console.log(LIST);
for (let h=0; h<HESTER.width;h++)
{
LIST.innerHTML +=`

<li>${HESTER[h]}</li>

`
}