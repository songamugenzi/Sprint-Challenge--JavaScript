// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//'nestedFunction' is able to access the 'internal' variable because it's within its lexical scope.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const sumation = function (addThis) {
  let counter = 0;
  for (var i = 0; i <= addThis; i++) {
    counter += i;
  }
  return counter
}

console.log(sumation(4));