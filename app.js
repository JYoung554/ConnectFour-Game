const playerStyle = document.querySelector('.player')
playerStyle.style.fontFamily = 'Helvetica, Arial, Sans-Serif'
const displayCurrentPlayers = document.querySelector('player')
const grid = document.querySelectorAll('game-grid')
const cells = document.querySelectorAll('.cell')
const topCells = document.querySelectorAll('.drop')
const bottomCells = document.querySelectorAll('.bottom')
const result = document.querySelector('result')
const resetButton = document.querySelector('.reset')
let currentPlayer = 1

resetButton.style.backgroundColor = 'red'

const cellBottom = document.querySelectorAll('.bottom')
/////////////////////////////////////////////////////////////////////
const gameActive = false
const gameWin = 0
// currentPlayer = topCells[i]
///////////////////////////////////////////////////////////////

const dropRow = [
  topCells[0],
  topCells[1],
  topCells[2],
  topCells[3],
  topCells[4],
  topCells[5],
  topCells[6]
]

const column0 = document.querySelectorAll('.col-0')
const column1 = document.querySelectorAll('.col-1')
const column2 = document.querySelectorAll('.col-2')
const column3 = document.querySelectorAll('.col-3')
const column4 = document.querySelectorAll('.col-4')
const column5 = document.querySelectorAll('.col-5')
const column6 = document.querySelectorAll('.col-6')

const columns = [column0, column1, column2, column3, column4, column5, column6]
///////////////////////////////////////////////////////
//const logic = function () {
for (let i = 0; i < topCells.length; i++) {
  topCells[i].addEventListener('click', function (c) {
    // if(-7)
    bottomCells[i].style.backgroundColor = 'red'
    currentPlayer = 2
  })
}
//}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function () {
    console.log(topCells[i])
    console.log(cells[i])
  })
}
resetButton.addEventListener('click', function () {
  location.reload()
})
console.log(dropRow)

//if gameActive click on topcell , bottom will fill with player color and switch player,
//and hold taken property. if all cells have taken property , game is over. if win combinations met , game is over.
//

////////////////////////////////////////////////
//Add variable that tracks current player
//Add variable for all possible win states, check state by indeces
// Add click event listener to drop class
//Add variable to store game state
//Array = gameGrid.length

/////////////////////////////////////////
//When player clicks drop cell
//Their move will go down to bottom of grid & recorded in game state
//Check for win state (Horizontal , Vertical, and Diagonal)
//If no win , switch to player 2
//In case of Player 2 , toggle player class
//Repeat steps until win/draw condition is met
//Roughly 24 horizontal 21 vertical and 24 diagonal win conditions
