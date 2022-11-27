// Capturar o nome dos jogadores

const player1 = "Jogador 1"
const player2 = "Jogador 2"

// Criar turno e alternar o que mostra na tela o da vez

let turn = player1
const playerTurnLine = document.getElementById('playerTurnLine')
playerTurnLine.innerText = turn

const square1 = document.getElementById('square1')
const square2 = document.getElementById('square2')
const square3 = document.getElementById('square3')
const square4 = document.getElementById('square4')
const square5 = document.getElementById('square5')
const square6 = document.getElementById('square6')
const square7 = document.getElementById('square7')
const square8 = document.getElementById('square8')
const square9 = document.getElementById('square9')

square1.addEventListener('click', clickOnSquare)
square2.addEventListener('click', clickOnSquare)
square3.addEventListener('click', clickOnSquare)
square4.addEventListener('click', clickOnSquare)
square5.addEventListener('click', clickOnSquare)
square6.addEventListener('click', clickOnSquare)
square7.addEventListener('click', clickOnSquare)
square8.addEventListener('click', clickOnSquare)
square9.addEventListener('click', clickOnSquare)

function checkVictory () {
    if (square1.innerText === "X" && square2.innerText === "X" && square3.innerText === "X") {
        alert("Ganhou")
    }
    if (square4.innerText === "X" && square5.innerText === "X" && square6.innerText === "X") {
        alert("Ganhou")
    }
    if (square7.innerText === "X" && square8.innerText === "X" && square9.innerText === "X") {
        alert("Ganhou")
    }
    if (square1.innerText === "X" && square5.innerText === "X" && square9.innerText === "X") {
        alert("Ganhou")
    }
    if (square3.innerText === "X" && square5.innerText === "X" && square7.innerText === "X") {
        alert("Ganhou")
    }
}

function clickOnSquare () {
if (this.innerText === "-") {
    if (turn === player1) {
        this.innerText = 'X'
        turn = player2
        playerTurnLine.innerText = turn
        checkVictory()


    } else if (turn === player2) {
        this.innerText = 'O'
        turn = player1
        playerTurnLine.innerText = turn
    }
} else {
    alert("Já marcou")
}
}

// Botao recomecar

const botaoRecomecar = document.getElementById('recomecar')
botaoRecomecar.addEventListener('click', limparCampos)

function limparCampos () {
    square1.innerText = "-"
    square2.innerText = "-"
    square3.innerText = "-"
    square4.innerText = "-"
    square5.innerText = "-"
    square6.innerText = "-"
    square7.innerText = "-"
    square8.innerText = "-"
    square9.innerText = "-"
}