// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function newGame() {
  
}






var currentPlayer = "playerOne"
function squareON() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 69.5)
    playerUno.setAttribute("cy", 75)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "55 90, 70 60, 85 90")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareTW() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 124.5)
    playerUno.setAttribute("cy", 75)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "110 90, 125 60, 140 90")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareTH() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 179.5)
    playerUno.setAttribute("cy", 75)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "165 90, 180 60, 195 90")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareFO() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 69.5)
    playerUno.setAttribute("cy", 130)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "55 145, 70 115, 85 145")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareFI() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 124.5)
    playerUno.setAttribute("cy", 130)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "110 145, 125 115, 140 145")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareSI() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 179.5)
    playerUno.setAttribute("cy", 130)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "165 145, 180 115, 195 145")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareSE() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 69.5)
    playerUno.setAttribute("cy", 185)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "55 200, 70 170, 85 200")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareEI() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 124.5)
    playerUno.setAttribute("cy", 185)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "110 200, 125 170, 140 200")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}

function squareNI() {
  var canvas = document.getElementById("game-board")
  if (currentPlayer == "playerOne") {
  var playerUno = document.createElementNS(namespace, "circle")
    playerUno.setAttribute("cx", 179.5)
    playerUno.setAttribute("cy", 185)
    playerUno.setAttribute("r", 20)
    playerUno.setAttribute("fill", "none")
    playerUno.setAttribute("stroke", "blue")
    playerUno.setAttribute("stroke-width", "5")
    canvas.appendChild(playerUno)
    currentPlayer = "playerTwo"
  } else {
    var playerDos = document.createElementNS(namespace, "polygon")
      playerDos.setAttribute("points", "165 200, 180 170, 195 200")
      playerDos.setAttribute("fill", "none")
      playerDos.setAttribute("stroke", "blue")
      playerDos.setAttribute("stroke-width", "5")
      canvas.appendChild(playerDos)
      currentPlayer = "playerOne"
  }
}
