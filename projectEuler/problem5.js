/*jshint esversion: 6 */

/*
2520 is the smallest number that can be divided by each of the numbers from
1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to n?
*/

// Setting up functions using Euclidean Recursive Algo.
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// Thanks Euclidean Algo...
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n) {
  let leastCM = 1;

  // Getting the smallest common multiple in the range.
  for (let i = 2; i <= n; i++) {
    leastCM = lcm(leastCM, i);
  }
  return leastCM;
}

smallestMult(10);
