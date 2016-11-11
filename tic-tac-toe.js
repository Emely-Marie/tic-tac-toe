// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function squareON() {
  var canvas = document.getElementById("game-board")
  var currentPlayer = "playerOne"
  if (currentPlayer == "playerOne") {
  var playerOne = document.createElementNS(namespace, "circle")
    playerOne.setAttribute("cx", 69.5)
    playerOne.setAttribute("cy", 75)
    playerOne.setAttribute("r", 20)
    playerOne.setAttribute("fill", "none")
    playerOne.setAttribute("stroke", "blue")
    playerOne.setAttribute("stroke-width", "5")
    canvas.appendChild(playerOne)
    currentPlayer = "playerTwo"
  } else {
    var playerTwo = document.createElementNS(namespace, "polygon")
      playerTwo.setAttribute("points", "55 90, 70 60, 85 90")
      playerTwo.setAttribute("fill", "none")
      playerTwo.setAttribute("stroke", "blue")
      playerTwo.setAttribute("stroke-width", "5")
      canvas.appendChild(playerTwo)
      currentPlayer = "playerOne"
  }
}
