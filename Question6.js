// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

//declearing a string
var string = "Ram is very honest Person .He loves to help others";

function VowelCounter(String) {
  var count = 0;

  //using for loop to compare each of the character of the String
  for (i = 0; i < String.length; i++) {
    if (String.charAt(i) == "a" || String.charAt(i) == "A") {
      count++;
    } else if (String.charAt(i) == "e" || String.charAt(i) == "E") {
      count++;
    } else if (String.charAt(i) == "i" || String.charAt(i) == "I") {
      count++;
    } else if (String.charAt(i) == "o" || String.charAt(i) == "O") {
      count++;
    } else if (String.charAt(i) == "u" || String.charAt(i) == "U") {
      count++;
    }
  }
  return count;
}


console.log("The Numbers of Vowels Letter in ["+string+"] are: "+VowelCounter(string));
