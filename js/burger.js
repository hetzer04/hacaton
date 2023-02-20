const nav = document.getElementById("nav");
const btn = document.getElementById("button_burger");

var state = false;

btn.addEventListener("pointerdown", function(e) {
    if (state == false){
        nav.style.height = "150px";
        state = true;
    } else {
        nav.style.height = "0px";
        state = false;
    }
})