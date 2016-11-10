// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function squareON() {
  var canvas = document.getElementById("game-board")
  var exx = document.createElementNS(namespace, "circle")
    exx.setAttribute("cx", 69.5)
    exx.setAttribute("cy", 75)
    exx.setAttribute("r", 20)
    exx.setAttribute("fill", "red")
    canvas.appendChild(exx)
}
