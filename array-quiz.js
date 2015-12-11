//Use loops and an array to create a quiz application, 
//that tracks the number of quiz questions answered correctly.
// answers = answers.toLowerCase();

var questions;
var answers;
var response;


var questions = [
	["How many bones are in the human body?", 206],
	["How many states in the US?", 50],
	["How many licks does it take to get to the center of a tootie pop?", 252]
];

for(var i = 0; i < questions.lenght; i++){
	questions = questions[i][0];
	answers = questions[i][1];
	response = prompt(questions);
	response = parseInt(response);
}



//remember to make the response a number, since it is automatically a string. 