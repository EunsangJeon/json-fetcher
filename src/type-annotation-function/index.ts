// Type Annotation.
const logNumber: (value: number) => void = (value: number) => {
  console.log(value);
};

// Type inferences. Typescript tries to figure out what type of value a function will return ONLY.
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function.
const multipy = function (a: number, b: number): number {
  return a * b;
};
