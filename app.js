const playerStyle = document.querySelector('.player')
playerStyle.style.fontFamily = 'Helvetica, Arial, Sans-Serif'
const currentPlayer = document.querySelector('player')
const grid = document.querySelectorAll('game-grid')
const cells = document.querySelectorAll('.cell')
const topCells = document.querySelectorAll('.drop')
const result = document.querySelector('result')
const resetButton = document.querySelector('.reset')

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


const column0 = 

///////////////////////////////////////////////////////

const logic = () => {
  for (let i = 0; i < topCells.length; i++) {
    topCells[i].addEventListener('click', function () {
      if (cells[logic + 7].classList.contains('taken')) {
        if (currentPlayer === 1) {
          cells[logic].classList.add('taken')
          cells[c].classList.add('player1')


        }
      }
    })
  }
}

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
