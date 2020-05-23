document.getElementById("p1").addEventListener("mouseover", mouseOver);
document.getElementById("p1").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("p1").innerHTML = "lorem ipsum";
}
function mouseOut() {
  document.getElementById("p1").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magni error velit ipsam minima sapiente praesentium totam nam debitis, exercitationem commodi molestiae recusandae laborum, soluta porro quam alias aspernatur dicta.";
}
