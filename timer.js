let counter = 0;
function count(){
	counter++;
	console.log("Counter:" + counter);
}
setInterval(count, 1000);
//We can create function inside setInterval();
let counter_1 = 0;
setInterval(function count_2(){
    counter_1++;
	console.log("Counter:" + counter_1);
}, 2000);
//
setTimeout(function greetings(){
	alert('Hello world!');
}, 3000);
