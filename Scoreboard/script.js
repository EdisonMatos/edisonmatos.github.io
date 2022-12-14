const playerNameInput = document.getElementById("playerNameInput");
const addButton = document.getElementById("addButton");
const area = document.getElementById("area");

addButton.addEventListener("click",addNewPlayer);

function addNewPlayer() {
  if (playerNameInput.value === "") {
    alert("Preencha o nome do jogador.");
  } else {
    const newPlayer = { name: playerNameInput.value, score: 0 };
    console.log(newPlayer);

    const newPlayerParagraph = document.createElement("p");
    newPlayerParagraph.innerText =
      newPlayer.name + ` - Pontos: ${newPlayer.score}.`;
    area.appendChild(newPlayerParagraph);

    const playerAddScoreBtn = document.createElement("button");
    playerAddScoreBtn.innerText = "+";

    const playerRemoveScoreBtn = document.createElement("button");
    playerRemoveScoreBtn.innerText = "-";

    area.appendChild(playerAddScoreBtn);
    area.appendChild(playerRemoveScoreBtn);

    playerAddScoreBtn.addEventListener("click", increaseOnePoint);
    playerRemoveScoreBtn.addEventListener("click", decreaseOnePoint);

    playerNameInput.value = "";

    function increaseOnePoint() {
      newPlayer.score++;
      newPlayerParagraph.innerText =
      newPlayer.name + ` - Pontos: ${newPlayer.score}.`;
    }

    function decreaseOnePoint() {
      newPlayer.score--;
      newPlayerParagraph.innerText =
      newPlayer.name + ` - Pontos: ${newPlayer.score}.`;
    }
  }
}
