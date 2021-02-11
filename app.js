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
let gameState = ['', '', '', '', '', '', '', '', '']

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

///////////////////////////////////////////////////////
const logic = function () {
  for (let i = 0; i < topCells.length; i++) {
    topCells[i].addEventListener('click', function (c) {
      // if(-7)
      // if ()
      console.log(gameState)
      //if bottomcells[i].style background = red ,continue to next line:
      //
      if (!row5[i].classList.contains('full')) {
        row5[i].style.backgroundColor = `${currentPlayer}`
        console.log(row5[i].id)
        gameState[row5[i].id] = currentPlayer
        row5[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row4[i].classList.contains('full')) {
        console.log('row4')
        row4[i].style.backgroundColor = `${currentPlayer}`
        row4[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row3[i].classList.contains('full')) {
        console.log('row3')
        row3[i].style.backgroundColor = `${currentPlayer}`
        row3[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row2[i].classList.contains('full')) {
        console.log('row2')
        row2[i].style.backgroundColor = `${currentPlayer}`
        row2[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row1[i].classList.contains('full')) {
        console.log('row1')
        row1[i].style.backgroundColor = `${currentPlayer}`
        row1[i].classList.add('full')
        switchPlayer()
        return
      } else if (!row0[i].classList.contains('full')) {
        console.log('row0')
        row0[i].style.backgroundColor = `${currentPlayer}`
        row0[i].classList.add('full')
        switchPlayer()
        return
      }

      // if (row4[i].classList.contains('full')) {
      //   row4[i].style.backgroundColor = `${currentPlayer}`
      //   row4[i].classList.add('full')
      //   switchPlayer()
      // } else if (row4[i].classList.contains('full')) {
      //   row3[i].style.backgroundColor = `${currentPlayer}`
      //   row3[i].classList.add('full')
      //   switchPlayer()
      // }

      // if (row3[i].classList.contains('full')) {
      //   row3[i].style.backgroundColor = `${currentPlayer}`
      //   row3[i].classList.add('full')
      //   switchPlayer()
      // } else if (row3[i].classList.contains('full')) {
      //   row2[i].style.backgroundColor = `${currentPlayer}`
      //   row2[i].classList.add('full')
      //   switchPlayer()
      // }

      // if (row2[i].classList.contains('full')) {
      //   row2[i].style.backgroundColor = `${currentPlayer}`
      //   row2[i].classList.add('full')
      //   switchPlayer()
      // } else if (row2[i].classList.contains('full')) {
      //   row1[i].style.backgroundColor = `${currentPlayer}`
      //   row1[i].classList.add('full')
      //   switchPlayer()
      // }

      // if (row1[i].classList.contains('full')) {
      //   row1[i].style.backgroundColor = `${currentPlayer}`
      //   row1[i].id = 'full'
      //   switchPlayer()
      // } else if (row1[i].classList.contains('full')) {
      //   row0[i].style.backgroundColor = `${currentPlayer}`
      //   row0[i].id = 'full'
      //   switchPlayer()
      // }

      // if (currentPlayer === 1) {
      //   row5[i].style.backgroundColor = 'red'
      //   currentPlayer === 2
      //   if (currentPlayer === 2) {
      //     row5[i].style.backgroundColor = 'blue'
      //     currentPlayer === 1
      //   }

      // }
    })
  }
}
logic()

//}
// const checkWin = ()=>{
//   if(checkWin ){

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
