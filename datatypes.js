//Primitive (call by value)

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt


const score = false;

const isLoggedIn = false;
const outsideTemp = null

const id = Symbol("1")
const id2 = Symbol("1");

console.log(id === id2);

const bigNumber = 1457525451577851087187104848464435432n;

console.log(typeof bigNumber)

// Reference (Non primitive) call by reference

// Array , Objects, Functions

const heroes = ["shaktimaan","spiderman","batman"]

let myObj = {
    name : "hitesd",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

/// +++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap(Non primitive)

let myYoutubename = "joysuhas_sh";

let anotherName = myYoutubename;

anotherName = "chaiaurcode";

console.log(myYoutubename);

console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "r34243@gfren.com"
}

let userTwo = userOne;

userTwo['upi'] = "joy@upi"

console.log(userOne.upi);
console.log(userTwo.upi);


