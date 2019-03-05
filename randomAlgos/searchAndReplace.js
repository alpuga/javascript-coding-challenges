/*jshint esversion: 6 */

/* Perform search and replace on the sentence using arguments
provided and return the new sentence. */
function myReplace(str, before, after) {
  function applyCasing(source, target) {
    var targetArr = target.split("");
    var sourceArr = source.split("");

    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase();
      } else {
        targetArr[i] = targetArr[i].toLowerCase();
      }
    }
    return targetArr.join("");
  }
  return str.replace(before, applyCasing(before, after));
}
