// installing dependencies
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// Welcome Message
var userName = readlineSync.question("What is your name? ")
var welcomeMessage = "Welcome to the " + chalk.cyan.underline("Elon Musk") +  " Quiz, " + chalk.bgYellow(userName) + ". \n" + "Let's see how well you know one of the smartest humans on the planet!";

console.log(welcomeMessage);

//variables 
var score = 0;

// array of questions & answers for the quiz
var quiz = [
  {
    question: "In which country was Elon Musk born? ",
    array: ["South Africa", "Romania", "Canada", "America"],
    answer: "South Africa"
  },
  {
    question: "At what age did Musk learn programming?  ",
    array: ["8", "10", "12", "14"],
    answer: "10"
  },
  {
    question: "In 1999, Musk founded X.com, which merged with Confinity 2 years later to become which online business?",
    array: ["Google", "Paypal", "Twitter", "Facebook"],
    answer: "Paypal"
  },
  {
    question: "In 2004 Musk became the chairman of a company which manufactures electric cars. It is named after which historical inventor?",
    array: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Guglielmo Marconi"],
    answer: "Nikola Tesla"
  },
  {
    question: "In 2016, Musk founded another company, dedicated to providing tunnels for transportation. What is this company called?",
    array: ["The Boring Company", "The Mole Company", "The Tunnel Company", "The Drilling Company"],
    answer: "The Boring Company"
  },
]

//play function
function play(listOfAnswers, question, answer) {
  var userAnswer = readlineSync.keyInSelect(listOfAnswers, question);

  if(listOfAnswers[userAnswer].toUpperCase() === answer.toUpperCase()) {
    console.log("That is correct.");
    score++;
  } else {
    console.log("That is incorrect.");
    console.log("The correct answer is: " + answer);
  }

  console.log(chalk.bgRedBright("Your score is: ") + score);
}

//loop 
for(var i = 0; i < quiz.length; i++) { 
  play(quiz[i].array, quiz[i].question, quiz[i].answer);
  console.log('-----------------------------------------------------------------');
}

// data of high score
var highScores = [
  {
    name: "Vedant",
    score: 5
  },

  {
    name: "Mihir",
    score: 4
  }
]

//final score and leaderboard display

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
showScores();