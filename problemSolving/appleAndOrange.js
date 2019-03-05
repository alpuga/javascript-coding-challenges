/*jshint esversion: 6 */

/* When a fruit fall from its tree, it lands d units
of distance from its tree of origin along the x axis. A
negative value of d means it falls d units to the right of the
tree. Given the value of d for m apples and n oranges, determine
how many apples and oranges will fall on the house (in the inclusive range [s,t])

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var appleCount = 0;
  var orangeCount = 0;
  var aPos = [];
  var bPos = [];

  for (var i = 0; i < apples.length; i++) {
    var oneApple = a + apples[i];
    aPos.push(Number(oneApple));
  }

  for (var j = 0; j < oranges.length; j++) {
    var oneOrange = b + oranges[j];
    bPos.push(Number(oneOrange));
  }

  for (var k = 0; k < aPos.length; k++) {
    if (aPos[k] >= s && aPos[k] <= t) {
      appleCount++;
    }
  }

  for (var l = 0; l < bPos.length; l++) {
    if (bPos[l] >= s && bPos[l] <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
