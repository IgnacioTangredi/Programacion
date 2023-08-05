const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav-menu_visible");
});

var swiper = new Swiper(".mySwiper",{
    effect:"coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 15,
        strech: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    loop:true,
});