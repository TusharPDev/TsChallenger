import { filterEvenNumbers } from './challenge02'
import { sumOfTwoNums } from './challenge01'
import { arrayFilterFunel } from './challenge03'
import { vowelExtracter } from './challenge04'
import { typeNarrower } from './challenge05'
import { genre } from './challenge06'
import { thriller, comedy } from './challenge06'
// import { Square, Circle, getArea } from './challenge07'
import { Square, Circle, getArea } from './challenge07'
import { move, safeParseJson, Todo, todoReducer } from './challenge08'
import { childFunction, parentFunction, add, myConstructor, Myclass } from './challenge09'
import { formatName } from './challenge10'
import { genericFunctionOne } from './challenge10'
import { filterItems, Item } from './storageUtility'
import { log, LogLevel, LogDestination } from './loggingUtility';
import { InventoryItemImpl } from './Inventory_management'
import createAccount, { CheckingAccount, InvestmentAccount, SavingsAccount } from './typeBuilderUtility'
import { Product, ProductFilter } from './productFilterUtility'
//CHALLENGE01 function call
//const result = sumOfTwoNums({ num1: 5, num2: "20" });
//👆 above line throws error and so we there will be no index.js generated cause we've turned noEmitOnError to true.
//👇 below line will generate index.js file.
const result = sumOfTwoNums({ num1: 5, num2: 20 });
console.log(`Sum of two numbers is ${result}\n`);


//CHALLENGE02 function call
// Example usage:
const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers: number[] = filterEvenNumbers(inputArray);
console.log(evenNumbers);


//CHALLEGE03 function call
//Example usage:
// our input: 
const mixedTypeArray: (number | string | boolean)[] = [1, "H", true, 2, 4, "5", 0.5, "john", false]

const resultForNumOnlyArray: number[] = arrayFilterFunel(mixedTypeArray);

//Expected output: [1,2,4,0.5]
console.log("\n Array with Only numbers : -", resultForNumOnlyArray)

//CHALLENGE04 function call
//Example usage:

const inputStr = "Hey arnold how are you";

const resultForCountOfVowels = vowelExtracter(inputStr);

console.log("number of vowels :-", resultForCountOfVowels)


//CHALLENGE05 function call: 
const resultForTypeNarrower = typeNarrower("Hey arnold how are you");

//Expected output: Hey i am a string!

//CHALLENGE06 function call:
const actionMovie: thriller = { missionImpossible: () => "Mission Impossible was a mind-boggling movie" };
const funnyMovie: comedy = { mrBean: () => "Wow! Felt nostalgic" };


console.log(genre(actionMovie))
console.log(genre(funnyMovie))

//CHALLENGE07 function call:

const square: Square = { kind: "square", size: 5 }
const circle: Circle = { kind: "circle", radius: 10 }

console.log(getArea(square))//for square

console.log(getArea(circle))//for circle

//Challege08 function call:
//Example usage:
//08Ex.1
const direction = 'up';
move(direction);

//08Ex.2
const parsedString = safeParseJson('{"name": "Tushar", "age" : 24}')
const parsedString2 = safeParseJson('{"name": "Tushar", "age" :}')
console.log("")
console.log(parsedString)
console.log("")
console.log(parsedString2)


//08Ex.3
const initialState: Todo[] = [
  { id: 1, text: "Task 1", isCompleted: false },
  { id: 2, text: "Task 2", isCompleted: true },
  { id: 3, text: "Task 3", isCompleted: false }
];

const todosFunctionsTesting = todoReducer(initialState, { type: 'Toggle_Todo', payload: { id: 2 } })

console.log("todos list : -", todosFunctionsTesting)



//CHALLENGE09 function call:
//Example usage:(Function Type Expressiion)

parentFunction(childFunction)

//Example usage:(Call Signature)

const resultForAdd = add(3, 5);

console.log(resultForAdd)


//Example Usage(Construct signature)
const mycContruct: myConstructor = Myclass
const instance = new mycContruct(1, 2)
console.log(instance); // Output: MyClass { x: 1, y: 2 }


//Challange10 function call:
//function overload signatures
const fullName1 = formatName("John", "Doe"); // Should return "John Doe"
const fullName2 = formatName("Alice", "Mary", "Smith"); // Should return "Alice Mary Smith"
console.log(fullName1)
console.log(fullName2)

//Challange 10b functiion call:
const sampleArr = [1, 2, 3, 4, 5, 6, 7, 8];

const genericFuncOneRes = genericFunctionOne(sampleArr);

console.log("Generic 1 : ", genericFuncOneRes)

//Storage utility ex: 
// Test the function
const items: Item[] = [
  { id: 1, name: "Item 1", quantity: 5, active: true },
  { id: 2, name: "Item 2", quantity: 3, active: false },
  { id: 3, name: "Item 3", quantity: 7, active: true }
];

// Filter active items
const activeItems = filterItems(items, 'active', true);
console.log("Storage Utility result: ", activeItems);

//logging utility ex:
log('This is an info message');
log('This is a warning message', 'warning');
log('This is an error message', 'error', 'file', { timestamp: new Date(), userId: '123' });

//Object type & property modiers: 
// Example usage
const item1 = new InventoryItemImpl(1, "Widget", 10, 5.99);
console.log(item1);

item1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

item1.price = 1; // Error: Price must be a positive number.

//typeBuilders Example: 
// Example usage
const savingsAccount: SavingsAccount = createAccount({
  accountNumber: 'SAV123',
  balance: 1000,
  owner: 'Alice',
  type: 'savings',
  interestRate: 0.05
});

const checkingAccount: CheckingAccount = createAccount({
  accountNumber: 'CHK456',
  balance: 500,
  owner: 'Bob',
  type: 'checking',
  overdraftLimit: 100
});

const investmentAccount: InvestmentAccount = createAccount({
  accountNumber: 'INV789',
  balance: 10000,
  owner: 'Charlie',
  type: 'investment',
  investmentType: 'Stocks'
});

// This will throw an error because 'investmentType' is not a property of BaseAccount
const invalidAccount: InvestmentAccount = createAccount({
  accountNumber: 'INV999',
  balance: 20000,
  owner: 'David',
  type: 'investment',
  investmentType: 'Real Estate',
  location: 'New York' // Error: Object literal may only specify known properties
});

console.log("saving account : ", savingsAccount)
console.log("checking account : ", checkingAccount)
console.log("investment account : ", investmentAccount)
console.log("inavlid account : ", invalidAccount)


//Product filter ex:
const products: Product[] = [
  { name: 'iPhone 13', price: 999, brand: 'Apple', category: 'smartphone', screenSize: 6.1, has5G: true },
  { name: 'Samsung Galaxy S21', price: 899, brand: 'Samsung', category: 'smartphone', screenSize: 6.2, has5G: true },
  { name: 'MacBook Pro', price: 1299, brand: 'Apple', category: 'laptop', screenSize: 13.3, batteryLife: 10 },
  { name: 'Dell XPS 15', price: 1499, brand: 'Dell', category: 'laptop', screenSize: 15.6, batteryLife: 12 }
];

const filteredProducts = ProductFilter.filter(products, { brand: 'Apple', category: 'laptop' });
console.log(filteredProducts);
