/*jshint esversion: 6 */

/* given the initial grade for each student write code to
automate the rounding process. if next multiple of
5 is less then 3 round up only if is greater than 38
because lower than 40 is still an F */

function gradingStudents(grades) {
  return grades.map(grade => {
    let diff = 5 - (grade % 5);
    if (diff < 3 && grade >= 38) {
      grade += diff;
    }
    return grade;
  });
}
