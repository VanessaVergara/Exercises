function countDown(num){
    
    let clock = setInterval(function(){
        num--;
           if (num <= 0){
               clearInterval(clock);
               console.log('DONE!');
           }
           else {
               console.log(num);
           }

    },1000)
    
    
}

function randomGame(){
let counter = 0
let num;
let clock = setInterval(function(){
        num =  Math.random()
        counter += 1
      if (num > .75){
      clearInterval(clock)
      console.log(counter)
  } 
  },1000)

}
