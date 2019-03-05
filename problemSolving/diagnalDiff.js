/*jshint esversion: 6 */

/* Given a square matrix, calculate the absolute difference between the sums
of its diagonals. */

function diagonalDifference(arr) {
  var n = arr.length;
  var sumPrim = 0;
  var sumSec = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i == j) {
        sumPrim += arr[i][j];
      }
      if (i + j == n - 1) {
        sumSec += arr[i][j];
      }
    }
  }
  return Math.abs(sumPrim - sumSec);
}
