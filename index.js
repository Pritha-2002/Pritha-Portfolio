$(".slick-slider").slick({
    slidesToShow: 2,
    margin: 20,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true
});

$(".projects-content button").empty();


// responsive: [
//     {
//         breakpoint: 1199,
//         settings: {
//             slidesToShow: 3
//         }
//     },

//     {
//         breakpoint: 991,
//         settings: {
//             slidesToShow: 2
//         }
//     },
//     {
//         breakpoint: 575,
//         settings: {
//            slidesToShow: 1,
//         }
//     }

// ]