const size__buttons = document.getElementsByClassName("sale__size__button");

for (let i = 0; i < size__buttons.length; i++) {
  size__buttons[i].addEventListener('click', function () {
    for (let j = 0; j < size__buttons.length; j++) {
      size__buttons[j].classList.remove('active__maat');
    }
    this.classList.add('active__maat');
  });
}


const jordan1__buttons = document.getElementsByClassName("sale__button");
const imageToChange = document.getElementById("js--jordan1__image");
const textToChange = document.getElementById("js--jordan1__text");
const oldPriceToChange = document.getElementById("js--sale__price__old");
const priceToChange = document.getElementById("js--sale__price");

const buttonPrices = {
  sale__button1: "€450.00,-",
  sale__button2: "€160.00,-",
  sale__button3: "€140.00,-",
  sale__button4: "€160.00,-",
  sale__button5: "€200.00,-"
};

const buttonOldPrices = {
  sale__button1: "€500.00,-",
  sale__button2: "€190.00,-",
  sale__button3: "€180.00,-",
  sale__button4: "€180.00,-",
  sale__button5: "€220.00,-"
};

for (let i = 0; i < jordan1__buttons.length; i++) {
  jordan1__buttons[i].addEventListener('click', function () {
    for (let j = 0; j < jordan1__buttons.length; j++) {
      jordan1__buttons[j].classList.remove('active__choice');
    }
    this.classList.add('active__choice')
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
let amount = 0;

shoppingcart__button.onclick = function() {
  amount++;
  shoppingcart__amount.innerText = amount;
};