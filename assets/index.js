// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

const buttonEl = document.getElementById("button");
const lampadaSpenta = document.getElementById("lampada1");
const lampadaAccesa = new Image();

buttonEl.addEventListener("click", () => {
  lampadaAccesa.src = "./img/yellow_lamp.png";
  lampadaSpenta.style.backgroundImage = `url(${lampadaAccesa.src})`;
});
