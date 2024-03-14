export interface InventoryItem {
  readonly id: number;
  name: string;
  quantity: number;
  price: number;
}

// Define a class to ensure proper initialization and validation
export class InventoryItemImpl implements InventoryItem {
  readonly id: number;
  name: string;
  quantity: number;
  private _price: number;

  constructor(id: number, name: string, quantity: number, price: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price must be a positive number.");
    }
  }
}
