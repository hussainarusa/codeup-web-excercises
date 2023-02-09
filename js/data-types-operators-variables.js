let a = 1;
//a =1
let b = a++;
//b =1 a=2
let c = ++a;
//c =1 a=3

// what is the value of a, b, and c?
// a=1 b=1 c=2

 let d = "hello";
 let e = false;

 console.log(d++);
console.log(e++);

d++;// NaN
e++;//0


let perplexed    // perplexed is undefined (no value is assigned)
perplexed+ 2
console.log (perplexed+ 2)
//NaN

let price = 2.7;
price.toFixed(2)
// "2.70"

let price = "2.7";
price.toFixed(2);
console.log(price.toFixed(2));
//


number = NaN;
isNaN(0)
//false
if (isNaN(number)) number = 0;
console.log(number);
//0-falsy

isNaN(1)
// false
if (isNaN(number)) number = 1;
console.log(number);
// 0-falsy

isNaN("")
// true
if (isNaN(number)) number = "";
console.log(number);
// true

isNaN("string")
// true
if (isNaN(number)) number ="string";
console.log(number);
// 0-falsy

isNaN("0")
// true
if (isNaN(number)) number ="0";
console.log(number);
//0-falsy

isNaN("1")
// true
if (isNaN(number)) number ="1";
console.log(number);
// 0-falsy

isNaN("3.145")
// true
if (isNaN(number)) number ="3.145";
console.log(number);
//0-falsy

isNaN(Number.MAX_VALUE)
// true
if (isNaN(number)) number =Number;
console.log(number);
// 0-falsy
isNaN(Infinity)
// false
if (isNaN(number)) number =Infinity;
console.log(number);
// 0-falsy

isNaN("true")
// true
if (isNaN(number)) number ="true";
console.log(number);
// 0-falsy

isNaN(true)
// false
if (isNaN(number)) number =true;
console.log(number);
//0-falsy

isNaN("false")
// false
if (isNaN(number)) number ="false"
console.log(number);
// 0-falsy

isNaN(false)
// false
if (isNaN(number)) number = false;
console.log(number);
//false

to illustrate why the isNaN() function is needed:
NaN == NaN

let1 = !true
console.log(let1);
// false

let2=!false
console.log(let2);
//true

let3=!!true
console.log(let3);
//true
let4=!!false
console.log(let4);
//false

let5=!!0
console.log(let5);
//false

let6=!!-0
console.log(let6);
//false

let7=!!1
console.log(let7);
//true

let8=!!-1
console.log(let8);
//true

let9=!!0.1
console.log(let9);
//true

let10=!!"hello"
console.log(let10);
//true
let11=!!""
console.log(let11);
//false
let12=!!''
console.log(let12);
//false

let13=!!"false"
console.log(let13);
//true

let14=!!"0"
console.log(let14);
//true

 let sample= "Hello Codeup Students";
console.log(`${sample} ${sample.length}`);
console.log(sample.toLowerCase());
console.log(sample.replace("Students",'Class'));
console.log(`The index  of "${c}" is ${}













