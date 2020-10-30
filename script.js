let bottomPos = -150;
let dir = -1;
var titre;

function hautBas() {
    if (bottomPos == -148) { dir = 1 }
    else if (bottomPos == -200) { dir = -1 }
    bottomPos += -1 * dir; 
    titre.style.bottom = `${bottomPos}px`; 
    requestAnimationFrame(hautBas);
}

function loaded() {
    titre = document.querySelector("#famas")
    titre.style.position = "absolute";
    titre.style.left= "50%";
    titre.style.transform = "translate(-50%, 0%)";

    requestAnimationFrame(hautBas);
}

