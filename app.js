const playerStyle = document.querySelector('.player')
playerStyle.style.fontFamily = 'Helvetica, Arial, Sans-Serif'
const displayCurrentPlayers = document.querySelector('player')
const grid = document.querySelectorAll('game-grid')
const cells = document.querySelectorAll('.cell')
const topCells = document.querySelectorAll('.drop')
// const row0 = document.querySelectorAll('.bottom')
const result = document.querySelector('result')
const resetButton = document.querySelector('.reset')
let currentPlayer = 'red'

resetButton.style.backgroundColor = 'red'

/////////////////////////////////////////////////////////////////////
const gameActive = false
const gameWin = 0
const winCombinations = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41], //HORIZONTAL WINS
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41], //VERTICAL WINS
  []
]

let gameState = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

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

const row0 = document.querySelectorAll('.row-0')
const row1 = document.querySelectorAll('.row-1')
const row2 = document.querySelectorAll('.row-2')
const row3 = document.querySelectorAll('.row-3')
const row4 = document.querySelectorAll('.row-4')
const row5 = document.querySelectorAll('.row-5')

const columns = [column0, column1, column2, column3, column4, column5, column6]

//row 0 starts at 0
//row 1 starts at 7
//row 2 starts at 14
//row 3 starts at 21
//row 4 starts at 28
//row 5 starts at 35

//position in game state is row+i

///////////////////////////////////////////////////////
const logic = function () {
  for (let i = 0; i < topCells.length; i++) {
    topCells[i].addEventListener('click', function (c) {
      console.log(gameState)
      if (!row5[i].classList.contains('full')) {
        row5[i].style.backgroundColor = `${currentPlayer}`
        console.log(row5[i].id)
        gameState[35 + i] = currentPlayer
        row5[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row4[i].classList.contains('full')) {
        console.log('row4')
        row4[i].style.backgroundColor = `${currentPlayer}`
        gameState[28 + i] = currentPlayer
        row4[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row3[i].classList.contains('full')) {
        console.log('row3')
        row3[i].style.backgroundColor = `${currentPlayer}`
        gameState[21 + i] = currentPlayer
        row3[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row2[i].classList.contains('full')) {
        console.log('row2')
        row2[i].style.backgroundColor = `${currentPlayer}`
        gameState[14 + i] = currentPlayer
        row2[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row1[i].classList.contains('full')) {
        console.log('row1')
        row1[i].style.backgroundColor = `${currentPlayer}`
        gameState[7 + i] = currentPlayer
        row1[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row0[i].classList.contains('full')) {
        console.log('row0')
        row0[i].style.backgroundColor = `${currentPlayer}`
        gameState[i] = currentPlayer
        row0[i].classList.add('full')
        switchPlayer()
        return
      }

      console.log(gameState)
    })
  }
}
logic()

// const checkWin = () => {
//   for (let i = 0; i < winCombos.length; i++) {

//   }
// }

//if win condition includes

const switchPlayer = () => {
  if (currentPlayer === 'red') {
    currentPlayer = 'blue'
  } else {
    currentPlayer = 'red'
  }
}

const display = () => {
  if ((currentPlayer = 1)) {
    displayCurrentPlayers = displayCurrentPlayers.innerText = `Player 1's Turn`
  } else if ((currentPlayer = 2)) {
    displayCurrentPlayers = displayCurrentPlayers.innerText = `Player 2's Turn`
  }
}

// for (let i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', function () {
//     console.log(topCells[i])
//     console.log(cells[i])
//   })
// }
resetButton.addEventListener('click', function () {
  location.reload()
})

// document.querySelector('.switch').addEventListener('click', switchPlayer)

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
