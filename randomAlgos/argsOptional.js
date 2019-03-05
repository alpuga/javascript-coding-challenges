/*jshint esversion: 6 */

/* Sums two arguments together. If only one argument is
provided, then return a function that expects one arguement and
returns the sum. */

function addTogether() {
  let args = [...arguments];

  function isNotNumber(num) {
    if (typeof num !== "number") {
      return true;
    } else {
      return false;
    }
  }

  if (args.length > 1) {
    if (isNotNumber(args[0]) || isNotNumber(args[1])) {
      return undefined;
    }
    return args[0] + args[1];
  }

  if (args.length == 1) {
    if (isNotNumber(args[0])) {
      return undefined;
    } else {
      return function(b) {
        if (isNotNumber(b)) {
          return undefined;
        } else {
          return args[0] + b;
        }
      };
    }
  }
}

addTogether(3);
