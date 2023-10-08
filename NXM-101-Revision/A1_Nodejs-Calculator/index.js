// index.js

//  import the crypto module
const crypto= require('crypto');



//  get a commands using process.argv

const args = process.argv.slice(2); // Slice off the first two elements (node and script file)

const [, , operation, ...numbers] = process.argv;

switch (operation) {
  case "add": console.log(Number(numbers[0])+Number(numbers[1]));
  break;
  case "sub":console.log(Number(numbers[0])-Number(numbers[1]));
  break;
  case "mult":console.log(Number(numbers[0])*Number(numbers[1]));
  break;
  case "divide":console.log(Number(numbers[0])/Number(numbers[1]));
  break;
  case "sin":console.log(Math.sin(Number(numbers[0])));
  break;
  case "cos":console.log(Math.cos(Number(numbers[0])));
  break;
  case "tan":console.log(Math.tan(Number(numbers[0])));
  break;
  case "random":
    const length = numbers[0];
    if(length) console.log("Provide length for random number generation.")
    else {
      const numBytes = Math.ceil(Number(numbers[0]) / 2);
      const randomBytes = crypto.randomBytes(numBytes);
      const randomNumberHex = randomBytes.toString("hex");
      const randomNumber = parseInt(randomNumberHex, 16);
      console.log(randomNumber);
    }
   break;


  default:
    console.log("Invalid operation");
}
