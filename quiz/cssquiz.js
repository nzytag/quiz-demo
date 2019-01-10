'use strict';

var form = document.getElementById('quiz');
var answerBank = ['b', 'b', 'd', 'd', 'a'];
var correct = [];
var score = 0;
var maxScore = 5;

// array of objects
// with question and answer
function getAnswer1() {
  var selectedValue;
  var radios = document.getElementsByName('question1');
  for(var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      selectedValue = radios[i].value;
    }
  }
  correct.push(selectedValue);
  console.log(correct);
}

function getAnswer2() {
  var selectedValue;
  var radios = document.getElementsByName('question2');
  for(var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      selectedValue = radios[i].value;
    }
  }
  correct.push(selectedValue);
  console.log(correct);
}

function getAnswer3() {
  var selectedValue;
  var radios = document.getElementsByName('question3');
  for(var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      selectedValue = radios[i].value;
    }
  }
  correct.push(selectedValue);
  console.log(correct);
}

function getAnswer4() {
  var selectedValue;
  var radios = document.getElementsByName('question4');
  for(var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      selectedValue = radios[i].value;
    }
  }
  correct.push(selectedValue);
  console.log(correct);
}

function getAnswer5() {
  var selectedValue;
  var radios = document.getElementsByName('question5');
  for(var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
      selectedValue = radios[i].value;
    }
  }
  correct.push(selectedValue);
  console.log(correct);
}

function getAnswers() {
  getAnswer1();
  getAnswer2();
  getAnswer3();
  getAnswer4();
  getAnswer5();
}

function gradeAnswers() {
  getAnswers();
  for (var i = 0; i < answerBank.length; i++) {
    if (answerBank[i] === correct[i]) {
      score++;
    }
  }
  console.log('score', score);
  makeChart();
  form.style.display = 'none';
}

function buttonListeners() {
  var button = document.getElementById('button');
  button.addEventListener('click', gradeAnswers);
}

buttonListeners();


/*** CHART ***/


var makeChart = function() {
  var ctx = document.getElementById('chart').getContext('2d');
  ctx.canvas.width = 300;
  ctx.canvas.height = 300;
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Correct', 'Incorrect'],
      datasets: [{
        label: 'Total Answers',
        data: [score, (maxScore - score)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
    }
  });
};
