const input = document.getElementById('input')
const convertBtn = document.getElementById('convertBtn')

function converter() {

  let typedValue = document.getElementById('input').value

  if(typedValue === ""){
    alert("Digite o valor para converter") 
  } else {

    const resultDiv = document.getElementById('resultDiv')
    let operation = typedValue * 100
    let showResult = document.createElement('p')
    showResult.innerText = operation

    resultDiv.appendChild(showResult)
    document.getElementById('input').value = ""
  }
}

