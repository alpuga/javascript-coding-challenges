/*jshint esversion: 6 */

/* Sum of the even numbers in nth terms*/

function fiboEvenSum(n) {
  let sum = 0;
  let current = 1;
  let previous = 1;
  let newArr = [];

  for (var i = 0; i < n; i++) {
    if (current == 1) {
      newArr.push(current);
    }
    current += previous;
    previous = current - previous;
    newArr.push(current);
  }

  for (var j = 0; j < newArr.length; j++) {
    if (newArr[j] % 2 == 0) {
      sum += newArr[j];
    }
  }
  console.log(sum);
  return sum;
}

fiboEvenSum(0);
