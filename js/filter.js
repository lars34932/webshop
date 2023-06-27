//json
fetch('js/products.json')
    .then(response => response.json())
    .then(data => {
        const filterTitle = document.getElementsByClassName("item__text");
        const filterImage = document.getElementsByClassName("item__image");
        const filterOldPrice = document.getElementsByClassName("item__price__old");
        const filterPrice = document.getElementsByClassName("item__price__new");
        const filterReview = document.getElementsByClassName("item__review__number");
        for (let i = 0; i <= 13; i++) {
            const filter = "product" + i;
            filterTitle[i].innerText = data[filter][0].title;
            filterImage[i].src = data[filter][0].img;
            filterOldPrice[i].innerText = data[filter][0].oldPrice;
            filterPrice[i].innerText = data[filter][0].price;
            filterReview[i].innerText = data[filter][0].review;
        }
    })

//filter
const filterItems = document.getElementsByClassName("item__product");
const checkbox = document.getElementsByClassName("checkbox__div");
//merk
const nike = document.getElementById("nike");
const jordan = document.getElementById("jordans");
const sb = document.getElementById("sb");
const j1 = document.getElementById("1");
const j4 = document.getElementById("4");
const red = document.getElementById("rood");
const yellow = document.getElementById("geel");
const beige = document.getElementById("beige");
const brown = document.getElementById("bruin");
const orange = document.getElementById("oranje");
const green = document.getElementById("groen");
const blue = document.getElementById("blauw");
const black = document.getElementById("zwart");

function filterCheckMerk() {
    if(nike.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.merk == "nike") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.merk == "nike") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(jordan.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.merk == "jordan") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.merk == "jordan") {
                filterItems[i].style.display = "flex";
            }
        }
    }
}

function filterCheckSoort() {
    if(sb.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.soort == "sb") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.soort == "sb") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(j1.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.soort == "jordan1") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.soort == "jordan1") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(j4.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.soort == "jordan4") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.soort == "jordan4") {
                filterItems[i].style.display = "flex";
            }
        }
    }
}

function filterCheckColor() {
    if(red.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "red") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "red") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(blue.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "blue") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "blue") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(green.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "green") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "green") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(orange.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "orange") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "orange") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(yellow.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "yellow") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "yellow") {
                filterItems[i].style.display = "flex";
            }
        }
    }
    
    if(beige.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "beige") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "beige") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(brown.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "brown") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "brown") {
                filterItems[i].style.display = "flex";
            }
        }
    }

    if(black.checked == false) {
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "black") {
                filterItems[i].style.display = "none";
            }
        }
    }
    else{
        for (let i = 0; i <= 13; i++) {
            if(filterItems[i].dataset.color == "black") {
                filterItems[i].style.display = "flex";
            }
        }
    }
}