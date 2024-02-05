//Here i've used object type annotations.
const sumOfTwoNums = (nums: { num1: number; num2: number }) => {
  return nums.num1 + nums.num2
}

const result = sumOfTwoNums({ num1: 5, num2: 20 });
console.log(`Sum of two numbers is ${result}`);
