import { turnLampOn, turnLampOff, breakLamp } from "./actions.js";

document.getElementById("turnLampOn").addEventListener("click", turnLampOn);
document.getElementById("turnLampOff").addEventListener("click", turnLampOff);
document.getElementById("breakLamp").addEventListener("click", breakLamp);
