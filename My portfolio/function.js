const menuIcon = document.getElementById("menu-icon");
let navlist = document.querySelector(".navlist");
let backIcon = document.getElementById("back-icon");
const navItems = document.querySelectorAll(".navlist li");

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('show');
    body.classList.toggle('no-scroll');
})

backIcon.addEventListener('click', () => {
    navlist.classList.remove('show');
    body.classList.remove('no-scroll');
})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navlist.classList.remove('show');
        body.classList.remove('no-scroll');
    });
});

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:100, origin: 'left'});
sr.reveal('.hero-button', {delay:100, origin: 'bottom'});

sr.reveal('#about', {delay:100, origin: 'right'});
sr.reveal('.aboutme-image', {delay:200, origin: 'top'});
sr.reveal('.skills-logo', {delay:200, origin: 'top'});
sr.reveal('.about-buttons', {delay:100, origin: 'bottom'});

sr.reveal('#services', {delay:100, origin: 'left'});

sr.reveal('#project', {delay:100, origin: 'right'});




