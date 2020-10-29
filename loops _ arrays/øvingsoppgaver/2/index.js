const SETNING = "Du gamla du fria";
let DIV = document.querySelector("article")

for (let b = 0; b<SETNING.length; b++) {
    DIV.innerHTML += `
    <h1>${SETNING[b]}</h1>
    `
console.log(SETNING[b])
}