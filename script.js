const titre=document.querySelector("home big-title")
titre.style.position = "absolute";
let topPos = 0;
let dir =-1;

  function hautBas () {if (topPos == 300) {dir = 1 }
  else if (topPOS == -50) {dir = -1 }
     topPos += -2 * dir; titre.style.top= `${topPos}px`;  requestAnimationFrame(hautBas);}
  requestAnimationFrame(hautBas);