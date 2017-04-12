var lShift = document.querySelector("#sh-l"),
    rShift = document.querySelector("#sh-r"),
    up = document.querySelector("#up"),
    left = document.querySelector("#left"),
    down = document.querySelector("#down"),
    right = document.querySelector("#right"),
    z = document.querySelector("#z"),
    r = document.querySelector("#r")

document.addEventListener("keydown", (event) => {
    keyName = event.code
    switch (keyName) {
        case "ShiftLeft":
            activateKey(lShift)
            break;
        case "ShiftRight":
            activateKey(rShift)
            break;
        case "ArrowUp":
            activateKey(up)
            break;
        case "ArrowLeft":
            activateKey(left)
            break;
        case "ArrowDown":
            activateKey(down)
            break;
        case "ArrowRight":
            activateKey(right)
            break;
        case "KeyZ":
            activateKey(z)
            break;
        case "KeyR":
            activateKey(r)
            break;
        default:
            break;
    }
}, false)

document.addEventListener("keyup", (event) => {
    keyName = event.code
    switch (keyName) {
        case "ShiftLeft":
            deactivateKey(lShift)
            break;
        case "ShiftRight":
            deactivateKey(rShift)
            break;
        case "ArrowUp":
            deactivateKey(up)
            break;
        case "ArrowLeft":
            deactivateKey(left)
            break;
        case "ArrowDown":
            deactivateKey(down)
            break;
        case "ArrowRight":
            deactivateKey(right)
            break;
        case "KeyZ":
            deactivateKey(z)
            break;
        case "KeyR":
            deactivateKey(r)
            break;
        default:
            break;
    }
}, false)

function activateKey(key) {
    key.classList.add("active")
}
function deactivateKey(key) {
    key.classList.remove("active")
}