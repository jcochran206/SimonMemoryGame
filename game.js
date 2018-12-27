// global varialbes and arrays
var buttonColors = ["red", "blue", "green", "yellow"];
// game pattern
var gamePattern = [];
// user pattern
var userClickedPattern = [];
// starting level
var level = 0;
// to verify if game is started
var started = false;

//functions and methods for simon game
$(document).keypress(function(){
  if(!started){
    //check if started then change h1 to reflect level when keypress is initiated
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

});


//next sequence
function nextSequence(){
  // increment level
  level++;
  // change h1 with level in HTML H1
  $("#level-title").text("Level" + level);
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
  },1000);
}

function checkAnswer(currentLevel){
  if(gamePattern === userChosenColor){
    console.log("success");
  }else{
    console.log("wrong");
  }
}
