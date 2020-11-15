class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// type inference
const arrayOfAnything = new ArrayOfAnything(['a', 'b', 'c']);

function printAnything<T>(arr: T[]): void {
  for (const value of arr) {
    console.log(value);
  }
}

// type inference
printAnything(['a', 'b', 'c']);

// generic constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (const value of arr) {
    value.print();
  }
}

printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Car>([new Car(), new Car()]);
