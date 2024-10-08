// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

const lampadaSpenta = document.getElementById("img1");
const buttonEl = document.getElementById("myButton");

buttonEl.style.borderRadius = '2rem'
buttonEl.style.padding = "10 20px"
buttonEl.style.backgroundColor = '#006eff'
buttonEl.style.color = "white";
buttonEl.style.border = "none";



buttonEl.addEventListener("click", function () {
  buttonEl.textContent = "Spegni";
  lampadaSpenta.src = "./assets/img/yellow_lamp.png";
});
