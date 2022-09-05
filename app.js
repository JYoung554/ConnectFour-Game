const playerStyle = document.querySelector('.player')
const displayCurrentPlayers = document.querySelector('.player')
const grid = document.querySelectorAll('game-grid')
const cells = document.querySelectorAll('.cell')
const topCells = document.querySelectorAll('.drop')

const result = document.querySelector('result')
const resetButton = document.querySelector('.reset')
const startGame = document.querySelector('.start')
const homeButton = document.querySelector('.home')
let currentPlayer = 'red'
resetButton.style.backgroundColor = 'red'

topCells.forEach((cell) => (cell.style.backgroundColor = 'gray'))

/////////////////////////////////////////////////////////////////////
let gameActive = false

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
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24], //DIAGONAL WINS
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
  [21, 15, 9, 3],
  [28, 22, 16, 10],
  [22, 16, 10, 4],
  [35, 29, 23, 17],
  [29, 23, 17, 11],
  [23, 17, 11, 5],
  [36, 30, 24, 18],
  [30, 24, 18, 12],
  [24, 18, 12, 6],
  [37, 31, 25, 19],
  [31, 25, 19, 13],
  [38, 32, 26, 20]
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

///////////////////////////////////////////////////////
const logic = function () {
  gameActive = true
  displayCurrentPlayers.innerText = `${
    currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)
  }'s turn`

  for (let i = 0; i < topCells.length; i++) {
    topCells[i].addEventListener('click', addLogic)
  }
  topCells.forEach((cell) => cell.classList.add(currentPlayer))
}

const addLogic = (event) => {
  let i = parseInt(event.target.id)
  console.log(i)
  if (!row5[i].classList.contains('full')) {
    row5[i].style.backgroundColor = `${currentPlayer}`
    console.log(row5[i].id)
    gameState[35 + i] = currentPlayer
    row5[i].classList.add('full')
    checkWin()
    return
  } else if (!row4[i].classList.contains('full')) {
    console.log('row4')
    row4[i].style.backgroundColor = `${currentPlayer}`
    gameState[28 + i] = currentPlayer
    row4[i].classList.add('full')
    checkWin()
    return
  } else if (!row3[i].classList.contains('full')) {
    console.log('row3')
    row3[i].style.backgroundColor = `${currentPlayer}`
    gameState[21 + i] = currentPlayer
    row3[i].classList.add('full')
    checkWin()
    return
  } else if (!row2[i].classList.contains('full')) {
    console.log('row2')
    row2[i].style.backgroundColor = `${currentPlayer}`
    gameState[14 + i] = currentPlayer
    row2[i].classList.add('full')
    checkWin()
    return
  } else if (!row1[i].classList.contains('full')) {
    console.log('row1')
    row1[i].style.backgroundColor = `${currentPlayer}`
    gameState[7 + i] = currentPlayer
    row1[i].classList.add('full')
    checkWin()
    return
  } else if (!row0[i].classList.contains('full')) {
    console.log('row0')
    row0[i].style.backgroundColor = `${currentPlayer}`
    gameState[i] = currentPlayer
    row0[i].classList.add('full')
    checkWin()
    return
  }
}

const removeLogic = () => {
  for (i = 0; i < topCells.length; i++) {
    topCells[i].removeEventListener('click', addLogic)
  }
}

const checkWin = () => {
  const reds = gameState
    .map((color, index) => {
      if (color === 'red') return index
    })
    .filter((val) => val !== undefined)

  const blues = gameState
    .map((color, index) => {
      if (color === 'blue') return index
    })
    .filter((val) => val !== undefined)

  const isMatch = (array, target) => target.every((val) => array.includes(val))

  console.log('reds: ', reds)
  console.log('blues: ', blues)

  for (let i = 0; i < winCombinations.length; i++) {
    if (isMatch(reds, winCombinations[i])) {
      console.log('Red Wins!')
      gameActive = false
    }

    if (isMatch(blues, winCombinations[i])) {
      console.log('Blue Wins!')
      gameActive = false
    }
  }
  if (reds.length === 21 && blues.length === 21) {
    displayCurrentPlayers.innerText = 'Tie Game!'
    gameActive === false
    removeLogic()
    return
  }

  if (gameActive) {
    switchPlayer()
  } else {
    displayCurrentPlayers.innerText = `${
      currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)
    } Wins!`
    removeLogic()
  }
}

const switchPlayer = () => {
  topCells.forEach((cell) => cell.classList.remove(currentPlayer))
  if (currentPlayer === 'red') {
    currentPlayer = 'blue'
  } else {
    currentPlayer = 'red'
  }
  displayCurrentPlayers.innerText = `${
    currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)
  }'s turn`
  topCells.forEach((cell) => cell.classList.add(currentPlayer))
}

resetButton.addEventListener('click', function () {
  gameState = new Array(42).fill('')
  cells.forEach((cell) => {
    if (cell.classList.value.includes('full')) {
      console.log(cell.classList.value)
      cell.classList.remove('full')
      cell.style.backgroundColor = 'none'
    }
  })
  for (i = 0; i < topCells.length; i++) {
    row5[i].style.backgroundColor = 'white'
    row4[i].style.backgroundColor = 'white'
    row3[i].style.backgroundColor = 'white'
    row2[i].style.backgroundColor = 'white'
    row1[i].style.backgroundColor = 'white'
    row0[i].style.backgroundColor = 'white'
  }
  console.log(gameState)
  logic()
})

startGame.addEventListener('click', () => {
  logic()
  startGame.style.display = 'none'
})
