
//2. Create a while loop that uses console.log() to create the output shown below.
    //2
    // 4
    // 8
    // 16
    // 32
    // 64
    // 128
    // 256
    // 512
    // 1024
    // 2048
    // 4096
    // 8192
    // 16384
    // 32768
    // 65536
    //
    //

    // let counter = 2;
    // while (counter <= 65536) {
    //     console.log(counter);
    //     counter = counter + counter;
    // }

    //
    // citing the website i used to help with my code https://launchschool.com/books/javascript/read/loops_iterating

 //1. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between
// 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number
// between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log
// to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.


// output should be:
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
//
// // This is how you get a random number between 50 and 100
//
//     function randomNumber(min, max) {
//         return Math.floor(Math.random()* (max - min + 1) + min);
//     }
//
//
//
//                 let allCones;
//                 allCones = randomNumber(1,50)
//             do {
//                 let conesWanted = randomNumber(1, 5)
//                 if (allCones - conesWanted < 0) {
//                     console.log(`Sorry we only have ${allCones} cones`)
//                 } else if (allCones - conesWanted === 0) {
//                     console.log(`YAY! ALL SOLD`)
//                     break;
//                 } else {
//                     console.log(`${conesWanted} cones sold`);
//                     allCones -= conesWanted;
//                 }
//
//                 console.log(`I now have ${allCones} cones left`);
//             } while (allCones > 0);{
//         }
//







