// unlike type alias, interface simply represents certain simple object format.
// as you we can pass parameters that really matter to a function.
// though, interface itself creates new type.

interface PrintSummary {
  summary(): string;
}

const testCDN = {
  vendor: 'cloudfront',
  avgSpeed: 10,
  maxSpeed: 14,
  minSpeed: 5,
  failed: false,
  summary(): string {
    return `vendor: ${this.vendor} avg speed: ${this.avgSpeed}`;
  },
};

const testDrink = {
  name: 'coke',
  color: 'brown',
  sugar: 40,
  summary(): string {
    return `${this.name} contains ${this.color}g of sugar`;
  },
};

const logPrint = ({ summary }: PrintSummary) => {
  console.log(`${summary()}`);
};

logPrint(testCDN);
logPrint(testDrink);
