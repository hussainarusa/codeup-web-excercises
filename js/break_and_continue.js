"strict";


 let userPrompt;
 let userPromptNum;
 while(true) {
     userPrompt = prompt("Enter an odd number between 1-50");
     userPromptNum = parseInt(userPrompt);
     if(userPromptNum % 2 === 1 && userPromptNum >= 1 && userPromptNum <= 50){
         break;

    }
 }
 // console.log(userPromptNum)

 for(let i = 1; i <= 49; i+=2 );
 if (i === userPromptNum){
     console.log(`yikes skipping number: ${i}` );
     //continue;
 } else {
     console.log(`Here is an odd number: ${i}`);
 }
