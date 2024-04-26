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

function updatePrice(quantity) {
    const pricePerUnit = 119.00;
    countPrice.textContent = `$${quantity * pricePerUnit}`;
}



let countMinusshop = document.querySelector(".shop__section-button-minusCount");
let countPlusshop = document.querySelector(".shop__section-button-plusCount");
let countNumbershop = document.querySelector(".shop__section-number");
let countPriceshop = document.querySelector('.shop__section-about-flower-title-price');

countMinusshop.addEventListener('click', function () {
    let currentValue = parseInt(countNumbershop.textContent);

    if (currentValue > 1) {
        countNumbershop.textContent = currentValue - 1;
        updatePrice(currentValue - 1);
    } else {
        countNumbershop.textContent = 1;
        updatePrice(1);
    }
});

countPlusshop.addEventListener('click', function () {
    let currentValue = parseInt(countNumbershop.textContent);

    if (currentValue < 20) {
        countNumbershop.textContent = currentValue + 1;
        updatePrice(currentValue + 1);
    } else {
        countNumbershop.textContent = 20;
        updatePrice(20);
    }
});

function updatePrice(quantity) {
    // Assuming price is $10 per item
    const pricePerItem = 10;
    countPriceshop.textContent = `$${quantity * pricePerItem}`;
}