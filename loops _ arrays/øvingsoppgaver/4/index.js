let numbers = [20,31,9,4,32,43,12,4,13];

var sum = 0;

for(var i = 0; i < numbers.length; i++){

sum += numbers[i]

}
console.log(sum);

const FILTER_R = numbers.filter(function(number) {
    return number > 20;
  });
  

console.log(FILTER_R);

const MAX = numbers.sort((a,b)=> a-b)[numbers.length-1]
console.log(MAX);