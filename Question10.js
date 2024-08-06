// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

async function brewCoffee(coffee_type) {
  this.coffee_type = coffee_type;

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coffee_type == "") {
        reject("Sorry!Unable to make your coffee");
      } else {
        resolve("Congratulation !Your" + coffee_type + "coffee is ready");
      }
    }, 5000);
  })
    .then((e) => {
      console.log(e);
    })
    .catch((err) => {
      console.log(err);
    });
}

//calling a function
let type = prompt("Enter your favourite coffee.");
brewCoffee(type);
