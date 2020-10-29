const titre=document.querySelector("title")
let i= 0; 

  function hautBas () {console.log(i); i++;  requestAnimationFrame(hautBas);}
  requestAnimationFrame(hautBas);