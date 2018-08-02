$(document).ready(function(){
    $(".slider-photo").owlCarousel({
        items: 1,
        stagePadding: 100,
        margin: 20,
        loop: true,
        center: true,
        autoWidth: true,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'],
        responsive: {
            320: {
                stagePadding: 0
            },
            640: {
                stagePadding: 50
            },
            1200: {
                stagePadding: 100
            }
        }
    });
    $(".comments__slider").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            900: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
  });