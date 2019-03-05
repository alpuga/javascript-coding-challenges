/*jshint esversion: 6 */

/* Given five positive integers, find the minimum and maximum values that
can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two
space-separated long integers. */

function miniMaxSum(arr) {
  var newArr = arr.sort(function(a, b) {
    return a - b;
  });

  var min = newArr[3] + newArr[2] + newArr[1] + newArr[0];
  var max = newArr[4] + newArr[3] + newArr[2] + newArr[1];

  console.log(min, max);
}
