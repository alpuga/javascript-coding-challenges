/*jshint esversion: 6 */

/* You are in charge of the cake for your niece's birthday
and have decided the cake will have one candle for each year of
 her total age. When she blows out the candles, she’ll only be able to blow out
  the tallest ones. Your task is to find out how many candles she can
  successfully blow out. */

function birthdayCakeCandles(ar) {
  var max = 0;
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }

  var total = 0;
  for (var j = 0; j < ar.length; j++) {
    if (ar[j] === max) {
      total++;
    }
  }
  return total;
}
