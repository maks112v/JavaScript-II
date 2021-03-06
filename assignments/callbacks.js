// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


const newItems = ['Pencil', 'Notebook', 'yo-yo', 'yo-yo', 'Gum','yo-yo'];
/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(items.length);
}

getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}

last(items, function(last) {
  console.log(last);
});

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(4,10, function(sum) {
  console.log(sum);
})

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(4,10, function(sum) {
  console.log(sum);
})

function contains(item, list, cb) {
  return cb(list.includes(item));
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

contains("Gum",items,function(contains){
  console.log(contains);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  return cb(array.filter((element, index, array) => index === array.indexOf(element)));
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

removeDuplicates(newItems,function(newArray){
  console.log(newArray);
});