// setting variables
// calculator class = calc-container'>
// display class = answer-box
// calc keys class = keypad

let display = document.querySelector('.display');
// const numberBtns = document.querySelectorAll('.number-btn');
// const operationBtns = document.querySelectorAll('.operation');
// const equals = document.querySelector('.equals');
// const clear = document.querySelector('.clear');
// const delete1 = document.querySelector('.delete')

const keys = document.querySelector('.keypad');
keys.addEventListener('click', event => {
    // target returns the element that triggered the event
    if (!event.target.closest('button')) return; // << this is saying that if it is not a button, return

    const key = event.target;
    const keyValue = key.textContent; // The textContent property sets or returns the text content of the specified node
    const displayValue = display.textContent;
    
    
    if (displayValue === '0') { // make 0 a string because displayValue is a string type data
        display.textContent = keyValue;
    } else {
        display.textContent = displayValue + keyValue;
    }
  
    
})