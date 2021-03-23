let changes = document.getElementById("text");
changes.style.color = "red";
//
document.getElementById("link").style.backgroundColor = "green";
//
let list = document.getElementById("column");
list.style.marginTop = "440px";
//
let footerText = document.getElementById("foot");
footerText.style.fontSize = "400px";
//
let classElement = document.getElementsByClassName("span_class");
classElement.style.backgroundColor = "yellow";
//
let spans = document.getElementsByTagName('span');
for(let i = 0; i < spans.length; i++){
  console.log(spans[i].innerHTML);
}
//
let spans = document.getElementsByClassName('simple-text');
for(let i = 0; i < spans.length; i++){
  console.log(spans[i].innerHTML);
  //
