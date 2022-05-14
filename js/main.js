console.log("© CAVELSoft");

document.querySelector('.boton-menu').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
    document.querySelector('.icon-search').classList.toggle('show');
    document.querySelector('.nav-brand').classList.toggle('hide');
    document.querySelector('.nav-main').classList.toggle('hide');
    document.querySelector('.boton-menu i').classList.toggle("fa-times");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards');
ScrollReveal().reveal('.cards-banner-one');
ScrollReveal().reveal('.cards-banner-two');
ScrollReveal().reveal('.block-articles');
ScrollReveal().reveal('.social');