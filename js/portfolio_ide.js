window.addEventListener("load", showSite);

function showSite() {
    document.querySelector("#show_1").classList.add("hide");
    document.querySelector("#show_2").classList.add("hide");
    document.querySelector("#show_3").classList.add("hide");
    document.querySelector("#show_4").classList.add("hide");
    document.querySelector("#show_5").classList.add("hide");
    document.querySelector("#show_6").classList.add("hide");
    document.querySelector("#show_7").classList.add("hide");

    document.querySelector("#hover_1").addEventListener("mouseenter", showImg1)
    document.querySelector("#left_2").addEventListener("mouseenter", showImg2)
    document.querySelector("#left_3").addEventListener("mouseenter", showImg3)
    document.querySelector("#left_4").addEventListener("mouseenter", showImg4)

    document.querySelector("#right_1").addEventListener("mouseenter", showImg5)
    document.querySelector("#right_2").addEventListener("mouseenter", showImg6)
    document.querySelector("#right_3").addEventListener("mouseenter", showImg7)
}

function showImg1() {
    console.log("showImg")
    document.querySelector("#show_1").classList.remove("hide");
    document.querySelector("#show_1").classList.add("come_out");
}
function showImg2() {
    console.log("showImg")
    document.querySelector("#show_3").classList.remove("hide");
    document.querySelector("#show_3").classList.add("come_out");
}
function showImg3() {
    console.log("showImg")
    document.querySelector("#show_5").classList.remove("hide");
    document.querySelector("#show_5").classList.add("come_out");
}
function showImg4() {
    console.log("showImg")
    document.querySelector("#show_7").classList.remove("hide");
    document.querySelector("#show_7").classList.add("come_out");
}
function showImg5() {
    console.log("showImg")
    document.querySelector("#show_2").classList.remove("hide");
    document.querySelector("#show_2").classList.add("come_out_2");
}
function showImg6() {
    console.log("showImg")
    document.querySelector("#show_4").classList.remove("hide");
    document.querySelector("#show_4").classList.add("come_out_2");
}
function showImg7() {
    console.log("showImg")
    document.querySelector("#show_6").classList.remove("hide");
    document.querySelector("#show_6").classList.add("come_out_2");
}
