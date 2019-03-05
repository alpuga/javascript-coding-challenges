/*jshint esversion: 6 */

/* Find the missing letter in the passed letter range
and return it */
function fearNotLetter(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((letter, index) => {
    if (str.charCodeAt(index) == compare) {
      compare++;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

fearNotLetter("abce");
