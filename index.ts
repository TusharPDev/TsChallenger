import { filterEvenNumbers } from './challenge02'
import { sumOfTwoNums } from './challenge01'
import { arrayFilterFunel } from './challenge03'
import { vowelExtracter } from './challenge04'
import { typeNarrower } from './challenge05'
import { genre } from './challenge06'
import { thriller, comedy } from './challenge06'
// import { Square, Circle, getArea } from './challenge07'
import { Square, Circle, getArea } from './challenge07'
import { move, safeParseJson } from './challenge08'
import { childFunction, parentFunction } from './challenge09'
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
const mixedTypeArray: (number | string | boolean)[] = [1, "H", true, 2, 4, "5", 0.5, "john", false]

const resultForNumOnlyArray: number[] = arrayFilterFunel(mixedTypeArray);

//Expected output: [1,2,4,0.5]
console.log("\n Array with Only numbers : -", resultForNumOnlyArray)

//CHALLENGE04 function call
//Example usage:

const inputStr = "Hey arnold how are you";

const resultForCountOfVowels = vowelExtracter(inputStr);

console.log("number of vowels :-", resultForCountOfVowels)


//CHALLENGE05 function call: 
const resultForTypeNarrower = typeNarrower("Hey arnold how are you");

//Expected output: Hey i am a string!

//CHALLENGE06 function call:
const actionMovie: thriller = { missionImpossible: () => "Mission Impossible was a mind-boggling movie" };
const funnyMovie: comedy = { mrBean: () => "Wow! Felt nostalgic" };


console.log(genre(actionMovie))
console.log(genre(funnyMovie))

//CHALLENGE07 function call:

const square: Square = { kind: "square", size: 5 } 
const circle: Circle = { kind: "circle", radius: 10 }

console.log(getArea(square))//for square

console.log(getArea(circle))//for circle

//Challege08 function call:
//Example usage:
const direction = 'up';
move(direction);


const parsedString = safeParseJson('{"name": "Tushar", "age" : 24}')
const parsedString2 = safeParseJson('{"name": "Tushar", "age" :}')

console.log("")
console.log(parsedString)
console.log("")
console.log(parsedString2)

//CHALLENGE09 function call:
//Example usage:

parentFunction(childFunction)

