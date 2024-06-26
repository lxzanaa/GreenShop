
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



let header__containerLink = document.querySelectorAll(".header__container-link")

header__containerLink.forEach(function (item, index) {
    item.addEventListener('click', function () {
        header__containerLink.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})


let section__sidebarItem = document.querySelectorAll(".section__sidebar-item")

section__sidebarItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        section__sidebarItem.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let section__sidebarItem2 = document.querySelectorAll(".section__sidebar-item2")

section__sidebarItem2.forEach(function (item, index) {
    item.addEventListener('click', function () {
        section__sidebarItem2.forEach(function (element) {
            element.classList.remove("green-active")
        })
        item.classList.add("green-active");
    })
})

let section__asideItem = document.querySelectorAll(".section__aside-item")

section__asideItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        section__asideItem.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})

let section__asideBtns = document.querySelectorAll(".section__aside-btns")

section__asideBtns.forEach(function (item, index) {
    item.addEventListener('click', function () {
        section__asideBtns.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})


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





