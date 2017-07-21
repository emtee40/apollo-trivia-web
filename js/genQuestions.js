//sotre data:
questions = { "questions":[ {"question":"John", "age":30, "car":null }]};
myJSON = JSON.stringify(questions);
localStorage.setItem("questions", myJSON);
console.log("wrote data");
