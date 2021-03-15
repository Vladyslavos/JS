//On load function
function onLoad (){
	alert("Hello user!");
}
//Count function
let counter = 0;
function count(el){
	counter++;
	el.innerHTML = "You pressed this button " + counter + " times";
}
