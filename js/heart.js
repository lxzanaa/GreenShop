const heartButton = document.querySelector('.heart-button-2');

heartButton.addEventListener('click', () => {
    heartButton.classList.toggle('clicked');
});


let container = document.querySelector("#container__imgHover")
let img = document.querySelector(".shop__section-main-image")

container.addEventListener("mousemove" , (e) =>{
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    console.log(x , y);

    img.style.transformOrigin = `${x}px ${y}px`
    img.style.transform = "scale(1.3)"
})

container.addEventListener("mouseleave" , () =>{
    img.style.transformOrigin = "center"
    img.style.transform = "scale(1)"
})