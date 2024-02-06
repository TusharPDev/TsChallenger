// Problem Statement:
// Create a function that takes a string and returns the number of vowels in the string.

export const vowelExtracter = (str: string):number =>{
  const vowels:string[] = ["a","e","i","o","u"]
  let numOfVowelsCount = 0
  for(let i = 0;i< str.length;i++){
    for(let j = 0; j< vowels.length;j++){
      if(vowels[j] == str[i]){
        numOfVowelsCount += 1
      }
    }
  }
  return numOfVowelsCount
}