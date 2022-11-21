let lampStatus = "off"

function turnLampOn() {
  if (lampStatus === "on") {
    alert("A lâmpada já está ligada.")
  }
  if (lampStatus === "broken") {
    alert("A lâmpada está quebrada, não pode mais ser manuseiada.")
    let option = confirm("Deseja consertar a lâmpada?")
    if (option) {
    document.location.reload(true)
    }
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
    let option = confirm("Deseja consertar a lâmpada?")
    if (option) {
    document.location.reload(true)
    }
  } else {
  const lampOff = document.getElementById('lamp')
  lampOff.src = './imgs/lampOff.png'
  lampStatus = "off"
  }
}
  
function breakLamp() {
  if (lampStatus === "broken") {
    alert("A lâmpada já está quebrada.")
    let option = confirm("Deseja consertar a lâmpada?")
    if (option) {
    document.location.reload(true)
    }
  } 
  const lampBroken = document.getElementById('lamp')
  lampBroken.src = './imgs/lampBroken.png'
  lampStatus = "broken"
}
