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
  console.log("setting questions")
  document.querySelector('#answer0id ~ label').innerHTML = 'testing123'; 
}
