const infiniteNumberIterator = {
  current: 1,
  next() {
    return { value: this.current++, done: false };
  }
};

function* evenNumberGenerator() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

function* fibonacciGenerator() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const customIterable = {
  n: 7,
  [Symbol.iterator]() {
    let i = 1;
    let n = this.n;
    return {
      next() {
        if (i <= n) {
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log("First 5 numbers from infinite iterator:");
for (let i = 0; i < 5; i++) {
  console.log(infiniteNumberIterator.next().value);
}

console.log("First 5 even numbers:");
const evenGen = evenNumberGenerator();
for (let i = 0; i < 5; i++) {
  console.log(evenGen.next().value);
}

console.log("First 7 Fibonacci numbers:");
const fibGen = fibonacciGenerator();
for (let i = 0; i < 7; i++) {
  console.log(fibGen.next().value);
}

console.log("Output of Custom Iterable:");
for (let num of customIterable) {
  console.log(num);
}
