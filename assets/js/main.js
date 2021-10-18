
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    )
    wow.init();
var User = document.querySelector('.nav-right');
var modalLogin = document.querySelector('.modal-form');
    function show() {
        modalLogin.classList.toggle('open');
    }
    User.addEventListener('click',show);
    modalLogin.addEventListener('click',show);
    document.querySelector('.modal-login').addEventListener('click', function(e) {
        e.stopPropagation();
    })