window.addEventListener("load", showSite);

function showSite() {
  console.log("sidenVises");
//   document.querySelector("#button_sprite").classList.add(".pulse");
//   document.querySelector("#hej").classList.add(".pulse");

document.querySelector("#index_grid").classList.add("appear");
document.querySelector("#index_grid").addEventListener("animationend", buttonPulse);
}

function buttonPulse(){
    console.log("buttonPulse");
    document.querySelector("#button_sprite").classList.add("pulse");
}