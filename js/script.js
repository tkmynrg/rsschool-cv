const navBurger = document.querySelector('.nav-burger');
navBurger.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('mobile-menu-open')) {
        body.classList.remove('mobile-menu-open');
    } else {
        body.classList.add('mobile-menu-open');
    }
});