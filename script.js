let topPos = 0;
let dir = -1;
var titre;

function hautBas() {
    if (topPos == 300) { dir = 1 }
    else if (topPos == -50) { dir = -1 }
    topPos += -2 * dir; 
    titre.style.top = `${topPos}px`; 
    requestAnimationFrame(hautBas);
}

function loaded() {
    titre = document.querySelector("#home-big-title")
    //titre.style.position = "absolute";

    requestAnimationFrame(hautBas);
}
