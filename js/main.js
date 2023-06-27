//review slider
let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].onclick = function () {
        if (modus === "one-two-three") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "flex";
            reviews[4].style.display = "flex";
            reviews[5].style.display = "flex";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "flex";
            reviews[1].style.display = "flex";
            reviews[2].style.display = "flex";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display
             = "none";
            modus = "one-two-three";
        }
    }
}