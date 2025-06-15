// // setTimeout(function(){
// //     console.log("hello ji");
// // }, 5000)

// //handler -> callback hai jis ke function ka name nai hai

// // const sayKausti = function(){
// //    console.log("Kaustav");
// // }
// const changeText = function(){
//     document.querySelector('h1').innerHTML = "best coder in the world"
// }

// // setInterval -> har interval baad chalega
// // setInterval(sayKausti, 1000)

// const changeMe = setTimeout(changeText, 2000)

// clearTimeout(changeMe)

const changeText = function() {
    document.querySelector('h1').innerHTML = "Kaustav is the best coder in the world";
}

const changeMe = function(){
    setTimeout(changeText, 1000)
}


// timeout ko rok kaise sakte hai?
document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("STOPPP");
    
})
