/*jshint esversion: 6 */

/* Given an array of integers, calculate the fractions
of its elements that are positive, negative, and are
zeros. Print the decimal value of each fraction on a new
line. */

function plusMinus(arr) {
  var denom = arr.length;
  var pos = 0;
  var zero = 0;
  var neg = 0;
  var posfrac;
  var negfrac;
  var zerofrac;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  }

  posfrac = pos / denom;
  negfrac = neg / denom;
  zerofrac = zero / denom;

  console.log(posfrac);
  console.log(negfrac);
  console.log(zerofrac);
}
