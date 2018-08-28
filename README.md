# JavaScriptExercises
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
