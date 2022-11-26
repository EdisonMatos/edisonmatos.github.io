const mainInput = document.getElementById("mainInput")
const resultInput = document.getElementById("resultInput")

const buttonEqual = document.getElementById("buttonEqual")
const buttonClear = document.getElementById("buttonClear")

const buttonSum = document.getElementById("buttonSum")
const buttonSlash = document.getElementById("buttonSlash")
const buttonMinus = document.getElementById("buttonMinus")
const buttonX = document.getElementById("buttonX")

const button0 = document.getElementById("button0")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")

buttonEqual.addEventListener('click', calculate)
buttonClear.addEventListener('click', clearInputs)

// const buttonParen1 = document.getElementById("buttonParantesis1")
// const buttonParen2 = document.getElementById("buttonParantesis2")

const buttonsList = []
buttonsList.push(
  button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, 
  buttonSum, buttonSlash, buttonMinus, buttonX,
  )

for (i = 0; i < buttonsList.length; i++) {
  buttonsList[i].addEventListener('click', sendValueToMainInput)
}

function sendValueToMainInput() {
  const sendValue = this.innerText
  mainInput.value += sendValue
}

function calculate () {
  const result = eval(mainInput.value)
  resultInput.value = result
  mainInput.value = ""
}

function clearInputs () {
  mainInput.value = ""
  resultInput.value = ""
}