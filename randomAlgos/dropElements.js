/*jshint esversion: 6 */

/* given the array, iterate through and remove each element
starting from the first until the function returns true when iterated
element is passed through it */

function dropElements(arr, func) {
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  //return arr;
  console.log(arr);
}

dropElements([1, 2, 3, 4], function(n) {
  return n > 5;
});
