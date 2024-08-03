let previousViewportWidth = window.innerWidth;
window.addEventListener("resize",()=>{
  if(previousViewportWidth !== window.innerWidth){
    previousViewportWidth = window.innerWidth;
    document.querySelector(".trigger-message").style.display = "block";
  }
});