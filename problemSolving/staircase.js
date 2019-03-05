/*jshint esversion: 6 */

/*
   #
  ##
 ###
####

n = 4, write program that prints staircase.

*/

function staircase(n) {
  var space, hash, stair;

  for (var i = 0; i < n; i++) {
    space = n - 1 - i;
    hash = i + 1;
    stair = " ".repeat(space) + "#".repeat(hash);
    console.log(stair);
  }
}
