// global varialbes and arrays
var buttonColors = ["red", "blue", "green", "yellow"];
// game pattern
var gamePattern = [];
// user pattern
var userClickedPattern = [];
// starting level
var started = false;
//Level
var level = 0;

//functions and methods for simon game
$(document).keypress(function() {
  if (!started) {
    //check if started then change h1 to reflect level when keypress is initiated
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
//user chosing color
$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);

});
// update with a for loop
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press any key to reset");

    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
 }
}


//next sequence
function nextSequence() {
  // reset user pattern, increment level
  userClickedPattern = [];
  level++;
  // change h1 with level in HTML H1
  $("#level-title").text("Level " + level);
  // generate random number, random color picker, push to gamePattern
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  // select the button with same color as randomChosenColour then create flash
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  //play audio for chosen color
  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  //pressed animation
  $("#" + currentColor).addClass("pressed");
  // remove class animation
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
