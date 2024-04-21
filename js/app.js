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

let btnMinus = document.querySelector(".shop__section-button-minus")
let btnPlus = document.querySelector(".shop__section-button-plus")
let spanInput = document.querySelector(".shop__section-number")


btnMinus.addEventListener('click', function () {
    if (spanInput.textContent == 1) {
        spanInput.textContent = 1
    } else {
        spanInput.textContent = spanInput.textContent - 1
    }
})

btnPlus.addEventListener('click', function () {
    if (spanInput.textContent == 20) {
        spanInput.textContent = 20
    } else {
        spanInput.textContent = 1 * spanInput.textContent + 1
    }
})

let sectionAboutProductItem = document.querySelectorAll(".section__about-product-item")

sectionAboutProductItem.forEach(function (item, index) {
    item.addEventListener('click', function () {
        sectionAboutProductItem.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})
