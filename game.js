// global varialbes and arrays
var buttonColors = ["red", "blue", "green", "yellow"];
// game pattern
var gamePattern = [];
// user pattern
var userClickedPattern = [];

//functions and methods for simon game


$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

});


//next sequence
function nextSequence(){
  // generate random number
  var randomNumber = Math.floor(Math.random() * 4);
  // generate random color picker
  var randomChosenColor = buttonColors[randomNumber];
  //push to gamePattern
  gamePattern.push(randomChosenColor);
  // select the button with same color as randomChosenColour then create flash
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  //play audio for chosen color
  playSound(randomChosenColor);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  //pressed animation
  $("#" + currentColor).addClass("pressed");

  // remove class animation
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  },100);
}
