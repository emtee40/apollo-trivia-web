function submitValues() {
  //get value
  var selectedValue = document.querySelector('input[name = "answers"]:checked').value;
  alert(selectedValue)
}

text = localStorage.getItem("questions");
console.log("text : " + text)
allQuestions = JSON.parse(text);
console.log("allQuestions: " + allQuestions)
people = allQuestions.people
var curPerson = people[0];
console.log(curPerson);
console.log("the question " + curPerson.name);
