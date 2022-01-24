// Review 

// Powerful Array Methods

// forEach, map, filter, find, reduce

// forEach: iterate over array - no for loop required

const people = [
    {
    name: 'abby',
    age: 18,
    likes: 'cats',
    },
    {
    name: 'lol',
    age: 19,
    likes: 'popcorn',
    }
];

people.forEach((item) => {
    console.log(item.name);
})



// map - most popular and powerful
// does return new array
// doesn't change size of the og array
// uses values from original array whn making a new one

// easy def: TAKES BIG ARRAYS WITH OBJECTS AND TURNS THE OBJECTS INTO LITTLE ARRAY

let products = [
    {
        id: 1, product: 'shoes', make: 'nike', price: 22.95
    },
    {
        id: 2, product: 'pants', make: 'adidas', price: 44.55
    },
    {
        id: 3, product: 'socks', make: 'puma', price: 3.99
    }
];

const singleProduct = products.map(function(item) {
    return item.make;
}); // <-- THIS IS A CALLBACK FUNCTION

console.log(singleProduct);


const newProducts = products.map((p) => {
    return {
        productMake: p.make,
        productPrice: p.price + 1.00
    }
}); 

console.log(newProducts);

const makes = products.map((hs) => {
    return `<div>Make: ${hs.make}</div>
    <div>Price: ${hs.price}</div>`;
});
console.log(makes);

document.body.innerHTML = makes.join(''); //removes commas on the HTML screen



// filter method
// does return a new array
// can manupulate the size of new array
// returns based on conditions

const cheapShoes = products.filter(function(shoes){
    return shoes.price <= 20;
});

console.log(cheapShoes);

const adidas = products.filter((ad) => {
    return ad.make === 'adidas';
});

console.log(adidas);



// FIND
// returns object 
// returns first match, if no match undefined
// great for getting unique value


const productID = products.find(function(p){
    return product.id === 2;
})

console.log(productID); // returns object with id: 2 (pants)
// if another object had an id of 2 and was listed after pants,
// it would not come up in console. 

// to see just price:

console.log(productID.price);


// reduce 
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc' - accumulator) total of all calculations
// 2 parameter ('curr' - current) current iteration 

const cost = products.reduce(function(acc, currItem){
    console.log(`Total: ${acc}`);
    console.log(`Cost Current Item ${currItem.price}`);
    acc += currItem.price;
    return acc;
}, 0);

console.log(`Cost of everything is $ ${cost}`);


// Math Object
// standard build-in objects 

// rounding up
const num1 = 4.56789
const result = Math.ceil(num1); // Math.ceil rounds up
console.log(result); // gets 5

//rounding down
const roundDown = Math.floor(num1); // Math.floor rounds down
console.log(roundDown); // gets 4 

// square root
const num2 = 16;
const result2 = Math.sqrt(num2);
console.log(result2);

// PI
const result3 = Math.PI;
console.log(result3);

// min and max work the same way
const res5 = Math.min(3,4,5,6);
console.log(res5);

// random number up to 10
const res6 = Math.ceil(Math.random() * 10);
console.log(res6);


// Date Global Object

const month = [
    'jan',
    'feb',
    'mar',
    'apr',
];

const days = [
    'mon',
    'tues',
    'wed',
];

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
console.log(months[month]);
console.log(days[day]);

console.log(date.getFullYear());
console.log(date.getDate());

const webDate = `Hello people, welcome! Today is ${days[day]}, ${months.month}, ${date.getDate()}`};

document.body.innerHTML = webDate;