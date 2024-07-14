// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

//declearing an array
var array = [1, 2, 3, 4, 5, -6, 7, 8];

console.log(...array);


//function that sum all the array items until negative number is encountered
function SumArrayItems(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      sum = sum + array[i];
      if (i == array.length - 1) {
        return sum;
      }
    } else {
      return sum;
    }
  }
}



console.log("The Sum of the Array items is: "+SumArrayItems(array));
