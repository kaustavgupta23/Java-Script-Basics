// // generate a random color

// const randomColor = function(){
//     const hex = '0123456789ABCDEF;'
//     let color = '#';
//     for (let i = 0; i < 6; i++){
//         color = color + hex[Math.floor(Math.random() * 16)]
//     }
//     return color;
// } 

// let intervalId
// const startChangingColor = function(){
//     if(!intervalId){
//         intervalId = setInterval(changeColor, 1500);
//     }    
//     function changeColor(){
//         document.body.style.backgroundColor = randomColor();
//     }   
// }

// document.querySelector('#start').addEventListener('click', startChangingColor)


// const stopChangingColor = function(){
//     clearInterval(intervalId);
//     intervalId = null;
// }

// document.querySelector('#stop').addEventListener('click', stopChangingColor)

const randomColor = function(){
    // const hex = '0123456789ABCEDF';
    // let color = '#';
    // for(let i = 0; i < 6; i++){

    const hexColor = "#A3F82C";
    const hex = hexColor.replace("#", "");

    const r = hex.slice(0, 2);
    const g = hex.slice(2, 4);
    const b = hex.slice(4, 6);

    const red = parseInt(r, 16);    //  163
    const green = parseInt(g, 16);  //  248
    const blue = parseInt(b, 16);   //  44

    function hexToRGB(hexColor) {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return { r, g, b };
    }



        /*
        // color = color + hex[Math.floor(Math.random() * 16)];
        // maths.floor -> takes a decimal number and rounds it down to the nearest whole number
         e.g : 
            Math.floor(4.9)    // 👉 4
            Math.floor(7.1)    // 👉 7
            Math.floor(3.999)  // 👉 3
            Math.floor(0.1)    // 👉 0
            Math.floor(9.999)  // 👉 9

            ====================================
            why multiply by 16?
            -> it gives the value between 0 to 15 because we have 16 characters in hex

            Index:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
            Value:  0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F

        */


        
    }
    return color;
}


let intervalId;
const startChange = function(){
    intervalId = setInterval(changeBG, 1500)

    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
    
}
document.querySelector('#start').addEventListener('click', startChange) // is line ko function ke upar kyu nai likha?
// bec JS is synchronous language, chiz define hui nai pehle chalegi kaise?
// function se define krenge uske baad hi toh run ho payega na

const stopChange = function() {
    clearInterval(intervalId)
    // intervalId = null;
    /*
    clearInterval(intervalId)
    ==== what does it mean? ===
    -> Hey JavaScript, stop the repeating task associated with this intervalId.
    */
}
document.querySelector('#stop').addEventListener('click', stopChange)

