/*jshint esversion: 6 */

/* Multiples of 3 and 5
Find the sum of all the multiples of 3 or 5 below the
provided parameter value number. */

function multiplesOf3and5(number) {
  let sum = 0;
  let i = 3;
  while (i < number) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
    i++;
  }

  return sum;
}

multiplesOf3and5(10);
