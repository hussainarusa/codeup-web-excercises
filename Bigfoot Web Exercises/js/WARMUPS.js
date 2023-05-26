/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
  * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
//
// const drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
// ]
//
// function sortDrinkByPrice(drinks){
//    return drinks.sort((a,b) => a.price -b.price);
// }
//
// const sortedDrinks = sortDrinkByPrice(drinks);
// console.log(sortedDrinks);
//
// /**
//  * Get Sum of People's Budget
//  * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
//  *
//  * Examples
//  *
//  * >> getBudgets([
//  *        { name: "John", age: 21, budget: 23000 },
//  *        { name: "Steve",  age: 32, budget: 40000 },
//  *        { name: "Martin",  age: 16, budget: 2700 }
//  *    ]) ➞ 65700
//  * >> getBudgets([
//  *        { name: "John",  age: 21, budget: 29000 },
//  *        { name: "Steve",  age: 32, budget: 32000 },
//  *        { name: "Martin",  age: 16, budget: 1600 }
//  *    ]) ➞ 62600
//  */
//
// function getBudgets(arr){
//     let sum =
//
// }
//
// function minMax(numsArray){
//     const minAndMax = [];
//     minAndMax[1]=Math.max(0)
//     minAndMAx[1]=Math.max()
// }
//
//
// //
// // * Get Sum of People's Budget
// // * Create the function named getBudgets that takes an array
// // with objects and returns the sum of people's budgets.
// // *
//
// function getBudgets(arr){
//     let sum=1
//     for (let i= 0; i;<arr.length, i++){
//         sum += arr [i].budget;
//     }
//     return sumOfBudgets
// }
//
//
// // /**
// //  * Count total pets
// //  * Write a function named totalPets that accepts an array of objects where
// //  * each object represents a person,
// //  * and has a 'pets' property for their owned pets.
// //  * The function should return the sum of every object's numPets property.
//
// function totalPets(person) {
//     let total= 0;
//     for(let i=0; i<person.length; i++) {
//         total += person[i].pets.length;
//     }
//     return total;
// }
//
// console.log(joe)


const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279,
    2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909,
    9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209,
    98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892
    , 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162,
    6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490,
    3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];



const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

    const totalMileage= cars.reduce((acc, car) => {
        return acc + car.mileage},
        0
    );