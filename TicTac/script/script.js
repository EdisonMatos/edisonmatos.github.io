// Capturar o nome dos jogadores

const player1 = "Vez do jogador X"
const player2 = "Vez do jogador O"

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
    if (square1.innerText === "X" && square2.innerText === "X" && square3.innerText === "X"
    || square1.innerText === "O" && square2.innerText === "O" && square3.innerText === "O") {
        square1.classList.replace('squares', 'squaresVictory');
        square2.classList.replace('squares', 'squaresVictory');
        square3.classList.replace('squares', 'squaresVictory');
    } 
    else if (square4.innerText === "X" && square5.innerText === "X" && square6.innerText === "X"
    || square4.innerText === "O" && square5.innerText === "O" && square6.innerText === "O") {
        square4.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square6.classList.replace('squares', 'squaresVictory');
    }
    else if (square7.innerText === "X" && square8.innerText === "X" && square9.innerText === "X"
    || square7.innerText === "O" && square8.innerText === "O" && square9.innerText === "O") {
        square7.classList.replace('squares', 'squaresVictory');
        square8.classList.replace('squares', 'squaresVictory');
        square9.classList.replace('squares', 'squaresVictory');
    }
    else if (square1.innerText === "X" && square5.innerText === "X" && square9.innerText === "X"
    || square1.innerText === "O" && square5.innerText === "O" && square9.innerText === "O") {
        square1.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square9.classList.replace('squares', 'squaresVictory');
    }
    else if (square3.innerText === "X" && square5.innerText === "X" && square7.innerText === "X"
    || square3.innerText === "O" && square5.innerText === "O" && square7.innerText === "O") {
        square3.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square7.classList.replace('squares', 'squaresVictory');
    }
    else if (square1.innerText === "X" && square4.innerText === "X" && square7.innerText === "X"
    || square1.innerText === "O" && square4.innerText === "O" && square7.innerText === "O") {
        square1.classList.replace('squares', 'squaresVictory');
        square4.classList.replace('squares', 'squaresVictory');
        square7.classList.replace('squares', 'squaresVictory');
    }
    else if (square2.innerText === "X" && square5.innerText === "X" && square8.innerText === "X"
    || square2.innerText === "O" && square5.innerText === "O" && square8.innerText === "O") {
        square2.classList.replace('squares', 'squaresVictory');
        square5.classList.replace('squares', 'squaresVictory');
        square8.classList.replace('squares', 'squaresVictory');
    }
    else if (square3.innerText === "X" && square6.innerText === "X" && square9.innerText === "X"
    || square3.innerText === "O" && square6.innerText === "O" && square9.innerText === "O") {
        square3.classList.replace('squares', 'squaresVictory');
        square6.classList.replace('squares', 'squaresVictory');
        square9.classList.replace('squares', 'squaresVictory');
    }
}

function clickOnSquare () {
if (this.innerText === "-") {
    if (turn === player1) {
        this.innerText = "X"
        this.classList.replace('squaresBlank', 'squares')
        turn = player2
        playerTurnLine.innerText = turn
        checkVictory()


    } else if (turn === player2) {
        this.innerText = "O"
        this.classList.replace('squaresBlank', 'squares')
        turn = player1
        playerTurnLine.innerText = turn
        checkVictory()
    }
} else {
    alert("Já marcou")
}
}

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


}