const randomNumber = Math.ceil(Math.random() * 10) ;
console.log(randomNumber);

document.querySelector('.form-container').addEventListener('submit', function(e) {
    // ^^ grabs the id from the form tag and when you click submit, the function operates:
    e.preventDefault(); // preventDefault tells user that if the event doesn't get handled correctly, it wont work correctly
    let value = document.getElementById('amount').value; // takes input and sets it as the variable value
    value = parseInt(value); // takes the string you type in and makes it an integer
    console.log(`Inputed Value: ${value}`);
    console.log("Sum of two values: ");
    console.log(randomNumber + value);
    let total = randomNumber + value;
    let totalHTML = document.getElementById('answer');
    totalHTML.innerHTML = total;
    
});

