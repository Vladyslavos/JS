//Time
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getSeconds());

date.setHours(23);
date.setMinutes(22);

console.log('Time: ' + date.getHours() + ':' + date.getMinutes() )



//Objects
class Person {
  constructor(name, age, happiness){
    this.name = name;
    this.age = age;
    this happiness = happiness;
  }
}
let alex = new Person('Alex', '35', true);
console.log(alex.age);

class Phone{
	constructor(model, weight, camera){
		this.model = model;
		this.weight = weight;
		this.camera = camera;
	}
}

let iphone = new Phone("Iphone", "0,129 kg", "34mpx");
console.log(iphone.camera);

class Cars{
	constructor(price, year, color)
	
}
