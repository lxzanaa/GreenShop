var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

let countMinus = document.querySelector(".count-minus");
let countPlus = document.querySelector(".count-plus");
let countNumber = document.querySelector(".count-number");
let countPrice = document.querySelector('.count__price');

countMinus.addEventListener('click', function () {
    let currentValue = parseInt(countNumber.textContent);

    if (currentValue > 1) {
        countNumber.textContent = currentValue - 1;
        updatePrice(currentValue - 1);
    } else {
        countNumber.textContent = 1;
        updatePrice(1);
    }
});

countPlus.addEventListener('click', function () {
    let currentValue = parseInt(countNumber.textContent);

    if (currentValue < 20) {
        countNumber.textContent = currentValue + 1;
        updatePrice(currentValue + 1);
    } else {
        countNumber.textContent = 20;
        updatePrice(20);
    }
});

function updatePrice(index, quantity) {
    const pricePerUnit = 119.00;
    countPrice[index].textContent = `$${(quantity * pricePerUnit).toFixed(2)}`;
}

let shopSectionButtonMinus2 = document.querySelectorAll(".shop__section-button-minusCount");
let shopSectionButtonPlus2 = document.querySelectorAll(".shop__section-button-plusCount");
let shopSectionNumber2 = document.querySelectorAll(".shop__section-number");
let shop__cartTotalPrice = document.querySelectorAll(".shop__section-about-flower-title-price");

shopSectionButtonMinus2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        let currentValue = parseInt(shopSectionNumber2[index].textContent);
        if (currentValue > 1) {
            shopSectionNumber2[index].textContent = currentValue - 1;
            updateTotalPrice(index, currentValue - 1); 
        } else {
            shopSectionNumber2[index].textContent = 1;
            updateTotalPrice(index, 1); 
        }
    });
});

shopSectionButtonPlus2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        let currentValue = parseInt(shopSectionNumber2[index].textContent);
        if (currentValue < 20) {
            shopSectionNumber2[index].textContent = currentValue + 1;
            updateTotalPrice(index, currentValue + 1); 
        } else {
            shopSectionNumber2[index].textContent = 20;
            updateTotalPrice(index, 20); 
        }
    });
});

 
function updateTotalPrice(index, quantity) {
    const pricePerUnit = 119.00;
    shop__cartTotalPrice[index].textContent = `$${(quantity * pricePerUnit).toFixed(2)}`;
}

let shop__sectionCounterBtnAdd = document.querySelector(".shop__section-counter-btn-add");
let cart__number = document.querySelector("#cart__number");

shop__sectionCounterBtnAdd.addEventListener('click', function() {
    let currentValue = parseInt(cart__number.textContent);

    if (!isNaN(currentValue)) {
        cart__number.textContent = currentValue + 1;
    } else {
        cart__number.textContent = 1;
    }
});
