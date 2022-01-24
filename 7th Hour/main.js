// arrays and for loops
//combine each name with last name

let fnames = ['anna', 'elvis', 'joe'];
let lname = 'Smith';

let fullName = [];

// for loop
for(let i=0; i < fnames.length; i++) {
    console.log(i);
    console.log(fnames[i]);
    const names = `${fnames[i]} ${lname}`

    fullName.push(names);

}

console.log(fnames);
console.log(fullName); // added all the names with last names to the array

// function, return, arrays, for loop
// end of month expenses

const gas = [20, 40, 100];
const food = [10, 45, 50];

function calcTotal(arr) {
    let total = 0;
    
    for(let i=0; i < arr.length; i++) {
        total += arr[i];
    }
    return total; 
}

const gasTotal = calcTotal(gas);
const foodTotal = calcTotal(food);

console.log({
    gas: gasTotal,
    food: foodTotal
})

// reference vs value

// primitive is a fundamental data type that cannot
// be broken down into a more simple data type


// when assigning primitive data type value to a variable any
// changes are made directly to that value without
// affecting original value

// when assigining non-primitive data type value to a variable is done
// by reference so any changes will affect all the reference

let person = {fname2: 'abby'}; //object
let person2 = person; 

// let person.fname2 = 'dave'; // non-primitve data types change all references

console.log(person.fname2);
console.log(person2.fname2);

// null & undefined
// both represent 'no value'
// undefined - js cant find value for this
// null - is set by dev

let number = 22 + null; // 22 + 0
let number2 = 22 + undefined; // NaN (not a number)

// Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1; //truthy

const text = ''; // falsy

if(text) {
    console.log(`hey the value is truthy`);
} else {
    console.log(`its falsy`);
}

// Ternary Operator

const isMarried = false;
const lastName = isMarried ? "kipping" : "Thibodeau";
// if/else statement - if isMarried is true, lastName = kipping 
// if false lastName = Thib



