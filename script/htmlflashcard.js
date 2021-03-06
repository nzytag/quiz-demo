'use strict';

/*** htmlflashcard************
This is the code to display images of javascript questions and answers onto the htmlflashcard.html page.
************************/
/*** GLOBAL VARIABLE DECLARATIONS ***/

//*** qustion bank array ***
var question = ['qclasses.png', 'qdifference.png', 'qelement.png', 'qhead.png', 'qheaders.png', 'qhtml.png', 'qids.png', 'qinline.png', 'qinline.png', 'qlist.png', 'qlongtables.png', 'qmeta.png', 'qnest.png', 'qrender.png', 'qspan.png', 'qtag.png'];

//*** answer bank array ***
var answer = ['aclasses.png', 'adifference.png', 'aelement.png', 'ahead.png', 'aheaders.png', 'ahtml.png', 'aids.png', 'ainline.png', 'ainline.png', 'alist.png', 'alongtables.png', 'ameta.png', 'anest.png', 'arender.png', 'aspan.png', 'atag.png'];

var flashcardsArray = [];
var genNum1;
var genNum2;
var genNum3;
var genNum4;

/*** CONSTRUCTOR FUNCTION ***/

function Flashcard(question, answer) {
  this.question = question;
  this.answer = answer;
  this.qPath = './htmlimg/' + question;
  this.aPath = './htmlimg/' + answer;
  this.shown = false;
}

/*** OBJECT INSTANTIATON ***/

for (var i = 0; i < question.length; i++) {
  flashcardsArray.push(new Flashcard(question[i], answer[i]));
}
console.log(flashcardsArray);

/*** HELPER FUNCTIONS ***/

// random number generator to be used to select random problems
function rNJesus() {
  var rng = Math.floor(Math.random() * flashcardsArray.length);
  while (flashcardsArray[rng].shown === true) {
    rng = Math.floor(Math.random() * flashcardsArray.length);
  }
  return rng;
}

// generate 3 numbers to map to arrays for image selection
function numbersGenerator() {
  genNum1 = rNJesus();
  genNum2 = rNJesus();
  genNum3 = rNJesus();
  genNum4 = rNJesus();
  while (genNum1 === genNum2) {
    genNum2 = rNJesus();
  }
  while (genNum1 === genNum3 || genNum2 === genNum3) {
    genNum3 = rNJesus();
  }
  while (genNum1 === genNum4 || genNum2 === genNum4 || genNum3 === genNum4) {
    genNum4 = rNJesus();
  }
  console.log('right before reset', flashcardsArray);
}

//*** four sets of flashcards will be displayed ***
var topLeftQ = document.getElementById('top-left-q');
var topLeftA = document.getElementById('top-left-a');
var topRightQ = document.getElementById('top-right-q');
var topRightA = document.getElementById('top-right-a');
var bottomLeftQ = document.getElementById('bottom-left-q');
var bottomLeftA = document.getElementById('bottom-left-a');
var bottomRightQ = document.getElementById('bottom-right-q');
var bottomRightA = document.getElementById('bottom-right-a');

// adds event listeners for photos
function addEventListeners() {
  var button = document.getElementById('button');
  button.addEventListener('click', selectedData);
}

// prevents page from reloading on submit and displays new flashcards
function selectedData(event) {
  displayProblems();
}

//display  problems on screen from generated numbers
function displayProblems() {
  addEventListeners();
  numbersGenerator();
  topLeftQ.setAttribute('src', flashcardsArray[genNum1].qPath);
  topRightQ.setAttribute('src', flashcardsArray[genNum2].qPath);
  bottomLeftQ.setAttribute('src', flashcardsArray[genNum3].qPath);
  bottomRightQ.setAttribute('src', flashcardsArray[genNum4].qPath);
  topLeftA.setAttribute('src', flashcardsArray[genNum1].aPath);
  topRightA.setAttribute('src', flashcardsArray[genNum2].aPath);
  bottomLeftA.setAttribute('src', flashcardsArray[genNum3].aPath);
  bottomRightA.setAttribute('src', flashcardsArray[genNum4].aPath);
  flashcardsArray[genNum1].shown = true;
  flashcardsArray[genNum2].shown = true;
  flashcardsArray[genNum3].shown = true;
  flashcardsArray[genNum4].shown = true;
  resetShown();
  // console.log('after reset', flashcardsArray);
}


function resetShown () {
  for (var i = 0; i < flashcardsArray.length; i++) {
    if (flashcardsArray[i].shown === false) {
      return;
    }
  }
  for (var j = 0; j < flashcardsArray.length; j++) {
    flashcardsArray[j].shown = false;
  }
}


/*** FUNCTION INVOCATION ***/

displayProblems();
