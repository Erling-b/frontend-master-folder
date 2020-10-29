let array = [2,4,6,8,10,12,14,16,18,20];

let dobbel = array.map(num => {
    return num * 2;
});

const FILTER = dobbel.filter(function(number){
    return number > 6 && number < 18;
});

console.log(dobbel);
console.log(FILTER);