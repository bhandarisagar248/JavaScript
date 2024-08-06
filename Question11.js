// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(product_array,filter_criteria){

let newArray=[];
    for(i=0;i<product_array.length;i++){

        if(product_array[i].name===filter_criteria){
        newArray.push(product_array[i]);
        }

    }

    return newArray;
}



//defining an array of objects
const product=[

    {id:1, name:"Shirts"},
    {id:2, name:"Socks"},
    {id:3, name:"Shorts"},
    {id:4, name:"Laptops"},
    {id:5, name:"Tablets"},
    {id:6, name:"Phones"},
    {id:7, name:"Watches"},
    {id:8,name:"Pants"},

]

// calling function along with the arguments

console.log(filterProducts(product,"Shirts"));

