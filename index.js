//to get the number of "drum class" buttons
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

//to detect Button Press on screen
for(var i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML); //passing the key that just got pressed
        butttonAnimation(this.innerHTML);

      });
}

//to detect KeyBoard Press
document.addEventListener('keydown',function(event){
  makeSound(event.key);
  butttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio((src = "sounds/tom-1.mp3"));
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio((src = "sounds/tom-2.mp3"));
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio((src = "sounds/tom-3.mp3"));
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio((src = "sounds/tom-4.mp3"));
      tom4.play();
      break;

    case "j":
      var snare = new Audio((src = "sounds/snare.mp3"));
      snare.play();
      break;

    case "k":
      var kick = new Audio((src = "sounds/kick-bass.mp3"));
      kick.play();
      break;

    case "l":
      var crash = new Audio((src = "sounds/crash.mp3"));
      crash.play();
      break;

    default:
      console.log(this.innerHTML);
  }
}

function butttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey); //returns the whole button that is pressed

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 200); //setting a timeout of 0.2s so that After 0.2s from when the pressed class is added
           // it will get removed
           //making it look like an animation
}