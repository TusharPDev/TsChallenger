export class Expense {
  private _name: string;
  private _amount: number;
  private _date: Date;

  constructor(name: string, amount: number, date: Date) {
      this._name = name;
      this._amount = amount;
      this._date = date;
  }

  get name(): string {
      return this._name;
  }

  get amount(): number {
      return this._amount;
  }

  get date(): Date {
      return this._date;
  }

  set name(name: string) {
      this._name = name;
  }

  set amount(amount: number) {
      if (amount >= 0) {
          this._amount = amount;
      } else {
          throw new Error("Amount cannot be negative.");
      }
  }

  set date(date: Date) {
      this._date = date;
  }

  toString(): string {
      return `${this._name} - $${this._amount} on ${this._date.toDateString()}`;
  }
}

export class ExpenseTracker {
  private readonly _expenses: Expense[];

  constructor() {
      this._expenses = [];
  }

  addExpense(name: string, amount: number, date: Date): void {
      const newExpense = new Expense(name, amount, date);
      this._expenses.push(newExpense);
  }

  get totalExpenses(): number {
      return this._expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  listExpenses(): void {
      console.log("Expenses:");
      this._expenses.forEach(expense => {
          console.log(expense.toString());
      });
  }
}
