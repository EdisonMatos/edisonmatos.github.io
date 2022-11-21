let lampStatus = "off"

function newLamp () {
  let option = confirm("Deseja consertar a lâmpada?")
  if (option) {
    const newLamp = document.getElementById('lamp')
    newLamp.src = './imgs/lampOff.png'
    lampStatus = "off"
  }
}

function turnLampOn() {
  if (lampStatus === "on") {
    alert("A lâmpada já está ligada.")
  }
  if (lampStatus === "broken") {
    alert("A lâmpada está quebrada, não pode mais ser manuseiada.")
    newLamp()
  } else {
  const lampOn = document.getElementById('lamp')
  lampOn.src = './imgs/lampOn.png'
  lampStatus = "on"
  }
}
  
function turnLampOff() {
  if (lampStatus === "off") {
    alert("A lâmpada já está desligada.")
  }
  if (lampStatus === "broken") {
    alert("A lâmpada está quebrada, não pode mais ser manuseiada.")
    newLamp()
  } else {
  const lampOff = document.getElementById('lamp')
  lampOff.src = './imgs/lampOff.png'
  lampStatus = "off"
  }
}
  
function breakLamp() {
  if (lampStatus === "broken") {
    alert("A lâmpada já está quebrada.")
    newLamp()
  } else {
  const lampBroken = document.getElementById('lamp')
  lampBroken.src = './imgs/lampBroken.png'
  lampStatus = "broken"
  }
}
