// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


//declearing array with items
var input=[6,7,3,8,2,9,0,1,];

//async function taking array of numbers
async function Array_Mapping(arr) {
  var newArr = [];
  await setTimeout(() => {
    let result = new Promise((resolve, reject) => {
      for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          newArr.push(arr[i]);
        }
      }
      resolve(newArr);
    });

    result.then((e) => {
      console.log(e);
    });
  }, 500);
}


// calling function 

Array_Mapping(input);