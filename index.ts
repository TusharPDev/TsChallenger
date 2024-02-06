import {filterEvenNumbers} from './challenge02'
import {sumOfTwoNums} from './challenge01'
import {arrayFilterFunel} from './challenge03'
//CHALLENGE01 function call
//const result = sumOfTwoNums({ num1: 5, num2: "20" });
//👆 above line throws error and so we there will be no index.js generated cause we've turned noEmitOnError to true.
//👇 below line will generate index.js file.
const result = sumOfTwoNums({ num1: 5, num2: 20 });
console.log(`Sum of two numbers is ${result}\n`);


//CHALLENGE02 function call
// Example usage:
const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers: number[] = filterEvenNumbers(inputArray);
console.log(evenNumbers);


//CHALLEGE03 function call
//Example usage:
// our input: 
const mixedTypeArray:(number | string | boolean)[] = [1,"H",true,2,4,"5",0.5,"john",false]

const resultForNumOnlyArray:number[] = arrayFilterFunel(mixedTypeArray);

//Expected output: [1,2,4,0.5]
console.log("\n Array with Only numbers : -",resultForNumOnlyArray)




