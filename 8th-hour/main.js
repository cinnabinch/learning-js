let text = 'some text';

console.log(typeof text);

//binary operator - assignment
let text1 = 'some text';

// ternary operator
// condition ? (runs if true) : (runs if false)

// value ? console.log('it is true') : console.log('it is false');

// Global scope vs local scope
// any variable outside code block {function, {} or if statements} is said to be in Global Scope

// 


let v = 2; // global scope

let fname = 'abby';
fname = 'madison';


// local scope
function calc() {
    console.log(`First ${fname}`);
    function inner() {
        console.log(`this is from inner function ${fname}`)
    }
    inner()
}

calc();

function add(num1, num2) {
    let total = num1 + num2;
    console.log(total);
}

add(2, 6);
add(4, 500);

// JavaScript does variable look up first local scope,
// then global, then not defined

function add2(num3, num4) {
    const globalNumber = 20;
    let result = num3 + num4 + globalNumber;
    console.log(result);
    function mult() {
        let multResult = result * globalNumber;
        console.log(multResult);
    }
    mult();
}

add2(2, 6);

// Callback Function, higher order function,
// functions are first class objects/citizens

// higher order function - accepts another
// function as an argument or return another 
// function as a result

// callback function = passed to another function as
// an argument and executed inside that function.



// callback function

function morning(name) {
    return `good morning ${name.toUpperCase()}`
}
function afternoon(name) {
    return `good afternoon ${name.toUpperCase()}`
}

// higher order function 

function greet(name, callbackFunction) {
    callbackFunction();
    const myName = 'abby';
    console.log(`${callbackFunction(name)}, my name is ${myName}`);       
}
greet('hanah', morning);
// ^^ prints Good morning hanah, my name is abby

greet('hanah', afternoon);



// powerful array methods 
// forEach, map, filter, find, reduce
// iterate over array - no for loop required
// they accept callback functions as arguments,
// calls callback against each item in array. reference item in the
// callback parameter

let friends = ['hanah', 'alex', 'imani', 'manny']

// show all my friends

// for (let i=0; i<friends.length; i++) {
//     console.log(friends[i]);
// }

let people = [
    {
        name: 'abby',
        age: 18,
        position: 'student',
    },
    {
        name: 'hanah',
        age: 12,
        position: 'friend',
    }
    {
        name: 'imani',
        age: 68,
        position: 'woman',
    }
]

function showPerson(person) {
    console.log(person);
}

// forEach
// does not return new array
// people.forEach(showPerson);

// people.forEach(function(item) {
//     console.log(item.age);
// });

people.forEach((item) => {
    console.log(item.age);
});
