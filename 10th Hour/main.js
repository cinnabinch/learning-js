// DOM - Document Object Model

document.body.style.backgroundColor = "blue"; 

document.body.style.color = "yellow"; 

document.getElementById('btn').style.color = 'pink';

// assign to a variable 
// const element = document.getElementById('element'); 

let button = document.getElementById('btn');
button.style.color = 'red';

// // // window object - this is where we are getting stuff from 'document.'
// // console.log(window);

// // returns a node object or a node list, which is an array like object (some methods we can use like on array)------------------------------

const soccer = document.getElementById('btn');
const fname = btn.nodeName;
const css = btn.style;

console.log(soccer);
console.log(css);
console.log(fname);

// // Select the element or group of elements that we want
// // decide the effects we want to apply to the selection

// // getElementById('element'); // css id from html
// let header1 = document.getElementById('title')
// header1.style.color = 'red';

// btn.style.backgroundColor = 'orange';

// getElementsByTagName ('tagname');
// node-list = array-like object
// index, length property but not array methods

// let h1 = document.getElementsByTagName('h1');

// console.log(h1.length);
// h1[2].style.color = 'orange';

// const items = document.getElementsByTagName('li');

// console.log(items);

// // items.forEach(function(item) {
// //     console.log(item); //can NOT use 
// // })

// const betterItems = [...items] // spread operator

// betterItems.forEach(function(i){
//     console.log(i);
// });

// getElementsByClassName('className'); - gives back multiple elements
// node-list - array like
// index, length property but not array methods

// const fruits = document.getElementsByClassName('special'); // returns multiple items because of CLASS not id

// fruits[0].style.color = 'orange';

// querySelector('any css'); select single(first element)
// querySelectorAll('any css'); selects all and you can use forEach 

// const fruits = document.querySelector('.special');
// fruits.style.color='orange';

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function(item) {
//     console.log(item);
//     item.style.color = 'yellow';

// })

// childNodes - returns all childNodes including white space
// which is treated as text

// const fruits = document.querySelector('#fruits');

// children 

// const allChildren = fruits.children;
// console.log(allChildren);

// const allChildren = fruits.firstChild
// console will return the first child in the list 

const heading2 = document.querySelector('h2');

console.log(heading2.parentElement) // will log body because that is the parent

// if it was in a div it would return div as parent
// if it was heading2.parentElement.parentElement it would return body because body is the parent of the div

// const bg = heading2.parentElement; // this just makes the value of bg div 
// bg.style.backgroundColor = 'orange';

// previousSibling
// nextSibling
// return whitespace

// const first = document.querySelector('.first')
// first.style.color = 'orange';

// const second = first.nextSibling.nextSibling.nextSibling.nextSibling; // have to do it twice because returns whitespace
// second.style.color = 'red';
// console.log(second);

// getAttribute -- attributes are href or alt text 
// setAttribute

// const first = document.querySelector('.first');
// const classValue = first.getAttribute('id');
// console.log(classValue);

// // setting the attribute

// const link = document.getElementById('link');
// const pants = link.nextElementSibling;
// pants.setAttribute('class', 'soccer');

// className - can be overwritten by accident
// classList - to add class

let first = document.getElementById('first');
let second = document.getElementById('second');

const classValue = first.className;
// logs the class 
// to change the class:
first.className = 'first blahhhhhh';

second.classList.add('bla', 'butt');
second.classList.remove('butt');


