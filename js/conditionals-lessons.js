`use strict`;
//
// let flavor = prompt(`welcome to codeup ice cream what flavor do you want?`)
// if (flavor ===`chocolate`) {
// alert (`one chocolate coming right up`);
//     } else if ( flavor === `vanilla`) {
//     alert (`one vanilla coming right up!`) ;
//   } else {
//   alert ( `we dont have the flavor sorry!`)
// :('')
  
  switch (flavor) {
      case('chocolate'):
          alert('once chocolate coming right up');
          break;
      case "vanilla":
          alert (`one vanilla coming right up!`);
          break;
      case`strawberry`:
          alert (`one strawberry coming right up!`)
          break;
      default:
          alert (`we dont have that flavor, sorry!`);

  }

  function serveIceCream(flavor){
      if (flavor === `chocolate`)
          || flavor === `vanilla`
            || flavor === `strawberry`){
    alert (`one flavor coming right up `);
      } else {
    alert {'we dont have that flavor sorry `
      }
  }
  //         w/o break statement the code will fall through
  // switch is good for simple values, it cant be used for conditional values


      "use strict"

// ternary statement
      function divisableByFive(number) {
          if (number % 5 === 0)
              console.log(`divisableByFive`);
      }else {
          console.log (`not divisable by 5`)
      }
  }
}
const divisableByFiveTernary = number => {
    number 5 % === 0? console.log(`Divisable by 5!`): console.log (`not divisable by 5!`)
}