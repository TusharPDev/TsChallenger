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
import { Customer, Order, Product_e } from './ecommerceUtility'
import { ExpenseTracker } from './expenseManagementUtility'
import { Car, VehicleCatalog, Bicycle } from './vehicleManagementUtility'
import { AdditionCalculator, DivisionCalculator, MultiplicationCalculator, SubtractionCalculator } from './calculatorUtility'
import { GroceryItem, HouseholdItem } from './shoppingUtility'
import { Priority, Task, TaskManager } from './TaskManages'
import { Candidate, isProductManager, isSoftwareEngineer, ProductManager, SoftwareEngineer } from './hiringManagementUtility'
import { MeditationTask } from './TaskUtility/meditationTask'
import { ExerciseTask } from './TaskUtility/exerciseTask'
import { prioritizeTasks } from './TaskUtility/TaskManagerN'
import { Employee } from './ERPUtility'
import { Post, SocialMediaUtility, User } from './socialMediaUtility'
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


//e-commerce ex:
const product1 = new Product_e(1, "Laptop", 999.99, 10);
const product2 = new Product_e(2, "Smartphone", 699.99, 15);

const customer = new Customer(1, "John Doe", "john@example.com", "123 Main St");

const order = new Order(1, customer);
order.addProduct(product1, 2);
order.addProduct(product2, 1);
console.log(order.products);
console.log(order.totalPrice);

order.removeProduct(1, 1);
console.log(order.products);
console.log(order.totalPrice);

order.checkout();

//Expense tracker ex:
const tracker = new ExpenseTracker();
tracker.addExpense("Groceries", 50, new Date("2024-03-18"));
tracker.addExpense("Dinner", 30, new Date("2024-03-17"));
tracker.addExpense("Transportation", 20, new Date("2024-03-16"));

console.log("Total Expenses:", tracker.totalExpenses);
tracker.listExpenses();

// Vehicle managemnt ex:
const catalog = new VehicleCatalog();

const car1 = new Car("Toyota", "Camry", 2020, 4);
catalog.addVehicle(car1);

const car2 = new Car("Honda", "Accord", 2019, 4);
catalog.addVehicle(car2);

const bike1 = new Bicycle("Giant", "Defy", 2021, "Aluminum");
catalog.addVehicle(bike1);

catalog.listAllVehicles();

//Calculator utility ex:
const additionCalc = new AdditionCalculator();
additionCalc.calculate(5, 3);
console.log("Addition Result:", additionCalc.getResult());

const subtractionCalc = new SubtractionCalculator();
subtractionCalc.calculate(8, 2);
console.log("Subtraction Result:", subtractionCalc.getResult());

const multiplicationCalc = new MultiplicationCalculator();
multiplicationCalc.calculate(4, 6);
console.log("Multiplication Result:", multiplicationCalc.getResult());

const divisionCalc = new DivisionCalculator();
divisionCalc.calculate(9, 3);
console.log("Division Result:", divisionCalc.getResult());



//Shopping utility ex:
const groceryItem = new GroceryItem("Apples", 5, "Fruits");
groceryItem.showDetails(); // Output: Grocery Item: Apples, Quantity: 5, Category: Fruits
groceryItem.markAsPurchased(); // Output: Apples has been purchased.

const householdItem = new HouseholdItem("Trash Bags", 2, "Kitchen");
householdItem.showDetails(); // Output: Household Item: Trash Bags, Quantity: 2, Location: Kitchen
householdItem.markAsPurchased(); // Output: Trash Bags has been purchased.


//Task Manager utility ex:
const taskManager = new TaskManager();

taskManager.addTask("Buy groceries", Priority.MEDIUM);
taskManager.addTask("Pay bills", Priority.HIGH);
taskManager.addTask("Call plumber", Priority.LOW);

console.log("Tasks before prioritization:");
taskManager.viewTasks();

taskManager.prioritizeTasks();

console.log("\nTasks after prioritization:");
taskManager.viewTasks();

Task.showTotalTasks(); 


//Hiring Manager utility ex:
const candidate1 = new SoftwareEngineer("John Doe", "john@example.com", 5);
const candidate2 = new ProductManager("Jane Smith", "jane@example.com", 7);

function processCandidate(candidate: Candidate) {
    candidate.apply();
    candidate.interview();

    if (isSoftwareEngineer(candidate)) {
        console.log(`${candidate.name} has ${candidate.yearsOfExperience} years of experience.`);
    } else if (isProductManager(candidate)) {
        console.log(`${candidate.name} has ${candidate.yearsOfExperience} years of experience.`);
    }

    candidate.hire();
}

processCandidate(candidate1);
processCandidate(candidate2);


///New Task Manager utility ex:
const meditation = new MeditationTask("Morning meditation", 2, 15);
const exercise = new ExerciseTask("Morning workout", 1, "yoga");

const tasks: Task[] = [meditation, exercise];

const prioritizedTasks = prioritizeTasks(tasks);
prioritizedTasks.forEach(task => task.execute());


//ERP utlity ex:
const employee1 = new Employee("001", "John Doe", "Engineering", "Software Developer", 60000);
employee1.displayInfo();

console.log("Updating employee information...");
employee1.position = "Senior Software Developer";
employee1.salary = 75000;
employee1.displayInfo();

//Social media utility ex:
const socialMedia = new SocialMediaUtility();

//Here i am Adding a users
const user1: User = { id: 1, username: 'user1', email: 'user1@example.com' };
const user2: User = { id: 2, username: 'user2', email: 'user2@example.com' };
socialMedia.addUser(user1);
socialMedia.addUser(user2);

// Here i am Adding a posts
const post1: Post = { id: 1, userId: 1, content: 'Post 1 content', likes: 0, comments: [] };
const post2: Post = { id: 2, userId: 2, content: 'Post 2 content', likes: 0, comments: [] };
socialMedia.addPost(post1);
socialMedia.addPost(post2);

// implementation for Liking a post
socialMedia.likePost({ userId: 2, postId: 1 });
console.log(socialMedia.getAllPosts());

// Comment on a post
socialMedia.commentOnPost({ id: 1, userId: 1, postId: 2, content: 'Comment on Post 2' });
console.log(socialMedia.getCommentsForPost(2));
