/*jshint esversion: 6 */

/* DNA strand is missing the pairing element.
Get the pair of each element and return results as a 2D array. */
function pairElement(str) {
  let twoD = [];
  let split = str.split("");
  for (var i = 0; i < str.length; i++) {
    twoD.push([split[i]]);

    if (twoD[i][0] == "G") {
      twoD[i].push("C");
    } else if (twoD[i][0] == "C") {
      twoD[i].push("G");
    } else if (twoD[i][0] == "A") {
      twoD[i].push("T");
    } else if (twoD[i][0] == "T") {
      twoD[i].push("A");
    }
  }
  return twoD;
}
