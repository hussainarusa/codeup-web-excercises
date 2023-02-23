"use strict";


let i = 1;
// while (i <= 10) {
//     console.log(`Loop #${i}`);
//     i++;
// }

do {
    console.log(`Loop #${i}`);
    i++;
} while (false)

// for (let i = 1; i <= 10; i++) {
//     console.log(`Loop #${i}`);
// }

// Example problems that require a loop for a solution
// 1. Use a for loop to print all the numbers from 1 to 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. Use a for loop to calculate the factorial of 5 (i.e., 5! = 5 x 4 x 3 x 2 x 1)
const getFactorial = (num) => {
    let result = num;
    for(let i = (num - 1); i > 0; i--) {
        result *= i;
    }
    console.log(result);
    return result;
}
// getFactorial(5);

// 3. Use a for loop to find the sum of all the numbers from 1 to 100


// What about loops within loops? Whoooooaaaaaa....
// 4. THIS IS A HARD ONE! Use nested loops to print a pyramid pattern of asterisks. The pyramid should have 5 rows. Here's what it should look like:
/*

    *
   * *
  * * *
 * * * *
* * * * *

 */

const buildPyramid = (rows) => {
    let pyramid = "";
    // loop through rows
    for (let i = 1; i <= rows; i++ ) {
        let row = "";
        // Loop to add spaces
        for (let j = 1; j <= rows - i; j++){
            row += "  ";
        }
        // Loop to add the asterisks
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "* ";
        }
        pyramid += `\n${row}`;
        // console.log(row);
    }
    return pyramid;
}

console.log(buildPyramid(20));



