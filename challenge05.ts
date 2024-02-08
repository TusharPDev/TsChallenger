//problem statement:Create a TypeScript function that takes an input of type (string | number) and returns different values based on whether the input is a string or a number. If the input is a string, the function should return the string "It's a string!". If the input is a number, the function should return the number multiplied by 2. Use type narrowing to achieve this.

export const typeNarrower = (input:string|number)=>{
  if(typeof input == "string"){
    console.log("Hey i am a string!")
  }else{
    console.log(input * 2)
  }
}

