$(document).ready(function(){
    // advantages slider
    function initializeSlickSlider() {
    $('.advantages__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        prevArrow: "<button class='slider-arrow slider-prev-arrow'> <img src='../images/slider-arrow.svg' alt='Назад'> </button>",
        nextArrow: "<button class='slider-arrow slider-next-arrow'> <img src='../images/slider-arrow.svg' alt='Вперед'> </button>",
        responsive: [
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    }
    function destroySlickSlider() { $('.advantages__slider').slick('unslick'); }
    function checkScreenWidth() {
        initializeSlickSlider();
        if ($(window).width() >= 1020) destroySlickSlider();
    }
    checkScreenWidth();
    $(window).resize(function(){ checkScreenWidth(); });

    // about slider
    $('.about__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        prevArrow: "<button class='slider-arrow slider-prev-arrow'> <img src='../images/slider-arrow.svg' alt='Назад'> </button>",
        nextArrow: "<button class='slider-arrow slider-next-arrow'> <img src='../images/slider-arrow.svg' alt='Вперед'> </button>",
        responsive: [
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    

    // show / hide card content 
    let showButtons = document.querySelectorAll('.advantages__show-but');
    showButtons.forEach(but => 
        but.addEventListener('click', e =>{
            let card = but.closest('.advantages__card');
            card.classList.add('advantages__card--show-content');
        }
    ))
    let hideButtons = document.querySelectorAll('.advantages__close-but');
    hideButtons.forEach(but => 
        but.addEventListener('click', e =>{
            let card = but.closest('.advantages__card');
            card.classList.remove('advantages__card--show-content');
        }
    ))
});