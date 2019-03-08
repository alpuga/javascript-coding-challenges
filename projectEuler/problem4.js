/*jshint esversion: 6 */

/* Largest Palindrome Product.
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit
numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product
of two n-digit numbers. */

function largestPalindromeProduct(n) {
  // Using the Unary operator, makes sure max is a number.
  // Use the reduce function to add 9 to an empty string as many times as n.
  let max = +[...Array(n)].reduce((a, c) => (a += 9), "");

  // Calculate min using max / 10.
  let min = (max + 1) / 10;

  //Store product of numbers between the limits in an array.
  let products = [];

  // start to loops to multiply numbers between limits.
  for (let i = max; i >= min; i--) {
    for (let j = max; j >= min; j--) {
      let product = i * j;
      // reverse the product to check palindrome
      let productReverse = [...String(product)].reverse().join("");
      // If
      if (product == productReverse) {
        products.push(product);
      }
    }
  }

  return Math.max(...products);
}

largestPalindromeProduct(2);
