type Shape = Square | Circle;

export interface Square {
  kind : "square",
  size : number,
}

export   interface Circle {
  kind: "circle",
  radius: number,
}

export const getArea=(shape:Shape):number =>{
  switch(shape.kind){
    case "square": 
      return shape.size + shape.size;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}