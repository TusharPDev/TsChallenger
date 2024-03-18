export class Product_e {
  id: number;
  name: string;
  price: number;
  quantity: number;

   constructor(id: number, name: string, price: number, quantity: number = 0) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }
}

export class Customer {
  id: number;
  name: string;
  email: string;
  address: string;

   constructor(id: number, name: string, email: string, address: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.address = address;
  }
}

export class Order {
  id: number;
  customer: Customer;
  products: Product_e[];
  totalPrice: number;

  constructor(id: number, customer: Customer) {
      this.id = id;
      this.customer = customer;
      this.products = [];
      this.totalPrice = 0;
  }

   addProduct(product: Product_e, quantity: number) {
      const existingProduct = this.products.find(p => p.id === product.id);
      if (existingProduct) {
          existingProduct.quantity += quantity;
      } else {
          this.products.push({...product, quantity});
      }
      this.totalPrice += product.price * quantity;
  }

  removeProduct(productId: number, quantity: number) {
      const index = this.products.findIndex(p => p.id === productId);
      if (index !== -1) {
          const product = this.products[index];
          if (product.quantity > quantity) {
              product.quantity -= quantity;
          } else {
              this.products.splice(index, 1);
          }
          this.totalPrice -= product.price * quantity;
      }
  }

  checkout() {
      console.log(`Order ${this.id} has been checked out by ${this.customer.name}. Total price: $${this.totalPrice}`);
  }
}

