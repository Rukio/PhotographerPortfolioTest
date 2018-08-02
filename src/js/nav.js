/* Навигация по странице */

var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.15;  // скорость прокрутки к элементу, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}

/* Hamburger-меню */

// var hamburger = document.querySelector('.hamburger');
// var social = document.querySelector('.social');
// var headerMenu = document.querySelector('.header__menu');

// var largeScreen = window.matchMedia('(min-width: 768px)');
// var smallScreen = window.matchMedia('(max-width: 767px)');

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('is-active');

//     getComputedStyle(headerMenu, null).display === 'none'
//         ? headerMenu.style.display = 'block'
//         : headerMenu.style.display = 'none';
// });

// largeScreen.addListener(function() {
//     if (largeScreen.matches) {
//         headerMenu.style.display = 'block';
//     }
// });

// smallScreen.addListener(function() {
//     if (smallScreen.matches) {
//         headerMenu.style.display = 'none';
//     }
// });