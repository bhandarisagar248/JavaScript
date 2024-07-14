//The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

//declearing an array
var items = [];
var result = [];

// adding items to the arrary

items.push("Sagar");
items.push("Sagar");
items.push("Samir");
items.push("Sagar");
items.push("Ramesh");
items.push("Hari");
items.push("Hari");

console.log(items);
function DoubleTrouble(array) {

    //clear the result before each function call
    result=[];
  for (i = 0; i < array.length; i++) {
    if (array[i] == array[i + 1]) {
      result.push(array[i]); // if two consecutive items
      result.push(array[i + 1]);
      i++; // skip the next items as it's duplicate
    }
     else {  //duplicate the items
      result.push(array[i]);
      result.push(array[i]);
    }
  }
}

DoubleTrouble(items);
console.log(result);
