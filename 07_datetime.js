//Dates
let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

/******** */

let myCreatedDate = new Date(2023,0,23,5,3);

// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);

//console.log(Date.now());

let newDate = new Date();

console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: "long"
})