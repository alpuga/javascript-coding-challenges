/*jshint esversion: 6 */

/* Sum of the even numbers in nth terms*/

function fiboEvenSum(n) {
  //declare variables
  let sum = 0;
  let current = 1;
  let previous = 1;
  let newArr = [];

  //run a loop to push fib number at each index to new array
  for (var i = 0; i < n; i++) {
    if (current == 1) {
      newArr.push(current);
    }
    current += previous;
    previous = current - previous;
    newArr.push(current);
  }

  //loop through the new array of fib numbers and sum the even ones
  for (var j = 0; j < newArr.length; j++) {
    if (newArr[j] % 2 == 0) {
      sum += newArr[j];
    }
  }

  return sum;
}

//test
fiboEvenSum(0);
