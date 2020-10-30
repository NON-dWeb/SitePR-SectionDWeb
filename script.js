let bottomPos = -160;
let dir = -1;
var titre;

function hautBas() {
    if (bottomPos == -148) { dir = 1 }
    else if (bottomPos == -200) { dir = -1 }
    bottomPos += -2 * dir; 
    titre.style.bottom = `${bottomPos}px`; 
    requestAnimationFrame(hautBas);
}

function loaded() {
    titre = document.querySelector("#famas")
    titre.style.position = "absolute";

    requestAnimationFrame(hautBas);
}

