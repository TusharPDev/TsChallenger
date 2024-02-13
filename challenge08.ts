//Ex on the type never & TypeScript's exhaustiveness checking

type Direction = 'up' | 'down' | 'left' | 'right';

export function move(direction: Direction) {
  switch (direction) {
    case 'up':
      console.log('Moving up');
      break;
    case 'down':
      console.log('Moving down');
      break;
    case 'left':
      console.log('Moving left');
      break;
    case 'right':
      console.log('Moving right');
      break;
    default:
      const exhaustivenessCheck: never = direction; // TypeScript infers `never` type here
      break;
  }
}


//Ex.implement a function called safeParseJSON that takes a JSON string as input and attempts to parse it into a JavaScript object. However, if parsing fails due to invalid JSON syntax, the function should return an error message instead of throwing an error.

export const safeParseJson = (jsonStr: string): string | object => {
      try{
        const parsedJson = JSON.parse(jsonStr)
        return parsedJson; 
      }
      catch(error){
        return "Error! Invalid Json Syntax :("
      }
  }
