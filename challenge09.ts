//Example for function type expressions in ts
export const parentFunction = (pFunc: (a: string) => void) => {
  pFunc("Hello from Parent Function");
}

export const childFunction = (s: string) => {
  console.log(s)
}


//Example for call signatures ints

export type Addfunction = (a: number, b: number) => number;

export const add: Addfunction = (a, b) => {
  return a + b
}


//Constructor Signature

export interface myConstructor {
  new (x:number,y:number):Myclass;
}

export class Myclass{
  constructor(public x:number, public y:number){}
}

const mycContruct : myConstructor = Myclass

