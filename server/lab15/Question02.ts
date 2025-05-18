function secondLargest(arr: number[]): number | null {
  if (arr.length < 2) return null;
  let max = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Test
console.log(secondLargest([20, 120, 111, 215, 54, 78])); // Output: 120
