// == , === 
// == checks only if the value is equal
// === checks if the value equal and type is the same


//examples
const num1 = 10;
const num2 = 10; 

const result = num1 * num2; 

const value = num1 == num2; // true
const value2 = num1 === num2; // false

console.log(value);
console.log(value2);

// Logical Operators

// || means OR  -  && means AND  -  ! means NOT

// with OR you only need one condition to be true
// && you need both of them to be true

let fname = 'abby';
let age = 18;

if(fname === 'hanah' && age === 24) {
    console.log('hello there');
}
else {
    console.log('youre stupid');
};

// Will log youre stupid ^ 

if(fname === 'hanah' && age === 18) {
    console.log('hello there');
}
else {
    console.log('youre stupid');
};

// Still youre stupid ^

if(fname === 'abby' && age === 18) {
    console.log('hello there');
}
else {
    console.log('youre stupid');
};

// logs Hello there ^ 

if(fname === 'hanah' || age === 18) {
    console.log('hello there');
}
else {
    console.log('youre stupid');
};

// Will log Hello there ^ 

// Swith Statements 
//dice value: 1-6

const dice = 0;

switch(dice) {
    case 1:
        console.log('you rolled one');
        break;
    case 2:
        console.log('you rolled two');
        break;
    case 3: 
        console.log('three');
        break;
    default:
        console.log('roll again');
}

// Loops 

// While loop 

let amount = 10;

while(amount > 0) {
    console.log('I have ' + amount + ' dollars and im going to da mall');
    amount --;
} 

// do while loop
// code block first and condition second
// runs atleast once

let money = 0;

do {
    console.log('you have ' + money + ' dollars');
    money ++
}
while(money <= 10);

// if let money = 12; 
// it would run atleast once

let i; 

for(i = 0; i < 10; i++) {
    console.log('and number is ' + i);
}

// using variable

for(let number = 11; number >= 0; number--) {
    console.log('and number is ' + number);
}
