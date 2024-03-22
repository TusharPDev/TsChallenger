export class ShoppingListItem {
  protected itemName: string;
  protected quantity: number;
  protected isPurchased: boolean;

  constructor(itemName: string, quantity: number) {
      this.itemName = itemName;
      this.quantity = quantity;
      this.isPurchased = false;
  }

  markAsPurchased() {
      this.isPurchased = true;
      console.log(`${this.itemName} has been purchased.`);
  }
}

export class GroceryItem extends ShoppingListItem {
  protected category: string;

  constructor(itemName: string, quantity: number, category: string) {
      super(itemName, quantity);
      this.category = category;
  }

  showDetails() {
      console.log(`Grocery Item: ${this.itemName}, Quantity: ${this.quantity}, Category: ${this.category}`);
  }
}

export class HouseholdItem extends ShoppingListItem {
  protected location: string;

  constructor(itemName: string, quantity: number, location: string) {
      super(itemName, quantity);
      this.location = location;
  }

  showDetails() {
      console.log(`Household Item: ${this.itemName}, Quantity: ${this.quantity}, Location: ${this.location}`);
  }
}
