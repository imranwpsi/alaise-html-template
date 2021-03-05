window.onscroll = () => {
    const nav = document.querySelector('.main-menu-wrapper');
    if(this.scrollY <= 10) nav.classList.remove('navbar-bg'); else nav.classList.add('navbar-bg');
};

$('.menu-toggle').on('click', function(){
    $('.full-menu').toggleClass('full-menu--open');
})