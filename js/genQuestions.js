//sotre data:
questions = { "questions":[ 
  {"question":"What were the first words spoken on the moon?", 
  "answers":[ "...one small step for a man, one giant leap for mankind", "The pledge of allegiance", "The preamble of the constitution", "Not known, the radio data failed"], 
  "explanation":"\"...one small step for a man, one giant leap for mankind\" were the first words on the moon, spoken my Neil Armstrong. He claims he siad \"...one small step for a man, AND ONE giant leap for mankind\", but the radio did not pick up on it.", "source":"https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html" }]};


//finalize
myJSON = JSON.stringify(questions);
localStorage.setItem("questions", myJSON);
console.log("wrote data");
