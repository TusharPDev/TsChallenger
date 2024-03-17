// Define a generic object type representing common product attributes
export type ProductBase = {
    name: string;
    price: number;
    brand: string;
};

// Define interfaces for product categories with specific features
export interface Smartphone extends ProductBase {
    category: 'smartphone';
    screenSize: number;
    has5G: boolean;
}

export interface Laptop extends ProductBase {
    category: 'laptop';
    screenSize: number;
    batteryLife: number; // in hours
}

export type Product = ProductBase & (Smartphone | Laptop);//intersection concept here <-

export class ProductFilter {
    static filter<T extends Product>(
        products: T[],
        criteria: Partial<T> // Partial type allows optional criteria
    ): T[] {
        return products.filter(product => {
            for (const key in criteria) {
                if (criteria.hasOwnProperty(key) && product[key] !== criteria[key]) {
                    return false;
                }
            }
            return true;
        });
    }
}
