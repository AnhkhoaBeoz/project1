
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();
var User = document.querySelector('.nav-right');
var modalLogin = document.querySelector('.modal-form');
var btnMenu = document.querySelector('.btn-menu-bar');
var menuMobileShow = document.querySelector('.mobile-modal');
var closeMenu = document.querySelector('.close-mobile').addEventListener('click', btnOpen);
var modalClickMobile = document.querySelector('.click-account');
var closeLoginMobile = document.querySelector('.modal-close');
var focusChoose = document.querySelectorAll('.food-choose-item');

    for(var i = 0 ; i < focusChoose.length;i++) {
       
    }
function show() {
    modalLogin.classList.toggle('open');
}
User.addEventListener('click', show);
modalLogin.addEventListener('click', show);
document.querySelector('.modal-login').addEventListener('click', function (e) {
    e.stopPropagation();
})
function btnOpen() {
    menuMobileShow.classList.toggle('open-menu-mobile');
}
btnMenu.addEventListener('click', btnOpen);
function showMobile() {
    modalLogin.classList.toggle('open');
    menuMobileShow.classList.toggle('open-menu-mobile');

}
function HideMobile() {
    modalLogin.classList.add('close');
    menuMobileShow.classList.add('close');

}
modalClickMobile.addEventListener('click', showMobile);
closeLoginMobile.addEventListener('click', HideMobile);