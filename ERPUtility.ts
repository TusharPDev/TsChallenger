export class Employee {
    private _id: string;
    private _name: string;
    private _department: string;
    private _position: string;
    private _salary: number;

    constructor(id: string, name: string, department: string, position: string, salary: number) {
        this._id = id;
        this._name = name;
        this._department = department;
        this._position = position;
        this._salary = salary;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    get department(): string {
        return this._department;
    }
    set department(department: string) {
        this._department = department;
    }

    get position(): string {
        return this._position;
    }
    set position(position: string) {
        this._position = position;
    }

    get salary(): number {
        return this._salary;
    }
    set salary(salary: number) {
        this._salary = salary;
    }


    displayInfo(): void {
        console.log(`Employee ID: ${this._id}`);
        console.log(`Name: ${this._name}`);
        console.log(`Department: ${this._department}`);
        console.log(`Position: ${this._position}`);
        console.log(`Salary: $${this._salary}`);
    }
}

