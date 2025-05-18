function sumAll(...nums: number[]): number {
  return nums.reduce((total, current) => total + current, 0);
}

// Test
console.log(sumAll(1, 2, 3, 4)); // Output: 10
