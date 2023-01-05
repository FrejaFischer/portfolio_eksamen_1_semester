window.addEventListener("load", showSite);

function showSite() {
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
}