/*jshint esversion: 6 */

/* Flatten a nested array. Must account for varying levels of nesting */
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
