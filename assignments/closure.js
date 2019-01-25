// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closerFunction(name){
  let userName = name;
  function greet(){
    //debugger;
    return `Hello ${userName}`;
  }
  return greet(userName);
}

console.log(closerFunction("Maks"));


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  //debugger;
  let count = 0;
  return function(){
    //debugger;
    return ++count;
  }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
// function increment(i){
//   return i + 1;
// }
// console.log(counter(5,increment));

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 6;
  return {
    increment: function (count){count + 1},
    decrement: function (count){--count},
  };
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

// function decrement(i){
//   return i - 1;
// }

const newishCounter = counterFactory();

console.log(newishCounter);

// console.log(counterFactory(20,increment));

// console.log(counterFactory(5,decrement));