// let a = 1;
// //a =1
// let b = a++;
// //b =1 a=2
// let c = ++a;
// //c =1 a=3
//
// // what is the value of a, b, and c?
// // a=1 b=1 c=2
//
//  let d = "hello";
//  let e = false;
//
//  console.log(d++);
// console.log(e++);
//
// d++;// NaN
// e++;//0
//
//
// let perplexed    // perplexed is undefined (no value is assigned)
// perplexed+ 2
// console.log (perplexed+ 2)
// //NaN
//
// let price = 2.7;
// price.toFixed(2) ?
// // "2.70"
//
// let price = "2.7";
// price.toFixed(2);
// console.log(price.toFixed(2)); ?
// //
//
//
// number = NaN;
// isNaN(0)
// //false
// if (isNaN(number)) number = 0;
// console.log(number);
// //0-falsy
//
// isNaN(1)
// // false
// if (isNaN(number)) number = 1;
// console.log(number);
// // 0-falsy
//
// isNaN("")
// // true
// if (isNaN(number)) number = "";
// console.log(number);
// // true
//
// isNaN("string")
// // true
// if (isNaN(number)) number ="string";
// console.log(number);
// // 0-falsy
//
// isNaN("0")
// // true
// if (isNaN(number)) number ="0";
// console.log(number);
// //0-falsy
//
// isNaN("1")
// // true
// if (isNaN(number)) number ="1";
// console.log(number);
// // 0-falsy
//
// isNaN("3.145")
// // true
// if (isNaN(number)) number ="3.145";
// console.log(number);
// //0-falsy
//
// isNaN(Number.MAX_VALUE)
// // true
// if (isNaN(number)) number =Number;
// console.log(number);
// // 0-falsy
// isNaN(Infinity)
// // false
// if (isNaN(number)) number =Infinity;
// console.log(number);
// // 0-falsy
//
// isNaN("true")
// // true
// if (isNaN(number)) number ="true";
// console.log(number);
// // 0-falsy
//
// isNaN(true)
// // false
// if (isNaN(number)) number =true;
// console.log(number);
// //0-falsy
//
// isNaN("false")
// // false
// if (isNaN(number)) number ="false"
// console.log(number);
// // 0-falsy
//
// isNaN(false)
// // false
// if (isNaN(number)) number = false;
// console.log(number);
// //false
//
// to illustrate why the isNaN() function is needed:
// NaN == NaN
//
// let1 = !true
// console.log(let1);
// // false
//
// let2=!false
// console.log(let2);
// //true
//
// let3=!!true
// console.log(let3);
// //true
// let4=!!false
// console.log(let4);
// //false
//
// let5=!!0
// console.log(let5);
// //false
//
// let6=!!-0
// console.log(let6);
// //false
//
// let7=!!1
// console.log(let7);
// //true
//
// let8=!!-1
// console.log(let8);
// //true
//
// let9=!!0.1
// console.log(let9);
// //true
//
// let10=!!"hello"
// console.log(let10);
// //true
// let11=!!""
// console.log(let11);
// //false
// let12=!!''
// console.log(let12);
//false

// let13=!!"false"
// console.log(let13);
// //true
//
// let14=!!"0"
// console.log(let14);
// //true
//
// // 2.
//  let sample= "Hello Codeup Students";
// let sampleLength =sample.length;
// console.log(sampleLength)
//     // 12
// // console.log(sample.toLowerCase()); // hello codeup students
// // console.log(sample.replace("Students",'Class'));// Hello Codeup Class
// // console.log(sample.indexOf("c") ); //-1
// // console.log(sample.indexOf("C") ); // 6
// let sampleJoin = sample + `Students.`
// console.log(sampleJoin)
//
// let codeuoword = sampleJoinReplace.substring(.indexOf(C))


//3.
// days, cost

//
// let littleMermaid = 3 * 3;
// let brotherBear = 5 * 3;
// let hercules = 3 ;
//
// function costOfMovie(x,y,z){
//     return littleMermaid+brotherBear+hercules
// };
//
// console.log(costOfMovie(littleMermaid,brotherBear,hercules))
//  // 27
//  console.log('costOfMovie'+ '$');

// let google= 400 * 6
// let amazon= 380 * 4
// let facebook= 350 * 10
//
// function totalPay(x,y,z){
//     return google,amazon,facebook
// };
//
// console.log(totalPay(google,amazon,facebook) );
// // 3,500
//
//
// let scheduleConflicts = false;
// let maxClassSize = 25;
// let currentClassSize = 24;
//
// let canEnroll = !scheduleConflicts && (currentClassSize<maxClassSize) ;
//  console.log(canEnroll)
//

//
let minCartSize = 2
let cartSize = 4
let premiumMember = false;
let offerExpired = false;

let canOfferApply = (premiumMember || (cartSize >= minCartSize)) && !offerExpired;
 console.log= (canOfferApply);
//
// let username = 'codeup';
// let password = 'notastrongpassword';

// let atLeastFivePassword = password.length >= 5;
// let password.length >= 5;
//
// let usernameNotInPassword = password.indexOf(username) === -1;
//
// let usernameNotInPassword = ! password.includes(username;
//
// let userNameNotaParagraph = username.length <= 20;
//
// let username.length <= 20;
// neither the username or password can start or end with whitespace
// let whitespace = username.trim() && password.trim();
//
// let noWhitespace = username.trim() === username && password.trim() === password;
//
// username.trim();
// password.trim();
//
// console.log(password);
// console.log(username);
// console.log(password.length);





















