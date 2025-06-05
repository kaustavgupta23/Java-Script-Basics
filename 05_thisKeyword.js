const user = {
    username: "kaustav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);

        console.log(this);
        
    }

}

//user.welcomeMessage()
//user.username = "sam"; // yaha context change krdia -> values change krdi bs 
//user.welcomeMessage()

console.log(this);


// this -> current context
// loop ek andar ke kisi bhi chiz ko access krne ke liye -> use this  

// browser has global object that is windows object

function coffee(){
    console.log(this);
}
  
coffee(); // calling the function