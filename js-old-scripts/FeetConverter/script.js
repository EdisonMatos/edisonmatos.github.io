const input = document.getElementById("input");
const convertButton = document.getElementById("convertBtn");
const resultInput = document.getElementById("resultInput");
const option1 = document.getElementById("option11");
const option2 = document.getElementById("option2");

convertButton.addEventListener("click", convert);

function convert() {
  if (input.value === "") {
    alert("Preencha um número para converter.");
    resultInput.value = "";
  } else {
    if (option1) {
      alert("vrau");
    }
    const operation = input.value * 100;
    resultInput.value = operation;
    input.value = "";
  }
}
