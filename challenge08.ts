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


//You are building a Todo application with TypeScript, and you want to ensure that all possible states of a Todo item are handled explicitly to avoid runtime errors. Implement exhaustiveness checking in your application to catch potential oversights and ensure that all actions related to a Todo item are handled properly.


export interface Todo{
  id: number;
  text: string;
  isCompleted: boolean;
}
// const initialState : Todo[] = [];

export type AddTodoAction = {
  type: 'Add_Todo';
  payload:Todo;
}
export type ToggleTodoAction = {
  type: 'Toggle_Todo';
  payload:{id:number};
}
export type DeleteTodoAction = {
  type: 'Delete_Todo';
  payload:{id:number};
}

export type Action = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

export const todoReducer = (state: Todo[],action:Action):Todo[] =>{
  switch(action.type){
    case 'Add_Todo':
      return[...state, action.payload];
    case 'Toggle_Todo':
      return state.map(todo =>
        todo.id === action.payload.id ? {...todo, completed: !todo.isCompleted} : todo
      )
    case 'Delete_Todo':
      return state.filter(todo => todo.id !== action.payload.id);
    default :
      const exhaustiveness:never = action
      return state
  }
} 