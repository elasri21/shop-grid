//
const showNav = document.querySelector(".all-categories .icon");
const nav = document.querySelector("nav");
showNav.addEventListener("click", function() {
    nav.classList.toggle("show");
});

//
const slides = Array.from(document.querySelectorAll(".slide"));
const bullets = Array.from(document.querySelectorAll(".bullet"));
bullets.forEach(bullet => {
    bullet.addEventListener("click", function() {
        slides.forEach(slide => {
            if(this.id == slide.dataset.id) {
                slide.classList.remove("hide");
            } else {
                slide.classList.add("hide");
            }
        });
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});

//
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY == 0) {
        goUp.style.opacity = "0";
    } else if(this.scrollY > 500) {
        goUp.style.opacity = "1";
    }
});
