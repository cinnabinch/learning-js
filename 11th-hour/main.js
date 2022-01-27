// Review 

//getAttribute and setAttribute

// const first = first.querySelector('.first');

// const classValue = first.getAttribute('id');
// // console would return with nothing since there
// // is no id in that tag

// const classValue1 = first.getAttribute('class');
// // console would return first since that is the class
// // of that tag

// const link = document.querySelector('#link');

// const setLink = link.setAttribute('href', 'https://youtube.com');
// // first is the attribute and second is the name/link/item thingy







//  createElement('element');
// createTextNode('text content');
// element.appendChild(childElement);


// // createElement: 
// const bodyDiv = document.createElement('div');

// // createTextNode:
// const text = document.createTextNode('a simple body div');

// // appendChild:
// bodyDiv.appendChild(text);

// document.body.appendChild(bodyDiv);


// getting reference to the div in our HTML
const result = document.getElementById('result');

// if class, do querySelector
const first = document.querySelector('.red');

// adding it to result: 

// add a new h2 to div, make it blue, and make it say something
const second = document.createElement('h2');
const text2 = document.createTextNode('dynamic heading');

second.appendChild(text2);

result.appendChild(second);
second.classList.add('blue'); // adding the class made in our css that makes 
// the color blue to the second heading. 




// insertBefore('element', 'location')

// document.body.insertBefore(bodyDiv, result);
// const second = document.createElement('h2');
// const text2 = document.createTextNode('dynamic heading');

// second.appendChild(text2);

// result.appendChild(second);
// second.classList.add('blue');

// result.insertBefore(heading2, first);

// replaceChild('new', 'old')

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('I am small text');

smallHeading.classList.add('red');
smallHeading.appendChild(smallText);

second.replaceChild(smallHeading, text2); // replaces the text2 h2 to the h6

// .removeChild();



// innerHTML 
// textContent

const ul = document.createElement('ul');
const randomVal = 'random value';

ul.innerHTML = `
<li>${randomVal}</li>
<li>List Item</li>
<li>List Item</li>`

document.body.appendChild(ul);






// css
// const random = document.querySelector('.random');

// show example with style (random.style)

// random.classList.add('title');









