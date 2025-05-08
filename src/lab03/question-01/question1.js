'use strict';

// Arrow Function
const computeSumOfSquares = (arr) => arr.reduce((sum, x) => sum + x * x, 0);
console.log('Sum of squares:', computeSumOfSquares([1, 2, 3]));

// Function Expression
const printOddNumbersOnly = function (arr) {
  arr.filter((x) => x % 2 !== 0).forEach((x) => console.log('Odd:', x));
};
printOddNumbersOnly([1, 2, 3, 4, 5]);

// Regular Function
function printFibo(n, a, b) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  console.log('Fibonacci:', result.join(', '));
}
printFibo(10, 0, 1);
