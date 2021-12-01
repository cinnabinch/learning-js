// declare Variable 

//var age = '18';  - not used anymore
let age1 = 18; //can change later
const age2 = 20; //declare it once, cannot change later

// age1 = 15;

console.log(age);


//variable names can have numbers, letters, $, _
//but they CANNOT start with a number: ex: 20abby


let price = '$ 34';

// console.log(PRICE) - WILL NOT WORK BECAUSE CASE SENSITIVE

console.log(price); //will work

// .btn-danger (will not work)
// let btnDanger or btn_danger (camel case)

const skill = "Abby's cool";
// a time to use double quotes rather than single quotes is
// when you use ' in the string. 

console.log(skill);

// example 1
const firstName = 'Abby';
const lastName = 'Williams';

let fullName;

fullName = firstName + " " + lastName;

console.log(fullName);

console.log('Hi, my full name is ' + fullName);

// example 2

const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url)

// Using a `` makes it so you dont have to use =, +, or ""
//past examples using ``

let a = 5;
let b = 10;

console.log(`Fifteen is ${b}`);
console.log(`Hi, my full name is ${fullName}`);
console.log(`https://www.${website}.com`);

// Diff types of variables

let fname = 'abby'; //string
let age = 18; //number
let age3 = "18"; //string (because of "" and number isnt blue in console)
let userProfile = true; //boolean


console.log(fname);
console.log(age);
console.log(age3);

//in console, numbers will be blue








