var len = document.querySelectorAll(".drum").length;
var btn  ,  n;
//add event listner for all the buttons
for(var i=0; i<len;++i)
{
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function (){
        var buttonInner = this.innerHTML;             //this is a pointer which points towards the current //                                                //element in loop
        playSound(buttonInner);
        pressAnimation(buttonInner);       
    });
}

//add a key event listener
document.addEventListener("keydown" , function (event) {
    playSound(event.key); 
    //add animation function 
});

function playSound(key)
{
  //play the sound as per the key is pressed 
  switch(key)
  {
      case "w":
          var snd = new Audio('sounds/crash.mp3');
          snd.play();
          break;
      
      case "a":
          var snd = new Audio('sounds/kick-bass.mp3');
          snd.play();
          break;
      
      case "s":

          var snd = new Audio('sounds/snare.mp3');
          snd.play();
          break;
      
      case "d":

          var snd = new Audio('sounds/tom-1.mp3');
          snd.play();
      break;

      case "j":
          var snd = new Audio('sounds/tom-2.mp3');
          snd.play();
          break;

      case "k":
          var snd = new Audio('sounds/tom-3.mp3');
          snd.play();
          break;
      
      case "l":
          var snd = new Audio('sounds/tom-4.mp3');
          snd.play();
          break;
      default:
          console.log(buttonInner);
  }   
}

function pressAnimation(key){    
   var btn =  document.querySelector("."+key);
   btn.classList.add("pressed");

   //give dealay of 1s and remove the class
   setTimeout(function (){
       btn.classList.remove("pressed");
   } , 100);
}