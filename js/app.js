window.onload = function () {
    slideMin();
    slideMax();
}

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const priceInputMin = document.querySelector(".min-input");
const priceInputMax = document.querySelector(".max-input");
const minTooltip = document.querySelector(".min-tooltip");
const maxTooltip = document.querySelector(".max-tooltip");
const minGap = 0;
const range = document.querySelector(".slider-track");

const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(maxVal.max);

function slideMin() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        minVal.value = parseInt(maxVal.value) - minGap;
    }
    minTooltip.innerHTML = "$" + minVal.value;
    priceInputMin.value = minVal.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if (gap <= minGap) {
        maxVal.value = parseInt(minVal.value) + minGap;
    }
    maxTooltip.innerHTML = "$" + maxVal.value;
    priceInputMax.value = maxVal.value;
    setArea();
}

function setArea() {
    let minValue = parseInt(minVal.value);
    let maxValue = parseInt(maxVal.value);
    let rangeWidth = sliderMaxValue - sliderMinValue;
    let leftPercent = ((minValue - sliderMinValue) / rangeWidth) * 100;
    let rightPercent = ((sliderMaxValue - maxValue) / rangeWidth) * 100;

    range.style.left = leftPercent + "%";
    range.style.right = rightPercent + "%";
    minTooltip.style.left = leftPercent + "%";
    maxTooltip.style.right = rightPercent + "%";
}

function setMinInput() {
    let minPrice = parseInt(priceInputMin.value);
    if (minPrice < sliderMinValue) {
        priceInputMin.value = sliderMinValue;
    }
    minVal.value = priceInputMin.value;
    slideMin();
}

function setMaxInput() {
    let maxPrice = parseInt(priceInputMax.value);
    if (maxPrice > sliderMaxValue) {
        priceInputMax.value = sliderMaxValue;
    }
    maxVal.value = priceInputMax.value;
    slideMax();
}

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

let btnMinus = document.querySelector(".shop__section-button-minus2");
let btnPlus = document.querySelector(".shop__section-button-plus2");
let spanInput = document.querySelector(".shop__section-number");

btnMinus.addEventListener('click', function () {
    let currentValue = parseInt(spanInput.textContent);

    if (currentValue > 1) {
        spanInput.textContent = currentValue - 1;
    } else {
        spanInput.textContent = 1;
    }
});

btnPlus.addEventListener('click', function () {
    let currentValue = parseInt(spanInput.textContent);

    if (currentValue < 20) {
        spanInput.textContent = currentValue + 1;
    } else {
        spanInput.textContent = 20;
    }
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

let checkbox = document.querySelector(".checkbox");

checkbox.addEventListener('click', function () {
    checkbox.classList.toggle("check")
})


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




// document.addEventListener("DOMContentLoaded", function() {
//     const priceRange = document.getElementById("price-range");
//     const priceOutput = document.getElementById("price-output");
//     const products = document.querySelectorAll(".product");

//     // Initial price range output
//     // priceOutput.textContent = "$" + priceRange.value;

//     // Update price range output on input change
//     priceRange.addEventListener("input", function() {
//         priceOutput.textContent = "$" + this.value;
//         filterProductsByPrice(this.value);
//     });

//     // Function to filter products based on price
//     function filterProductsByPrice(maxPrice) {
//         products.forEach(function(product) {
//             const productPrice = parseInt(product.dataset.price);
//             if (productPrice <= maxPrice) {
//                 product.style.display = "block";
//             } else {
//                 product.style.display = "none";
//             }
//         });
//     }
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });