window.addEventListener("load", showSite);

function showSite() {
    document.querySelector("#cloud_container").classList.add("cloud_fly");
    document.querySelector("#cloud_container2").classList.add("cloud_fly2");
    document.querySelector("#cloud_container3").classList.add("cloud_fly2", "cloud_delay");

    document.querySelector("#show_2").classList.add("hide");
    document.querySelector("#show_3").classList.add("hide");
    document.querySelector("#show_4").classList.add("hide");
    document.querySelector("#show_5").classList.add("hide");
    document.querySelector("#show_6").classList.add("hide");
    document.querySelector("#show_7").classList.add("hide");

    document.querySelector("#hover_2").addEventListener("mouseenter", showImg2)
    document.querySelector("#hover_3").addEventListener("mouseenter", showImg3)
    document.querySelector("#hover_4").addEventListener("mouseenter", showImg4)
    document.querySelector("#hover_5").addEventListener("mouseenter", showImg5)
    document.querySelector("#hover_6").addEventListener("mouseenter", showImg6)
    document.querySelector("#hover_7").addEventListener("mouseenter", showImg7)

    document.querySelector("#show_1").classList.add("come_out");
}


function showImg2() {
    document.querySelector("#show_2").classList.remove("hide");
    document.querySelector("#show_2").classList.add("come_out_2");
}
function showImg3() {
    document.querySelector("#show_3").classList.remove("hide");
    document.querySelector("#show_3").classList.add("come_out");
}
function showImg4() {
    document.querySelector("#show_4").classList.remove("hide");
    document.querySelector("#show_4").classList.add("come_out_2");
}
function showImg5() {
    document.querySelector("#show_5").classList.remove("hide");
    document.querySelector("#show_5").classList.add("come_out");
}
function showImg6() {
    document.querySelector("#show_6").classList.remove("hide");
    document.querySelector("#show_6").classList.add("come_out_2");
}
function showImg7() {
    document.querySelector("#show_7").classList.remove("hide");
    document.querySelector("#show_7").classList.add("come_out");
}