export { addNewGame }
import { joinLobbyButton, joinLobbyInput, enterRoomCodeButton } from "./joinRoom.js";


const addGameButton = document.getElementById("addGameButton");
const addGameSection = document.getElementById("addGameSection");
const gameAfterRender = document.getElementById("gameAfterRender");
addGameButton.addEventListener("click", function () {addNewGame();});


function addNewGame(receivedRoomId) {

    let roomId = receivedRoomId
      ? receivedRoomId.toString()
      : Math.floor(Math.random() * 100000).toString();
    addGameSection.children.item(3)
      ? addGameSection.removeChild(joinLobbyInput)
      : null;
    const socket = io("https://api-ttt.denjidev.com", {
      path: "/api/rooms",
      transports: ["websocket"],
    });
    socket.on("connect", function () {
      var id = Math.floor(Math.random() * 10);
      console.log("Connected");
      socket.emit("meeting", { roomId, newGame: receivedRoomId ? false : true });
  
      socket.emit("identity", id, (response) =>
        console.log("Identity:", response)
      );
    });
    socket.on("meeting", function (data) {
      console.log("you have joined the meeting: ", data);
    });
    socket.on("leaveRoom", function (data) {
      console.log("you have leaved the meeting: ", data);
    });
    socket.on("exception", function (data) {
      console.log("event", data);
    });
    socket.on("disconnect", function () {
      console.log("Disconnected");
    });

    const canvas = document.getElementById("canvas");
    const playerLineSection = document.getElementById("playerLineSection");
    const playerTurnLine = document.createElement("p");
    const playerX = "Vez do jogador: X";
    const playerO = "Vez do jogador: O";
  
    let scorePlayerX = 0;
    let scorePlayerO = 0;
    let drawCount = 0;
    let turn = playerX;
    let draw = true;
    playerTurnLine.innerText = turn;
  
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");

    const sq1 = document.createElement("button");
    const sq2 = document.createElement("button");
    const sq3 = document.createElement("button");
    const sq4 = document.createElement("button");
    const sq5 = document.createElement("button");
    const sq6 = document.createElement("button");
    const sq7 = document.createElement("button");
    const sq8 = document.createElement("button");
    const sq9 = document.createElement("button");

    const sqList = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9];

    sqList.forEach((item) => item.innerText = "-");
    sqList.forEach((item) => item.classList = "squaresBlank");

    for (let i = 0; i < sqList.length; i++) {
      sqList[i].id = `square${(i + 1)}`
    };
  
    playerLineSection.appendChild(playerTurnLine);
    canvas.append(sq1, sq2, sq3, br1, sq4, sq5, sq6, br2, sq7, sq8, sq9);
  
    const square1 = document.getElementById("square1");
    const square2 = document.getElementById("square2");
    const square3 = document.getElementById("square3");
    const square4 = document.getElementById("square4");
    const square5 = document.getElementById("square5");
    const square6 = document.getElementById("square6");
    const square7 = document.getElementById("square7");
    const square8 = document.getElementById("square8");
    const square9 = document.getElementById("square9");

    const squareList = [square1, square2, square3, square4, square5, square6, square7, square8, square9];

    const pointsX = document.createElement("p");
    const pointsO = document.createElement("p");
    const drawParagraph = document.createElement("p");
    const backToIndexButton = document.createElement("button");
    const resetScoreButton = document.createElement("button");
    const inviteButton = document.createElement("button");
    const returnButton = document.createElement("button");
  
    const drawSection = document.getElementById("drawSection");
    const footerButtons = document.getElementById("footerButtons");
    const scoreSection = document.getElementById("scoreSection");
  
    playerTurnLine.id = "playerTurnLine";
    drawParagraph.id = "draw";
    backToIndexButton.id = "restart";
    resetScoreButton.id = "resetScore";
    inviteButton.id = "inviteButton";
    returnButton.id = "returnButton";
    pointsX.id = pointsX;
    pointsO.id = pointsO;
  
    pointsX.innerText = "Pontos jogador X: 0";
    pointsO.innerText = "Pontos jogador O: 0";
    backToIndexButton.innerText = "Nova partida";
    resetScoreButton.innerText = "Resetar pontos";
    drawParagraph.innerText = "Empates: 0";
    inviteButton.innerText = "Convidar amigo";
    returnButton.innerText = "Voltar";
  
    backToIndexButton.classList = "buttons";
    resetScoreButton.classList = "buttons";
    inviteButton.classList = "buttons";
    returnButton.classList = "buttons";
  
    scoreSection.append(pointsX, pointsO);
    drawSection.appendChild(drawParagraph);
    footerButtons.append(backToIndexButton, resetScoreButton, br3, inviteButton, returnButton);
    
    returnButton.addEventListener("click", returnToIndex);
    backToIndexButton.addEventListener("click", newTurn);
    resetScoreButton.addEventListener("click", resetGame);
    inviteButton.addEventListener("click", () => {copyRoomId(roomId);});
  
    function addScorePoint() {
      if (turn !== playerX) {
        scorePlayerX++;
        pointsX.innerText = `Pontos jogador X: ${scorePlayerX}`;
        gameOver();
      } else {
        scorePlayerO++;
        pointsO.innerText = `Pontos jogador O: ${scorePlayerO}`;
        gameOver();
      }
    }
  
    function copyRoomId(text) {
      navigator.clipboard.writeText(text).then(
        () => {alert("Numero da sala copiado para área de transferência.");
        },
        (err) => {alert("Nao foi possivel copiar numero da sala: ", err);
        }
      );
    }
  
    function returnToIndex() {
      socket.emit("leaveRoom", { roomId });

      sqList.forEach((item) => canvas.removeChild(item));

      canvas.removeChild(br1);
      canvas.removeChild(br2);
      playerLineSection.removeChild(playerTurnLine);
      scoreSection.removeChild(pointsX);
      scoreSection.removeChild(pointsO);
      drawSection.removeChild(drawParagraph);
      footerButtons.removeChild(backToIndexButton);
      footerButtons.removeChild(resetScoreButton);
      footerButtons.removeChild(inviteButton);
      footerButtons.removeChild(returnButton);
      footerButtons.removeChild(br3);
  
      addGameSection.append(addGameButton, joinLobbyButton);
      mainContent.appendChild(addGameSection)
    }
  
    socket.on("show", function (data) {
      renderInSquare(data.square);
    });
    socket.on("showCached", function (data) {
      renderCachedSquares(data);
    });
    socket.on("newTurn", function () {
      newTurn(false);
    });
  
    socket.on("resetPoints", function () {
      resetGame(false);
    });
  
    function clickOnSquare() {
      if (this.innerText === "-") {
        if (turn === playerX) {
          socket.emit("click", { square: this.id, roomId, value: "X" });
          this.innerText = "X";
          this.classList.replace("squaresBlank", "squares");
          turn = playerO;
          playerTurnLine.innerText = turn;
          checkVictory();
          blockSquare();
        } else if (turn === playerO) {
          socket.emit("click", { square: this.id, roomId, value: "O" });
          this.innerText = "O";
          this.classList.replace("squaresBlank", "squares");
          turn = playerX;
          playerTurnLine.innerText = turn;
          checkVictory();
          blockSquare();
        }
      }
    }
    
    function renderInSquare(squareNumber) {
      const square = document.getElementById(squareNumber);
      if (turn === playerX) {
        square.innerText = "X";
        square.classList.replace("squaresBlank", "squares");
        turn = playerO;
        playerTurnLine.innerText = turn;
        checkVictory();
        addEvents();
      } else if (turn === playerO) {
        square.innerText = "O";
        square.classList.replace("squaresBlank", "squares");
        turn = playerX;
        playerTurnLine.innerText = turn;
        checkVictory();
        addEvents();
      }
    }
  
    function renderCachedSquares(squaresData) {
      squaresData.forEach((squareData) => {
        turn = squareData.value == "X" ? playerX : playerO;
        renderInSquare(squareData.position);
      });
    }
  
    // function blockSquare() {
    //   for (let i=0; i < squareList.length; i++) {
    //     squareList[i].removeEventListener("click", clickOnSquare);
    //   };
    // }
  
    function addEvents() {
      squareList.forEach((item) => item.addEventListener("click", clickOnSquare));
    }
  
    addEvents();
  
    function newTurn(isEmitter) {

      squareList.forEach((item) => item.innerText = "-");
      squareList.forEach((item) => item.classList.replace("squares", "squaresBlank"));
      squareList.forEach((item) => item.classList.replace("squaresVictory", "squaresBlank"));
  
      addEvents();
  
      if (draw) {
        drawCount++;
        drawParagraph.innerText = "Empates: " + drawCount;
      } else {
        draw = true;
      }
      turn = playerX;
      playerTurnLine.innerText = turn;
      isEmitter ? socket.emit("newTurn", { roomId }) : null;
    }
  
    function resetGame(isEmitter) {
      let option = isEmitter
        ? confirm("Esta opção irá zerar o placar de pontos. Confirma?")
        : true;
      if (option) {
        scorePlayerX = 0;
        pointsX.innerText = "Pontos jogador X: " + scorePlayerX;
        scorePlayerO = 0;
        pointsO.innerText = "Pontos jogador O: " + scorePlayerO;
        draw = false;
        drawCount = 0;
        drawParagraph.innerText = "Empates: " + drawCount;
        isEmitter ? socket.emit("resetPoints", { roomId }) : null;
        turn = playerX;
        playerTurnLine.innerText = turn;
        newTurn();
      } else {
        alert("Reset cancelado.");
      }
    }
  
    function gameOver() {
      squareList.forEach((item) => item.removeEventListener("click", clickOnSquare));
    }
  
    function checkVictory() { 
      if (
        (square1.innerText === "X" && square2.innerText === "X" && square3.innerText === "X") ||
        (square1.innerText === "O" && square2.innerText === "O" && square3.innerText === "O")
      ) {
        square1.classList.replace("squares", "squaresVictory");
        square2.classList.replace("squares", "squaresVictory");
        square3.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square4.innerText === "X" && square5.innerText === "X" && square6.innerText === "X") ||
        (square4.innerText === "O" && square5.innerText === "O" && square6.innerText === "O")
      ) {
        square4.classList.replace("squares", "squaresVictory");
        square5.classList.replace("squares", "squaresVictory");
        square6.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square7.innerText === "X" && square8.innerText === "X" && square9.innerText === "X") ||
        (square7.innerText === "O" && square8.innerText === "O" && square9.innerText === "O")
      ) {
        square7.classList.replace("squares", "squaresVictory");
        square8.classList.replace("squares", "squaresVictory");
        square9.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square1.innerText === "X" && square5.innerText === "X" && square9.innerText === "X") ||
        (square1.innerText === "O" && square5.innerText === "O" && square9.innerText === "O")
      ) {
        square1.classList.replace("squares", "squaresVictory");
        square5.classList.replace("squares", "squaresVictory");
        square9.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square3.innerText === "X" &&  square5.innerText === "X" && square7.innerText === "X") ||
        (square3.innerText === "O" &&  square5.innerText === "O" && square7.innerText === "O")
      ) {
        square3.classList.replace("squares", "squaresVictory");
        square5.classList.replace("squares", "squaresVictory");
        square7.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square1.innerText === "X" && square4.innerText === "X" && square7.innerText === "X") ||
        (square1.innerText === "O" && square4.innerText === "O" && square7.innerText === "O")
      ) {
        square1.classList.replace("squares", "squaresVictory");
        square4.classList.replace("squares", "squaresVictory");
        square7.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square2.innerText === "X" && square5.innerText === "X" && square8.innerText === "X") ||
        (square2.innerText === "O" && square5.innerText === "O" && square8.innerText === "O")
      ) {
        square2.classList.replace("squares", "squaresVictory");
        square5.classList.replace("squares", "squaresVictory");
        square8.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      } else if (
        (square3.innerText === "X" && square6.innerText === "X" && square9.innerText === "X") ||
        (square3.innerText === "O" && square6.innerText === "O" && square9.innerText === "O")
      ) {
        square3.classList.replace("squares", "squaresVictory");
        square6.classList.replace("squares", "squaresVictory");
        square9.classList.replace("squares", "squaresVictory");
        addScorePoint();
        draw = false;
      }
    }
  
    if (addGameSection.children.length <= 2) {
      addGameSection.removeChild(addGameButton);
      addGameSection.removeChild(joinLobbyButton);
    } else {
      addGameSection.removeChild(addGameButton);
      addGameSection.removeChild(joinLobbyButton);
      addGameSection.removeChild(enterRoomCodeButton);
    }

    console.log(addGameSection.children.length)
  }