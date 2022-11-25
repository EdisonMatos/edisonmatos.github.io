const input = document.getElementById("input");
const convertBtn = document.getElementById("convertBtn");
let showResult = "";
convertBtn.addEventListener("click", converter);
const resultDiv = document.getElementById("resultDiv");

function converter() {
  let typedValue = document.getElementById("input").value;

  if (typedValue === "") {
    alert("Digite o valor para converter");
  } else {
    let operation = typedValue * 100;
    showResult = document.createElement("p");
    showResult.innerText = operation;

    resultDiv.appendChild(showResult);
    document.getElementById("input").value = "";
    convertBtn.removeEventListener("click", converter);
    convertBtn.addEventListener("click", segundoPasso);
  }
}

function segundoPasso() {
  console.log(showResult.innerText);
  resultDiv.removeChild(showResult);

  let typedValue = document.getElementById("input").value;

  if (typedValue === "") {
    alert("Digite o valor para converter");
  } else {
    let operation = typedValue * 100;
    showResult = document.createElement("p");
    showResult.innerText = operation;

    resultDiv.appendChild(showResult);
    document.getElementById("input").value = "";
  }
}

// teste2
