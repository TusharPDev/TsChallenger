/** problem statement
 * Given an array of numbers, return a new array containing only the even numbers.*/


//here i've implemented the function type annotations!
export function filterEvenNumbers(numbers: number[]): number[] {
  const arrayWithEvenNums:number[] = []
  for(let i =0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
      arrayWithEvenNums.push(numbers[i])
    }
  }
  return arrayWithEvenNums
}

