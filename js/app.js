let headerContainerLink = document.querySelectorAll(".header__container-link")

headerContainerLink.forEach(function (item, index) {
    item.addEventListener('click', function () {
        headerContainerLink.forEach(function (element) {
            element.classList.remove("active")
        })
        item.classList.add("active");
    })
})