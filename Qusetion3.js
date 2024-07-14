// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

//declearing a string
var string="Sagar";

var Mirror="";
function mirror(String){
  Mirror=String;
    for(i=String.length-1;i>=0;i--){
       Mirror=Mirror+string.charAt(i);
        
    }
    
    return Mirror;
}



console.log(mirror(string));
