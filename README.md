# JavaScript Exercises
Simple Javascript Exercises
--------------------------------------------------------------------------------------------------------------------

1) Return the last item of an array

Create a function that accepts an array and returns the last item in the array:

Different solutions:

function getLastItem(arr) {
  return arr[arr.length - 1]
}

function getLastItem(arr) {
  return arr.pop();
}

const getLastItem = a => a.slice(-1)[0];

--------------------------------------------------------------------------------------------------------------------

2) Repeat the same item multiple times

Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

Solution:

function repeat(item,times){
    return new Array(times).fill(item);
}

Notes: Look into https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

