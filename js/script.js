function myFunction() {
  document.getElementById("f1").innerHTML = "Value is 5";
}
function myFunction1() {
  let x = document.getElementById("f2").innerHTML;
  document.getElementById("f2").innerHTML = x.toUpperCase();
}
function myFunction2() {
  let x = document.getElementById("f3").innerHTML;
  document.getElementById("f3").innerHTML = x.toLowerCase();
}
function myFunction3() {
  let text = "     Remove unneccessary space     ";
  let result = text.trim();
  document.getElementById("f4").innerHTML = result;
}
function myFunction4() {
  let text = "Return character 2 and 6";
  let result = text.substring(2, 6);;
  document.getElementsByClassName("c1")[0].innerHTML = result;
}
function myFunction5() {
  let text = "Replace eword  ";
  let result = text.replace("Replace eword", "Replaced!!");
  document.getElementsByClassName("c1")[1].innerHTML = result;
}
function myFunction6() {
  let text = "This is a paragraph.";
  let result = text.length;
  document.getElementsByTagName("p")[6].innerHTML = result;
}
function myFunction7() {
  let text = "Hello World";
  let result = text.includes("hello");
  document.getElementsByTagName("p")[7].innerHTML = result;
}
function myFunction8() {
  let text1 = "What a very ";
  text1 += "nice day";
  
  document.getElementById("f10").innerHTML = text1;
}