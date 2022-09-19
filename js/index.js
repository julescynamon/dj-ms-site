// changement du background de la nav au scroll
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        nav.style.backgroundColor = 'black';
    }
    else {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});


// animation burger en responsive

const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.navbar__burger');
burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('show-nav');
});  

// Carroussel des avis


$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplayspeed: 3000,
                dots: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                arrows: false,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplayspeed: 2000,
                dots: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                arrows: false,
                swipeToSlide: true,
            }
        }
        ]
});





