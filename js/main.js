text = localStorage.getItem("questions");
console.log("text : " + text)
allQuestions = JSON.parse(text);
console.log("allQuestions: " + allQuestions)
questions = allQuestions.questions
var curQuestion = questions[0];
console.log(curQuestion);
console.log("the question " + curQuestion.question);
console.log("answer0 " + curQuestion.answers[0]);
setQuestions();

function submitValues() {
  //get value
  var selectedValue = document.querySelector('input[name = "answers"]:checked').value;
  alert(selectedValue)
  setQuestions();
}

function setQuestions() {
  curCorrectAnswer = curQuestion.answers[0]
  answersRandomized = shuffle(curQuestion.answers)
  document.querySelector('#question').innerHTML = curQuestion.question;
  document.querySelector('#answer0id ~ label').innerHTML = curQuestion.answers[0]; 
  document.querySelector('#answer1id ~ label').innerHTML = curQuestion.answers[1];
  document.querySelector('#answer2id ~ label').innerHTML = curQuestion.answers[2];
  document.querySelector('#answer3id ~ label').innerHTML = curQuestion.answers[3];
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
