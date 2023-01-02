window.addEventListener("load", showSite);

function showSite() {
    document.querySelector("#show_1").classList.add("hide");
    document.querySelector("#show_2").classList.add("hide");
    document.querySelector("#show_3").classList.add("hide");
    document.querySelector("#show_4").classList.add("hide");
    document.querySelector("#show_5").classList.add("hide");
    document.querySelector("#show_6").classList.add("hide");
    document.querySelector("#show_7").classList.add("hide");

    document.querySelector(".left_2_1").addEventListener("mouseenter", showImg)
}

function showImg() {
    console.log("showImg")
    document.querySelector("#show_1").classList.remove("hide");
    document.querySelector("#show_1").classList.add("come_out");
}
