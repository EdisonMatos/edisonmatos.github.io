export { joinLobbyButton, joinLobbyInput, enterRoomCodeButton }
import { addNewGame } from "./createRoom.js"

const joinLobbyButton = document.getElementById("joinLobbyButton");
const joinLobbyInput = document.createElement("input");
const enterRoomCodeButton = document.createElement("button");
joinLobbyButton.addEventListener("click", join);
joinLobbyInput.type = "submit";

function join() {
  joinLobbyInput.type = "text";
  joinLobbyInput.placeholder = "Digite o código da sala";

  enterRoomCodeButton.innerText = "Entrar";
  enterRoomCodeButton.id = "enterRoomCodeButton";

  addGameSection.append(joinLobbyInput, enterRoomCodeButton);
}

enterRoomCodeButton.addEventListener("click", function () {
    if (joinLobbyInput.value ==="") {
        alert("Digite o código da sala.")
    } else {
    addNewGame(joinLobbyInput.value);
}
});

joinLobbyInput.addEventListener("keyup", function (e) {
  if (e.code === 13) {
    addNewGame(joinLobbyInput.value);
  }
});
joinLobbyInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addNewGame(joinLobbyInput.value);
  }
});