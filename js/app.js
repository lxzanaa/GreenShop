let headerContainerLink = document.querySelectorAll(".header__container-link")

headerContainerLink.forEach(function (item, index) {
    item.addEventListener('click', function () {
        headerContainerLink.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let sectionSidebarItem = document.querySelectorAll(".section__sidebar-item")

sectionSidebarItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sectionSidebarItem.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let sectionSidebarItem2 = document.querySelectorAll(".section__sidebar-item2")

sectionSidebarItem2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sectionSidebarItem2.forEach(function (element) {
            element.classList.remove("green-active")
        })
        item.classList.add("green-active");
    })
})


let sectionAsideItem = document.querySelectorAll(".section__aside-item")

sectionAsideItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sectionAsideItem.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let sectionAsideBtns = document.querySelectorAll(".section__aside-btns")

sectionAsideBtns.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sectionAsideBtns.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})



let product = document.querySelectorAll('.shop__section-product')
let mainImg = document.querySelector('.shop__section-main-image')

product.forEach(function (item, index) {
    item.addEventListener('click', function () {
        mainImg.src = item.src
    })
})


let shopSectionProduct = document.querySelectorAll(".shop__section-product")

shopSectionProduct.forEach(function (item, index) {
    item.addEventListener('click', function () {
        shopSectionProduct.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})
let shopSectionSizeItem = document.querySelectorAll(".shop__section-size-item")

shopSectionSizeItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        shopSectionSizeItem.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})


let shopSectionButtonMinus2 = document.querySelectorAll(".shop__section-button-minus2");
let shopSectionButtonPlus2 = document.querySelectorAll(".shop__section-button-plus2");
let shopSectionNumber2 = document.querySelectorAll(".shop__section-number2");

// Minus tugmasi uchun hodisa qo'shish
shopSectionButtonMinus2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        // shopSectionNumber2[index] orqali hozirgi elementni tanlab olamiz
        let currentValue = parseInt(shopSectionNumber2[index].textContent);
        if (currentValue > 1) {
            shopSectionNumber2[index].textContent = currentValue - 1;
        } else {
            shopSectionNumber2[index].textContent = 1;
        }
    });
});

// Plus tugmasi uchun hodisa qo'shish
shopSectionButtonPlus2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        // shopSectionNumber2[index] orqali hozirgi elementni tanlab olamiz
        let currentValue = parseInt(shopSectionNumber2[index].textContent);
        if (currentValue < 20) {
            shopSectionNumber2[index].textContent = currentValue + 1;
        } else {
            shopSectionNumber2[index].textContent = 20;
        }
    });
});




let sectionAboutProductItem = document.querySelectorAll(".section__about-product-item");

sectionAboutProductItem.forEach(function (item) {
    item.addEventListener('click', function (event) {
        sectionAboutProductItem.forEach(function (element) {
            element.classList.remove("active");
        });
        item.classList.add("active");
    });
});


let shop__cartCategoryCart = document.querySelectorAll(".shop__cart-category-cart");
let shop__cartDelete = document.querySelectorAll(".shop__cart-delete");

shop__cartDelete.forEach(function (item, index) {
    item.addEventListener('click', function (event) {
        item.style.display = "none";
        if (shop__cartCategoryCart[index]) {
            shop__cartCategoryCart[index].remove();
        } else { }
    });
});


function updatePrice(quantity) {
    const pricePerUnit = 119.00;
    countPrice.textContent = `$${quantity * pricePerUnit}`;
}



let checkbox__formPaymentChoose = document.querySelectorAll(".checkbox__form-payment-choose")

checkbox__formPaymentChoose.forEach(function (item, index) {
    item.addEventListener('click', function () {
        checkbox__formPaymentChoose.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let checkbox__formPaymentMethodCart = document.querySelectorAll(".checkbox__form-PaymentMethod-cart")

checkbox__formPaymentMethodCart.forEach(function (item, index) {
    item.addEventListener('click', function () {
        checkbox__formPaymentMethodCart.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let checkbox__formPaymentMethodBtn = document.querySelector(".checkbox__form-PaymentMethod-btn")
let checkout__popup = document.querySelector(".checkout__popup")

checkbox__formPaymentMethodBtn.addEventListener('click', function () {
    checkout__popup.classList.toggle("active")

})






