let icons = document.querySelectorAll('.sm-icon');
let target = document.querySelectorAll('.svg-holder');
let tl = gsap.timeline({ defaults: { Easings: Expo.EaseOut } });

$(document).ready(() => {
    $(".menuBtn").click(() => {
        $(".menu").toggleClass('hide');

    });

});
icons.forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
        icon.setAttribute('fill', 'white');
    })
    icon.addEventListener('mouseleave', () => {
        icon.setAttribute('fill', '#2C7566');
    })
});
tl.from('.section-01', { scale: 0.9, duration: 2, opacity: 0, ease: Expo.EaseOut, delay: 0.2 })
    .from('.section-inner', {
            scale: 0.5,
            opacity: 0
        },
        '-=1').from('.main-content', { clipPath: ' polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)', y: 100 })