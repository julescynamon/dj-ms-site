
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplayspeed: 1700,
                dots: true,
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
                autoplayspeed: 1700,
                dots: true,
                arrows: false,
                swipeToSlide: true,
            }
        }
        ]
    });