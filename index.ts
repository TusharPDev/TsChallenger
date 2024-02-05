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



