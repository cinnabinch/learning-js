// Data Types

// string
let abby = "abby rocks";
console.log(abby); // doing console.log(typeof abby), it will return with "string"

// number
let num = 18;
console.log(num);

// boolean 
let hanah = true;
let alex = false;
console.log(hanah);
console.log(alex);

// null
let result = null;
console.log(result);

// undefined 
let fname;
console.log(fname)

// arrays (like a list in python)

let friend1 = 'hanah';
let friend2 = 'alex';
let friend3 = 'sydney';

const friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends[1]); //displays alex

// change value 

friends[2] = "clark"; //changes sydney to clark

// function declare

function hello() {
    // logic
    console.log('hi there');
    
}

hello(); //calling the function (invoke)


// function params and arguments

function hi(fname) {
    console.log("hi there " + fname);
}

hi("abby");


// Monday 12/6/21

let fname2 = "abby";

function hello(fname2, lname) {
    console.log('hi ' + fname2 + lname);
}

hello(fname2, 18);


// Calculator - calculate 1 in = 2.54 cm

const wallH = 11;

function calc(value) {
    // console.log('The value for width in cm is: '
    // + (value * 2.54 + 'cm'));
    // return value * 2.54;
    let newValue = value * 2.54;
    return newValue;
}

let wallWidth = calc(10);
let wallHeight = calc(wallH);

let dimensions = [wallWidth, wallHeight];
console.log('wall dimensions in cm: ' + dimensions);

// Function Declaration 

function addValues(num1, num2) {
    return num1 + num2;
};

console.log(addValues(5, 4));

let firstValue = addValues(2,2);
console.log(firstValue);

let secondValue = addValues(143523624, 141354624);
console.log(secondValue);

// Function Expression

let add = function (num1, num2) {
    return num1 + num2;
};

console.log(add(3, 5));

// another way to declare a function: 

// arrow functions

let multiply = (num1, num2) => num1 * num2;
console.log(multiply(30,50));

// objects are collections of properties - key/value pairs
// methods are functions 
// dot notation

let person = {
    name: 'abby',
    age: 18,
    education: true,
    married: false,
    friends: ['Imani', 'Syd'],
    greeting: function () {
        console.log('Hi my name is Abby');
    },
}; //this is an object

// dot notation 

console.log(person.name);
console.log(person.friends[0]);
person.greeting(); 

// change the name from abby to hanah

person.name = "hanah";
console.log(person.name);

//assigning to variable
const age = person.age;

console.log(age);

// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===

let userActive = false;

if(userActive) {
    console.log('This user is active');
} else {
    console.log('This user is NOT active');
} 


// let value1 = 5 > 25

// if(value1) {
//     console.log('This is correct');
// } 
// else {
//     console.log('this is not correct');
// }

let num1 = 6;
let num2 = 6;
const result1 = num1 >= num2;

if(num1 > num2) {
    console.log('First number is bigger than second');
}
else if(result1) {
    console.log('Both numbers are equal');
}
else {
    console.log('second number is bigger than first');
}

let fname5 = 'joe';

if(!fname5) {
    console.log('joe mama');
}
else {
    console.log('oh u joe mama');
}
