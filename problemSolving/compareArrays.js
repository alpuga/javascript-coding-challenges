/*jshint esversion: 6 */

/* a and b are arrays. compare the number at each index if a[0]
is bigger than b[0] point goes to alice, otherwise to bob. */

function compareTriplets(a, b) {
  var alice = 0;
  var bob = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] < b[i]) {
      bob += 1;
    }
  }
  return [alice, bob];
}
