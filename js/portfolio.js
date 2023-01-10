window.addEventListener("load", appearSite);

function appearSite() {
  document.querySelector("#cloud_container").classList.add("hide");
  document.querySelector("#show_1").classList.add("hide");
  document.querySelector("#show_2").classList.add("hide");
  document.querySelector("#show_3").classList.add("hide");
  document.querySelector("#show_4").classList.add("hide");
  document.querySelector("#show_5").classList.add("hide");
  document.querySelector("#show_6").classList.add("hide");
  document.querySelector("#show_7").classList.add("hide");
  document.querySelector(".light_box_ekstra").classList.add("hide");
  document.querySelector(".dark_box_ekstra").classList.add("hide");
  document.querySelector("#portfolio_main").classList.add("appear");
  document.querySelector("#portfolio_main").addEventListener("animationend", showSite);
}

function showSite() {
  document.querySelector("#cloud_container").classList.remove("hide");
  document.querySelector("#show_1").classList.remove("hide");
  document.querySelector("#show_2").classList.remove("hide");
  document.querySelector("#show_3").classList.remove("hide");
  document.querySelector("#show_4").classList.remove("hide");
  document.querySelector("#show_5").classList.remove("hide");
  document.querySelector("#show_6").classList.remove("hide");
  document.querySelector("#show_7").classList.remove("hide");

  document.querySelector("#cloud_container").classList.add("cloud_fly");
  document.querySelector("#cloud_container2").classList.add("cloud_fly2");
  document.querySelector("#cloud_container3").classList.add("cloud_fly2", "cloud_delay");

  document.querySelector("#show_1").classList.add("come_out");
  document.querySelector("#show_2").classList.add("come_out_2");
  document.querySelector("#show_3").classList.add("come_out");
  document.querySelector("#show_4").classList.add("come_out_2");
  document.querySelector("#show_5").classList.add("come_out");
  document.querySelector("#show_6").classList.add("come_out_2");
  document.querySelector("#show_7").classList.add("come_out");

  document.querySelector("#arrow_container").classList.add("arrow");
  document.querySelector("#light_box_7").addEventListener("mouseenter", showCv);
}

function showCv() {
  console.log("showCv");
  document.querySelector(".light_box_ekstra").classList.remove("hide");
  document.querySelector(".dark_box_ekstra").classList.remove("hide");

  document.querySelector("#arrow_container").classList.add("hide");

  document.querySelector(".light_box_ekstra").classList.add("come_out_7");
  document.querySelector(".dark_box_ekstra").classList.add("come_out_7");

}
