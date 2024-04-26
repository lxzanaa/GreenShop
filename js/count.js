const productContainers = document.querySelectorAll('.product___cart');

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
        countPrice.textContent = `$${(quantity * pricePerUnit).toFixed(2)}`;
    }
});