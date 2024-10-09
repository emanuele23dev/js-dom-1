// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

const lampEl = document.getElementById("img1");
const buttonEl = document.getElementById("myButton");

buttonEl.style.borderRadius = '2rem'
buttonEl.style.padding = "10 20px"
buttonEl.style.backgroundColor = '#006eff'
buttonEl.style.color = "white";
buttonEl.style.border = "none";


buttonEl.addEventListener("click", function () {

  const is_on = lampEl.getAttribute("src").includes("yellow");
  console.log(is_on);
  

  if (is_on) {
    lampEl.setAttribute("src", "./assets/img/white_lamp.png");
    buttonEl.textContent = "Accendi";
  }
  else {
    lampEl.src = "./assets/img/yellow_lamp.png";
    buttonEl.textContent = "Spegni";
  }
});