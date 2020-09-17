
for (var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

  var innerhtml = this.innerHTML;
  soundtest(innerhtml);

  });



}

document.addEventListener("keydown", function(event) {

  soundtest(event.key);
});




function soundtest(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/w.ogg");
    tom1.play();
      break;
   case "a":
   var tom2 = new Audio("sounds/a.ogg");
   tom2.play();
   break;
   case "s":
   var tom3 = new Audio("sounds/s.ogg");
   tom3.play();
   break;
   case "d":
   var tom4 = new Audio("sounds/d.ogg");
   tom4.play();
   break;
   case "j":
   var crash = new Audio("sounds/j.ogg");
   crash.play();
   break;
   case "k":
   var kick = new Audio("sounds/k.ogg");
   kick.play();
   break;
   case "l":
   var snare = new Audio("sounds/l.ogg");
   snare.play();
   break;

    default:
    break;

  }
}
