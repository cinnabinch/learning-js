// Numbers

let age = 35; //integer
let age2 = 2.2; // decimal
const add = age + age2;
console.log(add); //gets 36.2

const sub = age - age2;
console.log(sub);

const mult = age * age2;
console.log(mult);

const div = age / age2;
console.log(div);

// += -= *= ++ -- %

let num = 40;
num +=4; // ADDS AND EQUAL
num -=1; // SUBS AND EQUAL
num ++; //44 - ADDS 1
num --; //43 - SUBS 1 

console.log(num);

// % = Module - returns remainder after division

let account = 10;
let rem = account % 3;

console.log(rem);

// Basic Math Operations

const random = 4 + 6 + 10 * 10;
console.log(random); //110

const random2 = (4 + 6 + 10) * 10;
console.log(random2); //200

//

let num1 = 24; 
let num2 = 16;
num2 = 'pants'; 

let num3 = num1 + num2;
console.log(num3);  // answer would be 24pants because adding number and string

// 

let n1 = 3;
let n3 = 3 - '1'
console.log(n3);

// example of implicit type

const randomNumber = 9;

document.querySelector('.form').addEventListener('submit', function
(e) {
    e.preventDefault();
    let value = document.getElementById('amount').value;
    value = parseInt(value);
    console.log('Input Value Type ' + value);
    console.log("sum of two value");
    console.log(randomNumber + value);
}
);


