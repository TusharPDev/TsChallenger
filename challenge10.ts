// Actual implementation of the function
export function formatName(firstName: string, arg2: string, arg3?: string): string {
  if (arg3) {
    return `${firstName} ${arg2} ${arg3}`;
  } else {
    return `${firstName} ${arg2}`;
  }
}


//Generic function 
export const genericFunctionOne = <T>(array:T[]): T[] =>{
  return array.reverse();
}

