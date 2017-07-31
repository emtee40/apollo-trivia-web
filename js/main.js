text = localStorage.getItem("questions");
//console.log("text : " + text)
allQuestions = JSON.parse(text);
//console.log("allQuestions: " + allQuestions)
questions = allQuestions.questions
var curQuestion = questions[Math.floor(Math.random()*questions.length)];
console.log(curQuestion);
//console.log("the question " + curQuestion.question);
//console.log("answer0 " + curQuestion.answers[0]);
setQuestions();

function submitValues() {
  isCorrect = false;
  isCorrect = checkIfCorrect();
  displayMessage(isCorrect); 
  setQuestions();
}

function setQuestions() {
  curQuestion = questions[Math.floor(Math.random()*questions.length)];
  curCorrectAnswer = curQuestion.answers[0];
  arrBackup = curQuestion.answers.slice(0); 
  answersRandomized = shuffle(curQuestion.answers);
  document.querySelector('#question').innerHTML = curQuestion.question;
  document.querySelector('#answer0id ~ label').innerHTML = curQuestion.answers[0]; 
  document.querySelector('#answer1id ~ label').innerHTML = curQuestion.answers[1];
  document.querySelector('#answer2id ~ label').innerHTML = curQuestion.answers[2];
  document.querySelector('#answer3id ~ label').innerHTML = curQuestion.answers[3];
  correctAnswerNumber = curQuestion.answers.indexOf(curCorrectAnswer);
  console.log(correctAnswerNumber);
  curQuestion.answers = arrBackup;
  console.log(curCorrectAnswer);
}

function displayMessage(correctOrNot) {
  if (correctOrNot) {
    temp = " correct\n "
  }
  else {
    temp = " incorrect\n "
  }
  alertStr = temp + curQuestion.explanation
  alert(alertStr);
}

function checkIfCorrect() {
  // selected value is the value from the HTML element that the user selected
  temp = false;
  var selectedValue = document.querySelector('input[name = "answers"]:checked').value; 
  console.log("selected value " + selectedValue); 

  if (selectedValue==="answer0" && correctAnswerNumber===0){
    console.log("answer is correct");
    temp = true;
  } 
  if (selectedValue==="answer1" && correctAnswerNumber===1){
    console.log("answer is correct");
    temp = true;
  }
  if (selectedValue==="answer2" && correctAnswerNumber===2){
    console.log("answer is correct");
    temp = true;
  }
  if (selectedValue==="answer3" && correctAnswerNumber===3){
    console.log("answer is correct");
    temp = true;
  }
  return temp
  
}

//stolen from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
