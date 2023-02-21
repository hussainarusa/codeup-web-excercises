// "strict";
//
function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min);
}


let conesInventory;
conesInventory = randomNumber(50, 100);

    do {
        let conesWanted = randomNumber(1,5);
        if (conesWanted > conesInventory) {
            console.log(`Cant sell you ${conesWanted}, I only have ${conesInventory}`);
            console.log("${conesInventory} sold...")
            conesInventory = 0;
        }else{
            console.log("${conesWanted} sold!...");
            conesInventory = conesInventory - conesWanted;
        }
        console.log(" ${conesInventory} left");

    } while(conesInventory > 0);
    console.log('yay!ive sold them all');