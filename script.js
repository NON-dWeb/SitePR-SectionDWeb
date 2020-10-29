const titre=document.querySelector("header")
header.style.position = "absolute";
let topPos = 0;
let dir =-1;

  function hautBas () {if (topPos == 300) {dir = 1 }
  else if (topPOS == -50) {dir = -1 }
     topPos += -2 * dir; header.style.top= `${topPos}px`;  requestAnimationFrame(hautBas);}
  requestAnimationFrame(hautBas);