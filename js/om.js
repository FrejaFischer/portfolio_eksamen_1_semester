window.addEventListener("load", appearSite);


function appearSite() {
    document.querySelector(".light_box_om_2").classList.add("hide");
    document.querySelector(".dark_box_om").classList.add("hide");

    document.querySelector("#om_grid").classList.add("appear");
    document.querySelector("#om_grid").addEventListener("animationend", showSite);
  }

function showSite(){
    console.log("sidenVises");
    document.querySelector(".dark_box_om").classList.remove("hide");
    document.querySelector("#arrow_container").classList.add("arrow");
    document.querySelector(".light_box_om").addEventListener("mouseenter", showCv)

    document.querySelector(".dark_box_om").classList.add("come_out_3");
}

  function showCv(){
    console.log("showCv")
    document.querySelector("#arrow_container").classList.add("hide");
    document.querySelector(".light_box_om_2").classList.remove("hide");
    document.querySelector(".light_box_om_2").classList.add("come_out_om");
    }
