//string properties and methods
// same like objects

// google js string methods

let text = 'Abby williams';

console.log(text.length); // length counts spaces

console.log(text.toLowerCase()); // method

// methods have () while properties do not

console.log(text.charAt(0)); // 0 index based like arrays

console.log(text.charAt(text.length - 1)); // get last value by property and method

console.log(text.indexOf('z')); // -1 bc doesnt exist
console.log(text.indexOf('A')); //will return 1

console.log(text.trim()); //takes out empty space

console.log(text.trim().toLowerCase().startsWith('Abby')); //chaining methods and properties

console.log(text.includes('by')); //checks if it is included in the string

console.log(text.slice(0, 2)); // new string from existing
console.log(text.slice(-1)); 

// Template Literals - ES6+ last major update
// backtick character `` - above tab 
// Interpolation ${} - Insert expression (value)

let fname = 'Abby';
let age = 18;

let sentence = "Hi my name is " + fname + " and he is " + age;

let sentence1 = `hi my name is ${fname} and I am ${age}`; 

// ARRAYS PROPERTIES AND METHODS

let anything = ['pants', 'shoes', 'hat', 'sleep', 'soccer'];

// properties 

// length
console.log(anything.length);

// by index
console.log(anything[4]);

// last item index
console.log(anything[anything.length - 1]);

// concat new array combine two arrays

let something = ['suite', 'hotel', 'house', 'cat'];

let mix = anything.concat(something);

console.log(mix);

// REVERSE ARRAY

console.log(mix.reverse());

// unshift - adds at the start of the array

mix.unshift('computer');
console.log(mix);

// shift - removes at the start of the array
mix.shift();
console.log(mix);

// push - adds at the end of array
mix.push('yasssss');
console.log(mix);

// pop - removes from the end of array
mix.pop();
console.log(mix);

// splice - mutates original array (updates it)
// first number where do you want it to start (index)
// second numbah how many do you want to include

let nothing = mix.splice(2, 1);
console.log(nothing);
