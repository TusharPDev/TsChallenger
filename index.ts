//Here i've used object type annotations.
const sumOfTwoNums = (nums: { num1: number; num2: number }) => {
  return nums.num1 + nums.num2
}


//const result = sumOfTwoNums({ num1: 5, num2: "20" });

//👆 above line throws error and so we there will be no index.js generated cause we've turned noEmitOnError to true.

//👇 below line will generate index.js file.
const result = sumOfTwoNums({ num1: 5, num2: 20 });
console.log(`Sum of two numbers is ${result}`);

//function type annotations
// const addTwoNums = (x: number, y: number): string => {
//   return (`addTwoNums Result: ${x + y}`);
// }

// const resultSecond = addTwoNums( 5, 20 );
// console.log(`Sum of two numbers is ${resultSecond}`);


/** problem statement
 * Given an array of numbers, return a new array containing only the even numbers.*/


//here i've implemented the function type annotations!
function filterEvenNumbers(numbers: number[]): number[] {
  const arrayWithEvenNums:number[] = []
  for(let i =0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
      arrayWithEvenNums.push(numbers[i])
    }
  }
  return arrayWithEvenNums
}

// Example usage:
const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers: number[] = filterEvenNumbers(inputArray);
console.log(evenNumbers);




