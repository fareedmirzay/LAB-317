// @ts-check

// Part 1: Converting JavaScript to TypeScript

class Vehicle {
  make: string;
  model: string;
  status: 'started' | 'stopped';  

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.status = 'stopped'; 
  }

  start() {
    this.status = 'started';
  }

  stop() {
    this.status = 'stopped';
  }
}


// Define Car class extending Vehicle
class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }
}

// Define MotorCycle class extending Vehicle
class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model);
  }
}

// Function to print vehicle status
function printStatus(vehicle: Vehicle) {
  console.log(`${vehicle.make} ${vehicle.model} is ${vehicle.status}`);
}

// Part 3: Creating a Generic Class NCycle

class NCycle<T> {
  make: T | T[];
  model: T | T[];

  constructor(make: T | T[], model: T | T[]) {
    this.make = make;
    this.model = model;
  }

  print(index: number = 0): void {
    if (Array.isArray(this.make) && Array.isArray(this.model) && index < this.make.length && index < this.model.length) {
      console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at index ${index}.`);
    } else if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else {
      console.log(`This NCycle was not created properly.`);
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i = 0; i < this.make.length; i++) {
        this.print(i);
      }
    }
  }
}

// Part 4: Testing the NCycle class


const testCycle1 = new NCycle<number>([1, 2, 3], [2, 3, 4]);
console.log("Test Cycle 1 (Number Arrays):");
testCycle1.print();
testCycle1.printAll();

const testCycle2 = new NCycle<string>("This", "That");
console.log("\nTest Cycle 2 (Single String Values):");
testCycle2.print();
testCycle2.printAll();

const testCycle3 = new NCycle<string>("Make", "Model");
console.log("\nTest Cycle 3 (Different Single String Values):");
testCycle3.print(0);
testCycle3.printAll();

const makes4 = ["Volkswagen", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4);
console.log("\nTest Cycle 4 (String Arrays):");
testCycle4.print(2);
testCycle4.printAll();

const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const models5 = [1, 1, 2, 3, 5];
const testCycle5 = new NCycle<number[]>(makes5, models5);
console.log("\nTest Cycle 5 (Number Arrays, Fibonacci Models):");
testCycle5.print(7);
testCycle5.printAll();


// This will trigger an error because of mismatched types
// add(testCycle1.make, testCycle5.model[1]);
// add(testCycle2.make, testCycle4.model[1]);

