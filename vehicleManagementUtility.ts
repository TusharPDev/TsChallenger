export interface Vehicle {
  make: string;
  model: string;
  year: number;
  type: string;
}

export class VehicleCatalog {
  vehicles: { [key: string]: Vehicle } = {};

  addVehicle(vehicle: Vehicle) {
    const key = `${vehicle.make} ${vehicle.model} ${vehicle.year}`;
    this.vehicles[key] = vehicle;
  }

  findVehicle(make: string, model: string, year: number): Vehicle | undefined {
    const key = `${make} ${model} ${year}`;
    return this.vehicles[key];
  }

  listAllVehicles() {
    console.log("Vehicle Catalog:");
    Object.values(this.vehicles).forEach(vehicle => {
      console.log(`${vehicle.make} ${vehicle.model} (${vehicle.year}) - Type: ${vehicle.type}`);
    });
  }
}

export class Car extends VehicleCatalog {
  type = "Car";
  numDoors: number;
  model: string; 
  make: string; 
  year: number; 
  constructor(make: string, model: string, year: number, numDoors: number) {
    super();
    this.make = make;
    this.model = model;
    this.year = year;
    this.numDoors = numDoors;
  }

  override listAllVehicles() {
    console.log("Car Catalog:");
    Object.values(this.vehicles).forEach(vehicle => {
      if (vehicle.type === this.type) {
        console.log(`${vehicle.make} ${vehicle.model} (${vehicle.year}) - Doors: ${this.numDoors}`);
      }
    });
  }
}

export class Bicycle extends VehicleCatalog {
  type = "Bicycle";
  frameMaterial: string;
  model: string; 
  make: string; 
  year: number; 

  constructor(make: string, model: string, year: number, frameMaterial: string) {
    super();
    this.make = make;
    this.model = model;  // Assign the 'model' property in the constructor
    this.year = year;
    this.frameMaterial = frameMaterial;
  }

  override listAllVehicles() {
    console.log("Bicycle Catalog:");
    Object.values(this.vehicles).forEach(vehicle => {
      if (vehicle.type === this.type) {
        console.log(`${vehicle.make} ${vehicle.model} (${vehicle.year}) - Frame: ${this.frameMaterial}`);
      }
    });
  }
}

