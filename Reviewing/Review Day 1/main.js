// Declaring a variable
// number, string, boolean, null, undefined
// 
let num = 22;

let fname = 'abby';

const active = true;

let names = ['abby', 'alex', 'sydney'];

// arrays start with 0 (0 index)

// to get the console to display alex
console.log(names[1]); 

// make alex become Hanah

names[1] = 'Hanah';

// let fname = 'abby' (was declared already)

let lname = 'williams';

console.log(fname + ' ' + lname);

// easy way of doing it

console.log(`Hi my name is ${fname} ${lname}`);

// objects 

let person = {
    name: 'elvis',
    age: 34,
    active: true,
}

console.log(person.name);


// website variables

const website = "google";

// const url = 'http://www.'+ website + '.com';

const url = `http://${website}.com`;

console.log(url);