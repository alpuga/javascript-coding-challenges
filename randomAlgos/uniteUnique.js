/*jshint esversion: 6 */

/* takes two or more arrays and returns new array of unique values
in the order of the original arrays */
function uniteUnique(arr) {
  let args = [...arguments];
  let finalArr = [];

  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      if (!finalArr.includes(args[i][j])) {
        finalArr.push(args[i][j]);
      }
    }
  }

  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
