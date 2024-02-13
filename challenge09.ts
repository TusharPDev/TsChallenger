//Example for function type expressions in ts
export const parentFunction = (pFunc : (a:string) => void) =>{
  pFunc("Hello from Parent Function");
}

export const childFunction =(s:string)=>{
  console.log(s)
}
