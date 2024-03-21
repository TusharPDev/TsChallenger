
export class Calculator {
    protected _result!: number;

  
    getResult(): number {
        return this._result;
    }

  
    calculate(a: number, b: number): void {
        throw new Error("Method 'calculate' must be implemented.");
    }
}


export class AdditionCalculator extends Calculator {
    
    calculate(a: number, b: number): void {
        this._result = a + b;
    }
}


export class SubtractionCalculator extends Calculator {
    calculate(a: number, b: number): void {
        this._result = a - b;
    }
}

export class MultiplicationCalculator extends Calculator {
    // Override the calculate method for multiplication
    calculate(a: number, b: number): void {
        this._result = a * b;
    }
}

export class DivisionCalculator extends Calculator {
    calculate(a: number, b: number): void {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        this._result = a / b;
    }
}
