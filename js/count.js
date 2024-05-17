const productContainers = document.querySelectorAll('.product___cart');
let shop__cartTotalPriceElement = document.querySelector(".shop__cart-total-price");

productContainers.forEach(product => {
    const countMinus = product.querySelector('.product___count-minus');
    const countPlus = product.querySelector('.product___count-plus');
    const countNumber = product.querySelector('.product___count-number');
    const countPrice = product.querySelector('.product___cart-price');

    countMinus.addEventListener('click', function () {
        let currentValue = parseInt(countNumber.textContent);

        if (currentValue > 1) {
            countNumber.textContent = currentValue - 1;
            updatePrice(currentValue - 1);
            updateTotalPrice(-1); 
        } else {
            countNumber.textContent = 1;
            updatePrice(1);
            updateTotalPrice(-1); 
        }
    });

    countPlus.addEventListener('click', function () {
        let currentValue = parseInt(countNumber.textContent);

        if (currentValue < 20) {
            countNumber.textContent = currentValue + 1;
            updatePrice(currentValue + 1);
            updateTotalPrice(1); 
        } else {
            countNumber.textContent = 20;
            updatePrice(20);
            updateTotalPrice(1); 
        }
    });

    function updatePrice(quantity) {
        const pricePerUnit = 119.00;
        countPrice.textContent = `$${(quantity * pricePerUnit).toFixed(2)}`;
    }

    function updateTotalPrice(change) {
        let currentTotalPrice = parseFloat(shop__cartTotalPriceElement.textContent.replace('$', ''));
        let newTotalPrice = currentTotalPrice + (change * 119.00);
        shop__cartTotalPriceElement.textContent = `$${newTotalPrice.toFixed(2)}`;
    }
});



let shopSectionButtonMinus2 = document.querySelectorAll(".shop__section-button-minus2");
let shopSectionButtonPlus2 = document.querySelectorAll(".shop__section-button-plus2");
let shopSectionNumber2 = document.querySelectorAll(".shop__section-number2");
let shop__cartTotalPrice = document.querySelectorAll(".shop__cart-total-price");

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

