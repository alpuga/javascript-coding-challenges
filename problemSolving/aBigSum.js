/*jshint esversion: 6 */

/* Sum of all numbers in array,
tested with very large numbers. */
function aVeryBigSum(ar) {
  var sum = 0;
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
}
return sum;
