var readLineSync = require('readline-sync')
var userName = readLineSync.question('Whats your name ? ');

var score = 0;
console.log("Welcome " + userName + " to Do You know Chandra? ");

function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer == answer) {
    console.log("right!")
    score = score + 1;
    console.log('Current score is =' + score)
  } else {
    console.log(" You're wrong");
  }

  console.log("Current score:" + score);
  console.log("--------------");
}

questionList = [
  questionOne = {
    question: "Where do I live?",
    answer: "Mumbai",
  },
  questionTwo = {
    question: "What's my favorite smell? ",
    answer: "First monsoon rain",
  }

]

for (var i = 0; i < questionList.length; i = i + 1) {
  play(questionList[i].question, questionList[i].answer);
}

