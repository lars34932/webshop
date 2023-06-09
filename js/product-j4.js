const size__buttons = document.getElementsByClassName("sale__size__button");

for (let i = 0; i < size__buttons.length; i++) {
  size__buttons[i].addEventListener('click', function () {
    for (let j = 0; j < size__buttons.length; j++) {
      size__buttons[j].classList.remove('active__maat');
    }
    this.classList.add('active__maat');
  });
}


const jordan4__buttons = document.getElementsByClassName("sale__button");
const imageToChange = document.getElementById("js--jordan4__image");
const textToChange = document.getElementById("js--jordan4__text");
const oldPriceToChange = document.getElementById("js--sale__price__old");
const priceToChange = document.getElementById("js--sale__price");

const buttonPrices = {
  sale__button1: "€500.00,-",
  sale__button2: "€250.00,-",
  sale__button3: "€375.00,-",
  sale__button4: "€250.00,-"
};

const buttonOldPrices = {
  sale__button1: "€550.00,-",
  sale__button2: "€300.00,-",
  sale__button3: "€450.00,-",
  sale__button4: "€300.00,-",
};

for (let i = 0; i < jordan4__buttons.length; i++) {
  jordan4__buttons[i].addEventListener('click', function () {
    for (let j = 0; j < jordan4__buttons.length; j++) {
      jordan4__buttons[j].classList.remove('active__choice');
    }
    this.classList.add('active__choice');
    const imgSrc = this.getElementsByTagName('img')[0].src;
    imageToChange.src = imgSrc;
    const buttonText = this.textContent;
    textToChange.textContent = buttonText;
    const buttonId = this.getAttribute('id');
    oldPriceToChange.textContent = buttonOldPrices[buttonId];
    priceToChange.textContent = buttonPrices[buttonId];
  })
};

const shoppingcart__amount = document.getElementById("js--shoppingcart__amount");
const shoppingcart__button = document.getElementById("js--shopping__button");
const shopping__text = document.getElementById("js--shopping__text");
const shopping__icon = document.getElementById("js--shopping__icon");
const shopping__check = document.getElementById("js--shopping__check");
let amount = 0;

shoppingcart__button.onclick = function () {
  shopping__icon.style.display = "none";
  shopping__text.style.display = "none";
  shopping__check.style.display = "block";
  shoppingcart__button.style.background = "#090";
  shoppingcart__button.style.boxShadow = "inset 0 -2px 0 0 #016701";
  setTimeout(function () {
    shopping__icon.style.display = "block";
    shopping__text.style.display = "block";
    shopping__check.style.display = "none";
    shoppingcart__button.style.background = "#00b900";
    shoppingcart__button.style.boxShadow = "inset 0 -2px 0 0 #090";
  }, 1000);
  amount++;
  shoppingcart__amount.innerText = amount;
};

