function submitValues() {
  //get value
  var selectedValue = document.querySelector('input[name = "answers"]:checked').value;
  alert(selectedValue)
}

text = localStorage.getItem("questions");
console.log("text : " + text)
allQuestions = JSON.parse(text);
console.log("allQuestions: " + allQuestions)
questions = allQuestions.questions
var curQuestion = questions[0];
console.log(curQuestion);
console.log("the question " + curQuestion.question);
