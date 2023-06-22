//json
fetch('/js/products.json')
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
const drop = document.getElementsByClassName("prijs__filter__option");
const right = document.getElementById("right");
const down = document.getElementById("down");
const prijs1 = document.getElementById("js--prijs1");
const prijs2 = document.getElementById("js--prijs2");
const prijs3 = document.getElementById("js--prijs3");
const all = document.getElementById("js--all");
const filterItems = document.getElementsByClassName("item__product");
let display = false;

function prijsFilterDrop() {
    for (let i = 0; i < drop.length; i++) {
        if (display == false) {
            drop[i].style.display = "block";
            right.style.display = "none";
            down.style.display = "block";
        }
        if (display == true) {
            drop[i].style.display = "none";
            right.style.display = "block";
            down.style.display = "none";
        }
    }
    if (display == false) {
        display = true;
        return
    }
    if (display == true) {
        display = false;
        return
    }
}

prijs1.onclick = function () {
    for (let i = 0; i < filterItems.length; i++) {
        if (filterItems[i].dataset.prijs == "prijs1") {
            filterItems[i].style.display = "flex"
        }
        else {
            filterItems[i].style.display = "none"
        }
    }
}

prijs2.onclick = function () {
    for (let i = 0; i < filterItems.length; i++) {
        if (filterItems[i].dataset.prijs == "prijs2") {
            filterItems[i].style.display = "flex"
        }
        else {
            filterItems[i].style.display = "none"
        }
    }
}

prijs3.onclick = function () {
    for (let i = 0; i < filterItems.length; i++) {
        if (filterItems[i].dataset.prijs == "prijs3") {
            filterItems[i].style.display = "flex"
        }
        else {
            filterItems[i].style.display = "none"
        }
    }
}

all.onclick = function () {
    for (let i = 0; i < filterItems.length; i++) {
        filterItems[i].style.display = "flex"
    }
}