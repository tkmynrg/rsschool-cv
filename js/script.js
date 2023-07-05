const navBurger = document.querySelector('.nav-burger');
navBurger.addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('mobile-menu-open')) {
        body.classList.remove('mobile-menu-open');
    } else {
        body.classList.add('mobile-menu-open');
    }
});

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const scrollTo = targetElement.offsetTop - 80;

        window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
        });

        document.body.classList.remove('mobile-menu-open');
    });
});