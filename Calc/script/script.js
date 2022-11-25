const mainInput = document.getElementById("mainInput")
const resultInput = document.getElementById("resultInput")
const buttonEqual = document.getElementById("buttonEqual")
const buttonClear = document.getElementById("buttonClear")

const buttonSum = document.getElementById("buttonSum")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const buttonParen1 = document.getElementById("buttonParantesis1")
const buttonParen2 = document.getElementById("buttonParantesis2")

const buttonsList = []
buttonsList.push(button1, button2, buttonSum, buttonParen1, buttonParen2)

for (i = 0; i < buttonsList.length; i++) {
  buttonsList[i].addEventListener('click', sendValueToMainInput)
}

buttonEqual.addEventListener('click', calculate)
buttonClear.addEventListener('click', clearInputs)

function sendValueToMainInput() {
  const sendValue = this.innerText
  mainInput.value += sendValue
}

function calculate () {
  const result = eval(mainInput.value)
  resultInput.value = result
}

function clearInputs () {
  mainInput.value = ""
  resultInput.value = ""
}