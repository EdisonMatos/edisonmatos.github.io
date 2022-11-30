const playerX = "Vez do jogador X"
const playerO = "Vez do jogador O"
const playerTurnLine = document.getElementById('playerTurnLine')
const pointsX = document.getElementById('pointsX')
const pointsO = document.getElementById('pointsO')
const draws = document.getElementById('draw')
const botaoRecomecar = document.getElementById('restart')
const resetButton = document.getElementById('resetScore')

let scorePlayerX = 0
let scorePlayerO = 0
let drawCount = 0
let turn = playerX
let draw = true
playerTurnLine.innerText = turn

resetButton.addEventListener('click', resetGame)
botaoRecomecar.addEventListener('click', newTurn)

const square1 = document.getElementById('square1')
const square2 = document.getElementById('square2')
const square3 = document.getElementById('square3')
const square4 = document.getElementById('square4')
const square5 = document.getElementById('square5')
const square6 = document.getElementById('square6')
const square7 = document.getElementById('square7')
const square8 = document.getElementById('square8')
const square9 = document.getElementById('square9')

function clickOnSquare () {
    if (this.innerText === "-") {
        if (turn === playerX) {
            this.innerText = "X"
            this.classList.replace('squaresBlank', 'squares')
            turn = playerO
            playerTurnLine.innerText = turn
            checkVictory()
    
        } else if (turn === playerO) {
            this.innerText = "O"
            this.classList.replace('squaresBlank', 'squares')
            turn = playerX
            playerTurnLine.innerText = turn
            checkVictory()
        }
    } else {
    }
    }

    function addEvents () {
        square1.addEventListener('click', clickOnSquare)
        square2.addEventListener('click', clickOnSquare)
        square3.addEventListener('click', clickOnSquare)
        square4.addEventListener('click', clickOnSquare)
        square5.addEventListener('click', clickOnSquare)
        square6.addEventListener('click', clickOnSquare)
        square7.addEventListener('click', clickOnSquare)
        square8.addEventListener('click', clickOnSquare)
        square9.addEventListener('click', clickOnSquare)
    }
    
    addEvents()

function addScorePoint() {
    if (turn !== playerX) {
        scorePlayerX++
        pointsX.innerText = "Pontos jogador X: " + scorePlayerX
        gameOver()
    } else {
        scorePlayerO++
        pointsO.innerText = "Pontos jogador O: " + scorePlayerO
        gameOver()
    }
}

function newTurn () {
    square1.innerText = "-"      
    square2.innerText = "-"
    square3.innerText = "-"
    square4.innerText = "-"
    square5.innerText = "-"
    square6.innerText = "-"
    square7.innerText = "-"
    square8.innerText = "-"
    square9.innerText = "-"

    square1.classList.replace('squares', 'squaresBlank');
    square2.classList.replace('squares', 'squaresBlank');
    square3.classList.replace('squares', 'squaresBlank');
    square4.classList.replace('squares', 'squaresBlank');
    square5.classList.replace('squares', 'squaresBlank');
    square6.classList.replace('squares', 'squaresBlank');
    square7.classList.replace('squares', 'squaresBlank');
    square8.classList.replace('squares', 'squaresBlank');
    square9.classList.replace('squares', 'squaresBlank');  

    square1.classList.replace('squaresVictory', 'squaresBlank');
    square2.classList.replace('squaresVictory', 'squaresBlank');
    square3.classList.replace('squaresVictory', 'squaresBlank');
    square4.classList.replace('squaresVictory', 'squaresBlank');
    square5.classList.replace('squaresVictory', 'squaresBlank');
    square6.classList.replace('squaresVictory', 'squaresBlank');
    square7.classList.replace('squaresVictory', 'squaresBlank');
    square8.classList.replace('squaresVictory', 'squaresBlank');
    square9.classList.replace('squaresVictory', 'squaresBlank');

    addEvents()

    if (draw) {
        drawCount++
        draws.innerText = "Empates: " + drawCount
    } else {
        draw = true
    }
}

function resetGame () {
    let option = confirm("Tem certeza?")
    if (option) {
        scorePlayerX = 0
        pointsX.innerText = "Pontos jogador X: " + scorePlayerX
        scorePlayerO = 0
        pointsO.innerText = "Pontos jogador O: " + scorePlayerO
        draw = false
        drawCount = 0
        draws.innerText = "Empates: " + drawCount
        newTurn()
    } else {
        alert("Reset cancelado.")
    }
}

function gameOver() {
    square1.removeEventListener('click', clickOnSquare)
    square2.removeEventListener('click', clickOnSquare)
    square3.removeEventListener('click', clickOnSquare)
    square4.removeEventListener('click', clickOnSquare)
    square5.removeEventListener('click', clickOnSquare)
    square6.removeEventListener('click', clickOnSquare)
    square7.removeEventListener('click', clickOnSquare)
    square8.removeEventListener('click', clickOnSquare)
    square9.removeEventListener('click', clickOnSquare)
}

function checkVictory () {
    if (square1.innerText === "X" && square2.innerText === "X" && square3.innerText === "X"
    || square1.innerText === "O" && square2.innerText === "O" && square3.innerText === "O") {
        square1.classList.replace('squares', 'squaresVictory');
        square2.classList.replace('squares', 'squaresVictory');
        square3.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    } 
    else if (square4.innerText === "X" && square5.innerText === "X" && square6.innerText === "X"
    || square4.innerText === "O" && square5.innerText === "O" && square6.innerText === "O") {
        square4.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square6.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
    else if (square7.innerText === "X" && square8.innerText === "X" && square9.innerText === "X"
    || square7.innerText === "O" && square8.innerText === "O" && square9.innerText === "O") {
        square7.classList.replace('squares', 'squaresVictory');
        square8.classList.replace('squares', 'squaresVictory');
        square9.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
    else if (square1.innerText === "X" && square5.innerText === "X" && square9.innerText === "X"
    || square1.innerText === "O" && square5.innerText === "O" && square9.innerText === "O") {
        square1.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square9.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
    else if (square3.innerText === "X" && square5.innerText === "X" && square7.innerText === "X"
    || square3.innerText === "O" && square5.innerText === "O" && square7.innerText === "O") {
        square3.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square7.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
    else if (square1.innerText === "X" && square4.innerText === "X" && square7.innerText === "X"
    || square1.innerText === "O" && square4.innerText === "O" && square7.innerText === "O") {
        square1.classList.replace('squares', 'squaresVictory');
        square4.classList.replace('squares', 'squaresVictory');
        square7.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
    else if (square2.innerText === "X" && square5.innerText === "X" && square8.innerText === "X"
    || square2.innerText === "O" && square5.innerText === "O" && square8.innerText === "O") {
        square2.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square8.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
    else if (square3.innerText === "X" && square6.innerText === "X" && square9.innerText === "X"
    || square3.innerText === "O" && square6.innerText === "O" && square9.innerText === "O") {
        square3.classList.replace('squares', 'squaresVictory');
        square6.classList.replace('squares', 'squaresVictory');
        square9.classList.replace('squares', 'squaresVictory');
        addScorePoint()
        draw = false

    }
}