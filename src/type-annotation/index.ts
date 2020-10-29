// Using type inference is reommended usually
// But you need to use type annotation:

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let word = ['red', 'green', 'blue'];
let foundWord: boolean; // Of course I think I should initialize it with false

for (let color of word) {
  if (color === 'green') {
    foundWord = true;
    break;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // If there isn't any number above zero, it returns false. Otherwise it returns the number above zero.

for (let num of numbers) {
  if (num > 0) {
    numberAboveZero = num;
  }
}
