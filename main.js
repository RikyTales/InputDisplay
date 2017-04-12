var lShift = document.querySelector("#sh-l"),
    rShift = document.querySelector("#sh-r"),
    up = document.querySelector("#up"),
    left = document.querySelector("#left"),
    down = document.querySelector("#down"),
    right = document.querySelector("#right"),
    z = document.querySelector("#z"),
    r = document.querySelector("#r")

var keys = {
    "ShiftLeft" : lShift,
    "ShiftRight": rShift,
    "ArrowUp"   : up,
    "ArrowLeft" : left,
    "ArrowDown" : down,
    "ArrowRight": right,
    "KeyZ"      : z,
    "KeyR"      : r
}

document.addEventListener("keydown", (event) => {
    keyName = event.code
    for (value in keys) {
        if (keyName === value) {
            activateKey(keys[value])
        }
    }
}, false)

document.addEventListener("keyup", (event) => {
    keyName = event.code
    for (value in keys) {
        if (keyName === value) {
            deactivateKey(keys[value])
        }
    }
}, false)

function activateKey(key) {
    key.classList.add("active")
}
function deactivateKey(key) {
    key.classList.remove("active")
}