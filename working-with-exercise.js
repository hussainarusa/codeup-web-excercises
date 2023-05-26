
//This lesson contains concepts that are important
// for working with data types, operators, and variables,
// but that require knowledge of all three before being introduced.


//let a = 1;
/let b = a++;
//let c = ++a;
// what is the value of a, b, and c?
a = 1, b = 2, c = 3

//let d = "hello";
//let e = false;

d++;
NaN
e++;
0
// JavaScript treats booleans as numbers in certain contexts (0 for false and 1 for true)

//let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

NaN

//let price = 2.7;
price.toFixed(2);

'2.70'

//let price = "2.7";
price.toFixed(2);
 error
//error because it is called on a string

isNaN(0)
false

isNaN(1)
false

isNaN("")
true

isNaN("string")
true

isNaN("0")
false

isNaN("1")
false

isNaN("3.145")
false

isNaN(Number.MAX_VALUE)
false

isNaN(Infinity)
false

isNaN("true")
true

isNaN(true)
true

isNaN("false")
true

isNaN(false)
false
//the value false can be converted to the number 0

// to illustrate why the isNaN() function is needed:
NaN == NaN


!true

false

!false
true

!!true
true

!!false
false

!!0
false

!!-0
false

!!1
true

!!-1
true

!!0.1
true

!!"hello"
true

!!""
false

!!''
false

!!"false"
true
!!"0"
true


Execute the following statement in the Chrome JavaScript console and then follow the directions below.

    let sample = "Hello Codeup";

    Use .length to find the number of characters in the string.
    12

    Try to make the sample string all upper or all lower case.
    sample.toLowerCase();

    Update the variable sample via concatenation so that it contains "Hello Codeup Students".
    sample + "Students."

    Replace "Students" with "Class".
    sample.replace("Students", "Class");

    Find the index of "c" using .indexOf(). What do you observe?
    -1 //If the searchValue is not found within the string, .indexOf() returns -1.
    Find the index of "C" using .indexOf().
    12

    Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
    //you would use index of to find the index of the first and last letter of codeup,
    //then you would use sample.substring(startIndex, endIndex)

//  WORD PROBLEMS

    You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),and Hercules
    (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?


    // const moviePricePerDay = 3;
    // const littleMermaidDays = 3;
    // const brotherBearDays = 5;
    // const herculesDays = 1;
    //
    // // Calculate the total price paid
    // const totalPricePaid = moviePricePerDay * (littleMermaidDays + brotherBearDays + herculesDays);
    //
    // console.log(totalPricePaid);
    //
    //
    // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
    // they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
    // How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    // let googleRate = 400
    // let amazonRate = 380
    // let facebookRate = 350
    //
    // const googleHours = 6
    // const amazonHours = 4
    // const facebookhours = 10
    //
    // let googlePay = googleRate * googleHours;
    // let amazonPay = amazonRate * amazonHours;
    // let facebookPay = facebookRate * facebookhours;
    //
    // let thisWeeksPay = googlePay + amazonPay + facebookPay;
    //
    // console.log(thisWeeksPay);
    //
    // 7420

    // A student can be enrolled in a class only if the class is not full and the class
    // schedule does not conflict with her current schedule.
    //
    // let classNotFull = true
    // let doesNotConflictSchedule = false
    //
    // let studentEnroll = classNotFull && doesNotConflictSchedule
    //
    // console.log(studentEnroll);


    A product offer can be applied only if a person buys more than 2 items,
    and the offer has not expired. Premium members do not need to buy a specific amount of products.

        let numberOfItems = 3; // Number of items purchased
        let offerNotExpired = true;
        let isPremiumMember = true;

        let isProductOfferApplicable = (numberOfItems > 2 && offerNotExpired) || isPremiumMember;

        console.log(isProductOfferApplicable); // Output: true


//4.

        let username = 'codeup';
        let password = 'notastrongpassword';


    Create a variable that holds a boolean value for each of the following conditions:

    the password must be at least 5 characters

        let isPasswordValid = password.length >= 5;

    the password must not include the username

        let doesPasswordIncludeUsername = !password.includes(username);

    the username must be no more than 20 characters

        let isUsernameValid = username.length <= 20;

    neither the username or password can start or end with whitespace //

    var noWhitespaceAtStartOrEnd = !(/^\s|\s$/).test(username) && !(/^\s|\s$/).test(password);


    // Chat GPT Explanation....

    //The regular expression /^\s|\s$/ is used to match whitespace characters at the start or end of a string. Let's break it down:

    //^ asserts the start of the string.
    // \s matches any whitespace character (space, tab, newline, etc.).
    // | acts as the logical OR operator.
    //    $ asserts the end of the string.
    //    Therefore, /^\s|\s$/ matches either whitespace at the start of the string or whitespace at the end of the string.