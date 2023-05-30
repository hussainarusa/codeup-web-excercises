"use strict"

// const name = "arusa";
//     console.log(name);

// alert("Your computer is going to blow up!!")

//const userResponse = confirm("are you eepy?");
//console.log(userResponse);

// let userResponse = prompt('are you eepy?');
// console.log(userResponse);
//1.


// const greeting = ("Hello from external JavaScript");
//     //console.log(greeting);
//
//     alert('Welcome to my Website!')
//
//     const userInput = prompt("What is your favorite color?")
//         console.log(userInput);
//
//     alert (userInput + " is my fav color too!");



// //2.

// Movie Rental
// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?


//
const dailyRentalRateDollars = prompt("How much is the daily rental rate?");
    alert (dailyRentalRateDollars + " $");

let littleMermaidDaysRented = prompt ("How many days was The little mermaid rented?");
    alert (littleMermaidDaysRented + " days")

let brotherBearDaysRented = prompt ("How many days was Brother Bear rented?");
    alert (brotherBearDaysRented + " days")

let herculesDaysRented = prompt ("How many days was Hercules rented?");
    alert (herculesDaysRented + " days");

let totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
    console.log(totalRentalCost);

    alert("Your total rental cost is " + totalRentalCost )


// Contractor
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
//     How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.



let googleHourlyRateDollars = prompt("How much is the google hourly rate?");
    alert("The Google hourly rate is $ " + googleHourlyRateDollars);
let amazonHourlyRateDollars = prompt("How much is the amazon hourly rate?");
    alert("The Amazon hourly rate is $ " + amazonHourlyRateDollars);
let facebookHourlyRateDollars = prompt("How much is the facebook hourly rate?");
    alert("The Facebook hourly rate is $ " + facebookHourlyRateDollars);


let googleHours = prompt("How many hours did you work for google?" );
    alert("You worked "+ googleHours + " for google");
let amazonHours = prompt("How many hours did you work for amazon?" );
    alert("You worked "+ amazonHours + " for amazon")
let facebookHours = prompt("How many hours did you work for facebook?" );;
    alert("You worked "+ facebookHours + " for facebook")

let totalPayment = (googleHours * googleHourlyRateDollars) +
    (amazonHours * amazonHourlyRateDollars) +
    (facebookHours * facebookHourlyRateDollars);

    alert("This week you will receive $ " + totalPayment );


// Student Enrollment
//     A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.



// let classIsNotFull; // boolean
// let classScheduleDoesNotConflict; // boolean
//
// let studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

let scheduleConflicts = false;
let maxClassSize = parseInt(prompt('What is the maximum size of the class?'));
let currentClassSize = parseInt(prompt('What is the current size of the class?'));
let canEnroll = !scheduleConflicts && (currentClassSize < maxClassSize);
alert(`It is ${canEnroll} that the student can enroll in the class.`);




// Product Offer
// A product offer can be applied only if people buy more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
//     Use the following code to follow the instructions below:

// let numberOfItems; // number
// let offerIsValid; // boolean
// let isPremiumMember; // boolean
//
// let productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

let minCartSize = 2;
let cartSize = parseInt( prompt('How many items did you purchase?') );
let premiumMember = confirm('Are you a premium member?');
let offerExpired = confirm('Has the offer expired?');
let canOfferApply = (premiumMember || (cartSize > minCartSize)) && !offerExpired;
alert(`It is ${canOfferApply} that the offer does apply.`);