// setInterval(function(){
  
    
// }, 1000)

const sayDate = function(str){
      console.log(str);
}

const intervalId = setInterval(sayDate, 1000, "hi")

clearInterval(intervalId)
// clearInterval -> sab flush out ho jayega 