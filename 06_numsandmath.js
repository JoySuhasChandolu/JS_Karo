const score = 400;

const balance = new Number(100);

console.log(score)
console.log(balance);

console.log(balance.toString())

console.log(balance.toFixed(2));

const otherNum = 23.6574;

console.log(otherNum.toPrecision(2))

const hundreds = 100000000;

console.log(hundreds.toLocaleString('en-IN'));


//Number => MAX

/***************************** Maths ***************/

console.log(Math);
console.log(Math.abs(-445));
console.log(Math.round(4.6));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

//to create randomness between a range;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
