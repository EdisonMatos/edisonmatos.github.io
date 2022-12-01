const playerX = "Vez do jogador X";
const playerO = "Vez do jogador O";
const pointsX = document.getElementById('pointsX');
const pointsO = document.getElementById('pointsO');
const canvas = document.getElementById('canvas')
const playerLineSection = document.getElementById('playerLineSection')
const playerTurnLine = document.createElement('p')
const br1 = document.createElement('br')
const br2 = document.createElement('br')
const br3 = document.createElement('br')
const inputJoin = document.createElement('input')

const addGameButton = document.getElementById('addGameButton')
const addGameSection = document.getElementById('addGameSection')
const joinLobby = document.getElementById('joinLobby')
addGameButton.addEventListener('click', addNewGame)
joinLobby.addEventListener('click', join)

function addNewGame () {
    playerTurnLine.id = "playerTurnLine"
    playerLineSection.appendChild(playerTurnLine)

    const sq1 = document.createElement('button')
    const sq2 = document.createElement('button')
    const sq3 = document.createElement('button')
    const sq4 = document.createElement('button')
    const sq5 = document.createElement('button')
    const sq6 = document.createElement('button')
    const sq7 = document.createElement('button')
    const sq8 = document.createElement('button')
    const sq9 = document.createElement('button')

    sq1.innerHTML = '-'
    sq2.innerText = '-'
    sq3.innerText = '-'
    sq4.innerText = '-'
    sq5.innerText = '-'
    sq6.innerText = '-'
    sq7.innerText = '-'
    sq8.innerText = '-'
    sq9.innerText = '-'

    sq1.id = 'square1'
    sq2.id = 'square2'
    sq3.id = 'square3'
    sq4.id = 'square4'
    sq5.id = 'square5'
    sq6.id = 'square6'
    sq7.id = 'square7'
    sq8.id = 'square8'
    sq9.id = 'square9'

    sq1.classList = 'squaresBlank'
    sq2.classList = 'squaresBlank'
    sq3.classList = 'squaresBlank'
    sq4.classList = 'squaresBlank'
    sq5.classList = 'squaresBlank'
    sq6.classList = 'squaresBlank'
    sq7.classList = 'squaresBlank'
    sq8.classList = 'squaresBlank'
    sq9.classList = 'squaresBlank'

    canvas.appendChild(sq1)
    canvas.appendChild(sq2)
    canvas.appendChild(sq3)
    canvas.appendChild(br1)
    canvas.appendChild(sq4)
    canvas.appendChild(sq5)
    canvas.appendChild(sq6)
    canvas.appendChild(br2)
    canvas.appendChild(sq7)
    canvas.appendChild(sq8)
    canvas.appendChild(sq9)

    const pointsX = document.createElement('p')
    pointsX.id = pointsX
    pointsX.innerText = 'Pontos jogador X: 0'

    const pointsO = document.createElement('p')
    pointsO.id = pointsO
    pointsO.innerText = 'Pontos jogador O: 0'

    scr = document.getElementById('score')
    scr.appendChild(pointsX)
    scr.appendChild(pointsO)

    const drawSection = document.getElementById('drawSection')
    const drawParagraph = document.createElement('p')
    drawParagraph.innerText = 'Empates: 0'
    drawParagraph.id = 'draw'

    drawSection.appendChild(drawParagraph)

    const footerButtons = document.getElementById('footerButtons')

    const footerButton1 = document.createElement('button')
    const footerButton2 = document.createElement('button')

    footerButton1.classList = 'buttons'
    footerButton2.classList = 'buttons'

    footerButton1.id = 'restart'
    footerButton2.id = 'resetScore'

    footerButton1.innerText = 'Nova partida'
    footerButton2.innerText = 'Resetar pontos'

    const inviteButton = document.createElement('button')
    inviteButton.classList = 'buttons'
    inviteButton.id = 'inviteButton'
    inviteButton.innerText = 'Convidar amigo'



    const returnButton = document.createElement('button')
    returnButton.classList = 'buttons'
    returnButton.id = 'returnButton'
    returnButton.innerText = 'Voltar'

    footerButtons.appendChild(footerButton1)
    footerButtons.appendChild(footerButton2)
    footerButtons.appendChild(br3)
    footerButtons.appendChild(inviteButton)
    footerButtons.appendChild(returnButton)

    returnButton.addEventListener('click', returnToIndex)

    function returnToIndex () {
        playerLineSection.removeChild(playerTurnLine)
        canvas.removeChild(sq1)
        canvas.removeChild(sq2)
        canvas.removeChild(sq3)
        canvas.removeChild(br1)
        canvas.removeChild(sq4)
        canvas.removeChild(sq5)
        canvas.removeChild(sq6)
        canvas.removeChild(br2)
        canvas.removeChild(sq7)
        canvas.removeChild(sq8)
        canvas.removeChild(sq9)
        scr.removeChild(pointsX)
        scr.removeChild(pointsO)
        drawSection.removeChild(drawParagraph)
        footerButtons.removeChild(footerButton1)
        footerButtons.removeChild(footerButton2)
        footerButtons.removeChild(br3)
        footerButtons.removeChild(inviteButton)
        footerButtons.removeChild(returnButton)

        addGameSection.appendChild(addGameButton)
        addGameSection.appendChild(joinLobby)
    }

    let scorePlayerX = 0;
    let scorePlayerO = 0;
    let drawCount = 0;
    let turn = playerX;
    let draw = true;
    playerTurnLine.innerText = turn;

    footerButton1.addEventListener('click', newTurn);
    footerButton2.addEventListener('click', resetGame);

    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const square3 = document.getElementById('square3');
    const square4 = document.getElementById('square4');
    const square5 = document.getElementById('square5');
    const square6 = document.getElementById('square6');
    const square7 = document.getElementById('square7');
    const square8 = document.getElementById('square8');
    const square9 = document.getElementById('square9');

    function clickOnSquare () {
        if (this.innerText === "-") {
            if (turn === playerX) {
                this.innerText = "X";
                this.classList.replace('squaresBlank', 'squares');
                turn = playerO;
                playerTurnLine.innerText = turn;
                checkVictory();
        
            } else if (turn === playerO) {
                this.innerText = "O";
                this.classList.replace('squaresBlank', 'squares');
                turn = playerX;
                playerTurnLine.innerText = turn;
                checkVictory()
            }
        }
        }

    function addEvents () {
        square1.addEventListener('click', clickOnSquare);
        square2.addEventListener('click', clickOnSquare);
        square3.addEventListener('click', clickOnSquare);
        square4.addEventListener('click', clickOnSquare);
        square5.addEventListener('click', clickOnSquare);
        square6.addEventListener('click', clickOnSquare);
        square7.addEventListener('click', clickOnSquare);
        square8.addEventListener('click', clickOnSquare);
        square9.addEventListener('click', clickOnSquare);
    }
        
    addEvents()

    function addScorePoint() {
        if (turn !== playerX) {
            scorePlayerX++;
            pointsX.innerText = "Pontos jogador X: " + scorePlayerX;
            gameOver();
        } else {
            scorePlayerO++;
            pointsO.innerText = "Pontos jogador O: " + scorePlayerO;
            gameOver();
        }
    }

    function newTurn () {
        square1.innerText = "-";      
        square2.innerText = "-";
        square3.innerText = "-";
        square4.innerText = "-";
        square5.innerText = "-";
        square6.innerText = "-";
        square7.innerText = "-";
        square8.innerText = "-";
        square9.innerText = "-";

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

        addEvents();

        if (draw) {
            drawCount++;
            drawParagraph.innerText = "Empates: " + drawCount;
        } else {
            draw = true;
        }
    }

    function resetGame () {
        let option = confirm("Esta opção irá zerar o placar de pontos. Confirma?");
        if (option) {
            scorePlayerX = 0;
            pointsX.innerText = "Pontos jogador X: " + scorePlayerX;
            scorePlayerO = 0;
            pointsO.innerText = "Pontos jogador O: " + scorePlayerO;
            draw = false;
            drawCount = 0;
            drawParagraph.innerText = "Empates: " + drawCount;
            newTurn();
        } else {
            alert("Reset cancelado.");
        }
    }

    function gameOver() {
        square1.removeEventListener('click', clickOnSquare);
        square2.removeEventListener('click', clickOnSquare);
        square3.removeEventListener('click', clickOnSquare);
        square4.removeEventListener('click', clickOnSquare);
        square5.removeEventListener('click', clickOnSquare);
        square6.removeEventListener('click', clickOnSquare);
        square7.removeEventListener('click', clickOnSquare);
        square8.removeEventListener('click', clickOnSquare);
        square9.removeEventListener('click', clickOnSquare);
    }

    function checkVictory () {
        if (square1.innerText === "X" && square2.innerText === "X" && square3.innerText === "X"
        || square1.innerText === "O" && square2.innerText === "O" && square3.innerText === "O") {
            square1.classList.replace('squares', 'squaresVictory');
            square2.classList.replace('squares', 'squaresVictory');
            square3.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        } 
        else if (square4.innerText === "X" && square5.innerText === "X" && square6.innerText === "X"
        || square4.innerText === "O" && square5.innerText === "O" && square6.innerText === "O") {
            square4.classList.replace('squares', 'squaresVictory');
            square5.classList.replace('squares', 'squaresVictory');
            square6.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
        else if (square7.innerText === "X" && square8.innerText === "X" && square9.innerText === "X"
        || square7.innerText === "O" && square8.innerText === "O" && square9.innerText === "O") {
            square7.classList.replace('squares', 'squaresVictory');
            square8.classList.replace('squares', 'squaresVictory');
            square9.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
        else if (square1.innerText === "X" && square5.innerText === "X" && square9.innerText === "X"
        || square1.innerText === "O" && square5.innerText === "O" && square9.innerText === "O") {
            square1.classList.replace('squares', 'squaresVictory');
            square5.classList.replace('squares', 'squaresVictory');
            square9.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
        else if (square3.innerText === "X" && square5.innerText === "X" && square7.innerText === "X"
        || square3.innerText === "O" && square5.innerText === "O" && square7.innerText === "O") {
            square3.classList.replace('squares', 'squaresVictory');
            square5.classList.replace('squares', 'squaresVictory');
            square7.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
        else if (square1.innerText === "X" && square4.innerText === "X" && square7.innerText === "X"
        || square1.innerText === "O" && square4.innerText === "O" && square7.innerText === "O") {
            square1.classList.replace('squares', 'squaresVictory');
            square4.classList.replace('squares', 'squaresVictory');
            square7.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
        else if (square2.innerText === "X" && square5.innerText === "X" && square8.innerText === "X"
        || square2.innerText === "O" && square5.innerText === "O" && square8.innerText === "O") {
            square2.classList.replace('squares', 'squaresVictory');
            square5.classList.replace('squares', 'squaresVictory');
            square8.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
        else if (square3.innerText === "X" && square6.innerText === "X" && square9.innerText === "X"
        || square3.innerText === "O" && square6.innerText === "O" && square9.innerText === "O") {
            square3.classList.replace('squares', 'squaresVictory');
            square6.classList.replace('squares', 'squaresVictory');
            square9.classList.replace('squares', 'squaresVictory');
            addScorePoint();
            draw = false;

        }
    }

    addGameSection.removeChild(addGameButton)
    addGameSection.removeChild(joinLobby)
    addGameSection.removeChild(inputJoin)

}

function join () {
    inputJoin.type = 'text'
    inputJoin.placeholder = 'Cole aqui o código da sala'
    addGameSection.appendChild(inputJoin)
}