const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        // event.target likhne se ye pta chal jaata hai event aa kaha se raha hai
        // ========== METHOD 1: SWITCH STATEMENT ==========
        switch(e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
        }
        // ========== METHOD 2: IF-ELSE ==========
        /*
        // Alternative approach using if-else statements
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        */
    })
})


