// Abstract class representing a candidate
export abstract class Candidate {
  constructor(public name: string, public email: string, public role: string) { }

  abstract apply(): void;
  abstract interview(): void;
  abstract hire(): void
}

// Concrete class representing a Software Engineer candidate
export class SoftwareEngineer extends Candidate {
  constructor(public name: string, public email: string, public yearsOfExperience: number) {
    super(name, email, "Software Engineer");
  }

  apply() {
    console.log(`${this.name} has applied for the Software Engineer position.`);
  }

  interview() {
    console.log(`${this.name} is being interviewed for the Software Engineer position.`);
  }

  hire() {
    console.log(`${this.name} has been hired as a Software Engineer.`);
  }
}

// Concrete class representing a Product Manager candidate
export class ProductManager extends Candidate {
  constructor(public name: string, public email: string, public yearsOfExperience: number) {
    super(name, email, "Product Manager");
  }

  apply() {
    console.log(`${this.name} has applied for the Product Manager position.`);
  }

  interview() {
    console.log(`${this.name} is being interviewed for the Product Manager position.`);
  }

  hire() {
    console.log(`${this.name} has been hired as a Product Manager.`);
  }
}

// Function to determine if a given candidate is a SoftwareEngineer
export function isSoftwareEngineer(candidate: any): candidate is SoftwareEngineer {
  return candidate instanceof SoftwareEngineer;
}

// Function to determine if a given candidate is a ProductManager
export function isProductManager(candidate: any): candidate is ProductManager {
  return candidate instanceof ProductManager;
}