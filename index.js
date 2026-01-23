const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});



// const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => 1 - Math.pow(1 - t, 3),
//     smoothWheel: true,
//     smoothTouch: false,
// });

// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);