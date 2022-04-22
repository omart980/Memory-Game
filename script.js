// Sound Synthesis
const freqMap = {
  1: 231.6,
  2: 369.6,
  3: 392.7,
  4: 366.2,
  // new synthesis added
  5: 534,
  6: 435,
};

// Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const CHANCES = 3;
const TIME = 6000; // Counts from 6 seconds -> down
const patternLength = 5; // length of the pattern

//Global Variables
var pattern = createPattern();
var clueHoldTime = 1000; //how long to hold each clue's light/sound

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

var timer = TIME; // 20 seconds
var TIME_INTERVAL;

var mistakes = 0;

function startGame() {
  var pattern = createPattern();

  //initialize game variables
  progress = 0;
  gamePlaying = true;

  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence();

  clueHoldTime = 1000;

  // begin initializing mistakes
  mistakes = 0;
  document.getElementById("numLives").innerHTML = CHANCES;
}

function stopGame() {
  gamePlaying = false;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

  clearInterval(TIME_INTERVAL);
}

function playTone(btn, len) {
  context.resume();
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  context.resume();
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function loseGame() {
  stopGame();
  alert("Sorry, game over. You lost.");
}

function winGame() {
  stopGame();
  alert("Congratulations, You WON!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // If the guess was correct...
  if (pattern[guessCounter] == btn) {
    // If their turn is over...
    if (guessCounter == progress) {
      clearInterval(TIME_INTERVAL);
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        // If pattern correct, play next segment
        progress++;
        playClueSequence();
      }
    } else {
      // Next guess
      guessCounter++;
    }
  } else {
    mistakes++;
    document.getElementById("numLives").innerHTML = CHANCES - mistakes;
    if (mistakes >= CHANCES) loseGame();
  }
}

function myTimer() {
  timer -= 100;
  document.getElementById("timeLeft").innerHTML = timer / 1000;

  // If they run out of time...
  if (timer <= 0) {
    loseGame();
    clearInterval(TIME_INTERVAL);
    nextClueWaitTime = 1000;
  }
  console.log("current time:" + timer + " inseconds: " + timer / 1000);
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;

  clueHoldTime -= (clueHoldTime / pattern.length) * 3;

  if (clueHoldTime <= 200) clueHoldTime = 200;

  let totalDelay = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);

    if (progress === 0) {
      totalDelay += delay + clueHoldTime + cluePauseTime;
      break;
    }
    if (i === progress) totalDelay += delay + clueHoldTime;

    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timer = TIME;
  setTimeout(startTimer, totalDelay);
}

function startTimer() {
  if (gamePlaying) {
    TIME_INTERVAL = setInterval(myTimer, 100);
    timer = TIME;
  }
}

function createPattern() {
  var numKeys = Object.keys(freqMap).length;
  console.log(freqMap);

  // Random fucntion added here
  pattern = [];
  for (var i = 0; i < patternLength; i++) {
    pattern.push(Math.floor(1 + Math.random() * numKeys));
  }
  return pattern;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
