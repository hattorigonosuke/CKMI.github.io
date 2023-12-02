document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');
    hamburger.addEventListener('click', function () {
        console.log('Hamburger clicked!');
        nav.classList.toggle('show');
    });
});