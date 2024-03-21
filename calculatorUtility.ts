// Define a base class for the calculator
export class Calculator {
    // Type-only field declaration for the 'result' field
    protected _result!: number;

    // Getter method for the 'result' field
    getResult(): number {
        return this._result;
    }

    // Abstract method for performing the calculation
    // Each subclass must implement this method
    calculate(a: number, b: number): void {
        throw new Error("Method 'calculate' must be implemented.");
    }
}

// Subclass for addition operation
export class AdditionCalculator extends Calculator {
    // Override the calculate method for addition
    calculate(a: number, b: number): void {
        this._result = a + b;
    }
}

// Subclass for subtraction operation
export class SubtractionCalculator extends Calculator {
    // Override the calculate method for subtraction
    calculate(a: number, b: number): void {
        this._result = a - b;
    }
}

// Subclass for multiplication operation
export class MultiplicationCalculator extends Calculator {
    // Override the calculate method for multiplication
    calculate(a: number, b: number): void {
        this._result = a * b;
    }
}

// Subclass for division operation
export class DivisionCalculator extends Calculator {
    // Override the calculate method for division
    calculate(a: number, b: number): void {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        this._result = a / b;
    }
}
