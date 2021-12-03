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
