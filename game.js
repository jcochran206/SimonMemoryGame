// global varialbes and arrays
var buttonColors = ["red", "blue", "green", "yellow"];

// pattern
var gamePattern = [];

//functions and methods for simon game
function nextSequence(){
  // generate random number
  var randomNumber = Math.floor(Math.random() * 4);
  // generate random color picker
  var randomChosenColor = buttonColors[randomNumber];
  //push to gamePattern
  gamePattern.push(randomChosenColor);
  // select the button with same color as randomChosenColour then create flash
  $("#" + randomChosenColor).fadeIn().fadeOut().fadeIn();
  //play audio for chosen color
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");

  console.log(randomNumber);
}
