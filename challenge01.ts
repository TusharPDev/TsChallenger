//Here i've used object type annotations.
export const sumOfTwoNums = (nums: { num1: number; num2: number }) => {
  return nums.num1 + nums.num2
}


//function type annotations
//export const addTwoNums = (x: number, y: number): string => {
//   return (`addTwoNums Result: ${x + y}`);
// }

// const resultSecond = addTwoNums( 5, 20 );
// console.log(`Sum of two numbers is ${resultSecond}`);

