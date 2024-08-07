// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.



//function to calculate total cost
function calculateTotal(products){
var result=0;
    for(i=0;i<product.length;i++){
    result+=(product[i].price)* (product[i].quantity);
        
    }

    return result;

};


const product=[
    {name:"Mouse", price:400 ,quantity:2 },
    {name:"Keyboard", price:700 ,quantity:3 },
    {name:"Speaker", price:3000 ,quantity:5 },
    {name:"Joystick", price:800 ,quantity:4 },
    {name:"RTX 2050", price:15000 ,quantity:3 },
    {name:"RTX 3050", price:20000 ,quantity:3 },
    {name:"RTX 4050", price:25000 ,quantity:4 }
];


console.log("The total cost is: Rs "+calculateTotal());