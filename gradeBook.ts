// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
   const res =  (s1 + s2 + s3) / 3
    if (res <= 100 && res >= 90) return 'A'
    if (res < 90 && res >= 80) return 'B'
    if (res < 80 && res >= 70) return 'C'
    if (res < 70 && res >= 60) return 'D'
    if (res < 60 && res >= 0) return 'F'
}

console.log(getGrade(95,90,93))
