// Returns a Promise that resolves if n is prime, or rejects if not
function isPrime(n) {
  return new Promise((resolve, reject) => {
    if (n <= 1) {
      // Any number <= 1 is not a prime number
      return reject({ prime: false });
    }

    // Check divisibility from 2 to sqrt(n)
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
        // If divisible, then n is not prime
        return reject({ prime: false });
      }
    }

    // No divisors found — it's a prime number
    resolve({ prime: true });
  });
}
