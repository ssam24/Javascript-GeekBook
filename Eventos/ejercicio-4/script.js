const button = document.getElementById("empezar");
button.addEventListener(
  "click",
  () =>
    (document.querySelector("ul").innerHTML =
      '<li id="One" onclick="first()">Inception</li><li onclick="second()">The butterfly effect</li><li onclick="third()">Eternal sunshine of the spotless mind</li><li onclick="forthd()">Blue velvet</li><li onclick="fiveth()">Split</li>')
);

function first () {
   
    document.getElementById('movie').innerHTML = "Inception";
    console.log("Inception");
  }

 function second () {
   
    document.getElementById('movie').innerHTML = "The butterfly effect";
    console.log("The butterfly effect");
  }

function third () {
   
    document.getElementById('movie').innerHTML = "Eternal sunshine of the spotless mind";
    console.log("Eternal sunshine of the spotless mind");
  }

function forthd () {
   
    document.getElementById('movie').innerHTML = "Blue velvet";
    console.log("Blue velvet");
  }

function fiveth () {
   
    document.getElementById('movie').innerHTML = "Split";
    console.log("Split");
  }
