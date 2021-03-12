
let usersName = prompt('Hello! What is your name?');
if (usersName == '') {
	('Hello! What is your name?');
}
let usersAge = prompt(usersName + ', how old are you?');
if (usersAge == '') {
	prompt(usersName + ', how old are you?');
}
let usersWay = prompt(usersName + ', choose your way! If its Frontend, write "Front", if its backend write "Back"');
if (usersWay == 'Front') {
	frontend();
}else{
	backend();
}



//Functions
function frontend(){
	let usersExp = prompt(usersName + ', do you have some expereince in this field? Write "Yes" or "No"');
	if (usersExp == "Yes") {
		alert('Ok! But weare not sure that it will be enough! Plsease visit our site to choose your study programm!');
	}else{
		alert('Ok! Plsease visit our site to choose your study programm!');
	}
}
function backend(){
	let usersExp = prompt(usersName + ', do you have some expereince in this field?');
}

// Local and global variables

function sum(){
	let client = ('Jack'); // Local variable
}

let user = ('Vlad'); //Global variable


function showMessage(){
	alert('Hello world!');
}
//setTimeout(showMessage, 4000);

//setInterval(showMessage, 2000);
