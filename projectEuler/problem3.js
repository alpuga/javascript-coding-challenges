/*jshint esversion: 6 */

/* What is the largest prime factor of the number.
The prime factors of 13195 are 5, 7, 13 and 29.
This should return 29. */

function largestPrimeFactor(number) {
  // Declare the smallest prime number
  let prime = 2;

  /* Use while loop until number equals 1, signifying
   * the largest prime factor. if the number is divisible by
   * the prime number divide it by that number. if it is
   * not increase the prime number by 1 until number equals 1.
   */
  while (number !== 1) {
    if (number % prime == 0) {
      number = number / prime;
    } else {
      prime++;
    }
  }

  return prime;
}

//test
largestPrimeFactor(13195);
