/*jshint esversion: 6 */

/* Given a positive integer, return sum of all odd Fibonacci
numbers that are less than or equal to num */
function sumFibs(num) {
  let oddCount = 0;
  let previous = 0;
  let current = 1;

  function isOdd(number) {
    if (number % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  }

  while (current <= num) {
    if (isOdd(current)) {
      oddCount += current;
    }
    current += previous;
    previous = current - previous;
  }
  return oddCount;
}

sumFibs(10);
