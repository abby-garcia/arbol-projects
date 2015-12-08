// 1. Ask at least five questions

// 2.Keep track of the number of questions the user answered correctly

// 3. Provide a final message after the quiz letting the user know the number 
// of questions he or she got right.

// 4. Rank the player. If the player answered all five correctly, 
// give that player the gold crown: 3-4 is a silver crown; 
// 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

var correctAnswers = 0;

var answer1 = prompt("How many states in US?");
	if(answer1 === "50"){
		alert("correct!");
		correctAnswers++;
	}
	else{
		alert("wrong");
	}

var answer2 = prompt("What is Texas'capital?");
	if(answer2 === "Austin"){
		alert("correct!");
		correctAnswers++;
	}
	else{
		alert("wrong");
	}
var answer3 = prompt("What is New York's dessert?");
	if(answer3 === "cheesecake"){
		alert("correct!");
		correctAnswers++;
	}
	else{
		alert("wrong");
	}

var answer4 = prompt("What is California's nickname?");
	if(answer4 === "Golden State"){
		alert("correct!");
		correctAnswers++;
	}
	else{
		alert("wrong");
	}
var answer5 = prompt("What is the name of the longest river?");
	if(answer5 === "Mississippi"){
		alert("correct!");
		correctAnswers++;
	}
	else{
		alert("wrong");
	}	

if(correctAnswers === 5){
	alert("Golden Crown for you!");
	}

	else if(correctAnswers === 4 || correctAnswers ===3){
		alert("Silver Crown for you!");
	}	

	else if(correctAnswers === 2 || correctAnswers === 1){
		alert("Bronze Crown for you!");

	}
	else{
		alert("No crown for you!")
	}
