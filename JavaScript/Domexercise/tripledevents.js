/*
Using the filter I got only even numbers
Using map I multiplay each by 3
WIth reduce I give the acumulator, the current and the starting point
 +*/

const arr = [1, 2, 3, 4, 5];

const result = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * 3)
  .reduce((acc, curr) => acc + curr, 0);

console.log(arr);

console.log(result);
