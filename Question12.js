// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time


function setAuthToken(Authentication_Token){
    
    const expiration= Date.now()+60;//60 second from now

    //creating an object to store toke data
    const token={
        token:Authentication_Token,
        expiresAt:expiration,
    };

    //storing an token to the localstorage
    localStorage.setItem("AuthToken", JSON.stringify(token));

    console.log("Your token is: "+Authentication_Token);
    

    //settimeout remove the token from local storage after 60 second
setTimeout(() => {

removetoken(); 
}, 60000);



}



//function to remove token from the local storage
function removetoken(){
    localStorage.removeItem("AuthToken");
    console.log("Sorry!Your token has expired:");
}


//function to retrieve and check the validaty of the toekn
function GetAuthToken(){
    const tokendata=JSON.parse(localStorage.getItem("AuthToken"));

    if(tokendata){
          if(Date.now()<tokendata.expiresAt){

            return tokendata.token;
          }
          else{
            removetoken();
            console.log("Sorry!Your token Has been expired.");

          }

    }

    return null;
}

//calling function
setAuthToken(20509465);

console.log(GetAuthToken());
