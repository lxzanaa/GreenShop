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