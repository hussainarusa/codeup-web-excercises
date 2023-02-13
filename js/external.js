1.
console.log(`Hello from external JavaScript`);

alert("welcome to my website");

2.
let userInput= prompt("what is your favorite color?");
    console.log(`the user entered` + userInput );

    alert (`great, ${userInput} is my fav color too!`);
3.
let priceInput;
priceInput = prompt('how much does a movie cost per day?');
let pricePerDay = parseFloat(priceInput), movie1Input = prompt('how many days did you rent lil mermaid?');
movie1Input= parseFloat(movie1Input);
let movie2Input;
movie2Input = prompt(`how many days did you rent brother bear? `);
 movie2Input = parseFloat(movie2Input);
let movie3Input;
movie3Input = prompt(`how many days did you rent hercules? `);
 movie3Input = parseFloat(movie3Input);

 let totalCost = (movie1Input + movie2Input + movie3Input)
let youWillPay = (totalCost) + (priceInput)
    console.log ((totalCost) *= (priceInput))
alert = (`total cost is ${youWillPay}`)

let scheduleConflicts = false;
let maxClassSize = parseInt(prompt('What is the maximum size of the class?'));
let currentClassSize = parseInt(prompt('What is the current size of the class?'));
let canEnroll = !scheduleConflicts && (currentClassSize < maxClassSize);
alert(`It is ${canEnroll} that the student can enroll in the class.`);


let minCartSize = 2;
let cartSize = parseInt( prompt('How many items did you purchase?') );
let premiumMember = confirm('Are you a premium member?');
let offerExpired = confirm('Has the offer expired?');
let canOfferApply = (premiumMember || (cartSize > minCartSize)) && !offerExpired;
alert(`It is ${canOfferApply} that the offer does apply.`);

