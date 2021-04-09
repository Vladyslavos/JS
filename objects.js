//Time
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getSeconds());
console.log(date.getMinutes());
console.log(date.getSeconds());

console.log('Time: ' + date.getHours() + ':' + date.getMinutes() )



//Objects
class Person {
  constructor(name, age, happiness){
    this.name = name;
    this.age = age;
    this happiness = happiness;
  }
}
let alex = new Person('');
