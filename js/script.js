const navToggle = () => {
    const hamburgerMenu = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('navbar-active');
    });
}
navToggle();