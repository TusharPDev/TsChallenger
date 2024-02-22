import { filterEvenNumbers } from './challenge02'
import { sumOfTwoNums } from './challenge01'
import { arrayFilterFunel } from './challenge03'
import { vowelExtracter } from './challenge04'
import { typeNarrower } from './challenge05'
import { genre } from './challenge06'
import { thriller, comedy } from './challenge06'
// import { Square, Circle, getArea } from './challenge07'
import { Square, Circle, getArea } from './challenge07'
import { move, safeParseJson, Todo, todoReducer } from './challenge08'
import { childFunction, parentFunction, add, myConstructor } from './challenge09'
import { log } from 'console'
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
//08Ex.1
const direction = 'up';
move(direction);

//08Ex.2
const parsedString = safeParseJson('{"name": "Tushar", "age" : 24}')
const parsedString2 = safeParseJson('{"name": "Tushar", "age" :}')
console.log("")
console.log(parsedString)
console.log("")
console.log(parsedString2)


//08Ex.3
const initialState: Todo[] = [
  { id: 1, text: "Task 1", isCompleted: false },
  { id: 2, text: "Task 2", isCompleted: true },
  { id: 3, text: "Task 3", isCompleted: false }
];

const todosFunctionsTesting = todoReducer(initialState, { type: 'Toggle_Todo', payload: { id: 2 } })

console.log("todos list : -", todosFunctionsTesting)



//CHALLENGE09 function call:
//Example usage:(Function Type Expressiion)

parentFunction(childFunction)

//Example usage:(Call Signature)

const resultForAdd = add(3, 5);

console.log(resultForAdd)


//Example Usage(Construct signature)
const instance = new myConstructor(1, 2)
console.log(instance); // Output: MyClass { x: 1, y: 2 }