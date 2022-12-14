const playerNameInput = document.getElementById("playerNameInput");
const addButton = document.getElementById("addButton");
const area = document.getElementById("area");

addButton.addEventListener("click",addNewPlayer);

function addNewPlayer() {
  if (playerNameInput.value === "") {
    alert("Preencha o nome.");
  } else {
    const newPlayer = { name: playerNameInput.value, score: 0 };

    const line = document.createElement("hr");
    line.id = line;
    area.appendChild(line)

    const newPlayerParagraph = document.createElement("p");
    newPlayerParagraph.innerText =
    newPlayer.name + ` : ${newPlayer.score}`;
    area.appendChild(newPlayerParagraph);

    const playerAddScoreBtn = document.createElement("button");
    playerAddScoreBtn.innerText = "+";
    playerAddScoreBtn.id = "playerAddScoreBtn";

    const playerRemoveScoreBtn = document.createElement("button");
    playerRemoveScoreBtn.innerText = "-";
    playerRemoveScoreBtn.id = "playerRemoveScoreBtn";

    area.appendChild(playerAddScoreBtn);
    area.appendChild(playerRemoveScoreBtn);

    playerAddScoreBtn.addEventListener("click", increaseOnePoint);
    playerRemoveScoreBtn.addEventListener("click", decreaseOnePoint);

    playerNameInput.value = "";

    function increaseOnePoint() {
      newPlayer.score++;
      newPlayerParagraph.innerText =
      newPlayer.name + ` : ${newPlayer.score}`;
    }

    function decreaseOnePoint() {
      newPlayer.score--;
      newPlayerParagraph.innerText =
      newPlayer.name + ` : ${newPlayer.score}`;
    }
  }
}
