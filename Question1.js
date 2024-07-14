// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// declearing a four houses as an array
var Gryffindor=[];
var Hufflepuff=[];
var Ravenclaw=[];
var Slytherin=[];

// to store the name of the students
var arrName=[];

// function to set student name
function AddStudentName(name){
   arrName.push(name);
}


//add student name using function
AddStudentName("Sagar Bhandari");
AddStudentName("Ramesh Shrestha");
AddStudentName("Samir Khadka");
AddStudentName("Bigyan Dulal");
AddStudentName("Sita Rai");
AddStudentName("Bhola Taj");
AddStudentName("Ram");
console.log(arrName);

//using for loop to check the numbers of letter of each student and classify them
function main(){

    for(i=0;i<arrName.length;i++){
        
        if((arrName[i].length)<=6){
            console.log(arrName[i]);
            Gryffindor.push(arrName[i]);
        }

        if((arrName[i].length>6 && arrName[i].length<=8)){
            console.log(arrName[i]);
            Hufflepuff.push(arrName[i]);
            
        }

        if(arrName[i].length>8 && arrName[i].length<=12){
            Ravenclaw.push(arrName[i]);
        }

        if((arrName[i].length>12)){
            Slytherin.push(arrName[i]);

        }
        
    }
}
    
    //calling main function
main();

// to print all the four houses 
console.log("House Gryffindor:=>["+Gryffindor+"]");
console.log("House Hufflepuff:=>["+Hufflepuff+"]");
console.log("House Ravenclaw:=>["+Ravenclaw+"]");
console.log("House Slytherin:=>["+Slytherin+"]");