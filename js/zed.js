Vue.component('vue-header', {
    template: `
<header class="header">
    <div class="head">
        <div class="wrap">
            <div class="head-logo">
                <a href="index.html"><img src="./img/icons/logo-pur.svg" alt=""></a>
            </div>

            <div class="head-lang">
                <a href=""><div class="lang-box">EN</div></a>
                <a href=""><div class="lang-box lang-center">RU</div></a>
                <a href=""><div class="lang-box">KZ</div></a>
            </div>
        </div>
    </div>
    <div class="navigation">
        <div class="wrap">
            <div class="nav-mob">
                <p>РАЗВЕРНУТЬ МЕНЮ</p>
                <img src="./img/icons/ic-open.svg" alt="">
            </div>
            <div class="navigation-row">
                <a href="index.html"><div class="nav">Главная</div></a>
                <a href="company.html"><div class="nav">О компании</div></a>
                <a href="process.html"><div class="nav">Процесс работы</div></a>
                <a href="services.html"><div class="nav">Услуги</div></a>
                <a href=""><div class="nav">Портфолио</div></a>
                <a href="contacts.html"><div class="nav">Контакты</div></a>
            </div>
        </div>
    </div>
</header>
`

})

Vue.component('vue-footer', {
    template: `
<footer class="footer">
    <div class="wrap">
        <div class="footation">
            <div class="foot"><a href="index.html">Главная</a></div>
            <div class="foot"><a href="company.html">О компании</a></div>
            <div class="foot"><a href="process.html">Процесс работы</a></div>
            <div class="foot"><a href="services.html">Услуги</a></div>
            <div class="foot"><a href="">Портфолио</a></div>
            <div class="foot"><a href="contacts.html">Контакты</a></div>
        </div>

        <div class="under-footer">
            <div class="foot-logo">
                <a href="index.html"><img src="./img/icons/logo-gray.svg" alt=""></a>
            </div>

            <div class="foot-tel">
                <a href="tel:+7(7172)286890">+7 (7172) 28 68 90</a>
            </div>

            <div class="foot-icons">
                <div class="foot-icon"><a href="" target="_blank"><img src="./img/icons/soc-vk.svg" alt=""></a></div>
                <div class="foot-icon"><a href="" target="_blank"><img src="./img/icons/soc-fb.svg" alt=""></a></div>
                <div class="foot-icon"><a href="" target="_blank"><img src="./img/icons/soc-inst.svg" alt=""></a></div>
            </div>

            <a href="http://www.ginnova.kz" target="_blank">
            <div class="foot-gi">
                <p>Разработано<br/> с особым трепетом</p>
                <svg class="authors-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22.83px" height="25px" viewBox="0 0 612 670">
                        <path d="M275.097-0.906c41.842,1.701,78.333,4.859,117.257,9.96c11.676,1.458,30.165,6.316,32.109,13.361c4.624,16.763,3.65,36.197,0.244,53.932c-1.46,7.773-14.108,7.044-21.65,6.802c-50.601-1.458-101.201-5.345-151.8-5.831c-89.28-0.971-141.097,37.411-155.207,124.867c-14.596,90.128-15.569,182.2,1.703,272.571c15.327,79.926,66.414,117.824,148.152,117.095c30.166-0.242,61.79-0.242,94.632-0.972c0.243-12.39-0.486-19.191-0.486-26.48c0-70.937,0-141.872,0-212.81c0-27.937,5.352-33.039,33.328-33.282c54.006-0.243,54.006-0.243,54.006,54.417c0,80.896,0,161.551,0,242.447c0,38.627,0.243,43.243-38.681,46.644c-59.356,5.102-119.445,9.475-178.56,6.073c-98.524-5.83-161.774-62.919-191.21-155.234c-10.46-33.039-15.813-68.75-16.786-103.489c-1.703-63.164-2.189-126.569,3.406-189.489C17.231,88.494,96.294,9.783,214.766,0.309C217.929-0.177,258.312-0.906,275.097-0.906z"></path>
                        <path d="M613,334.1c0,99.847,0,199.449,0,299.295c0,26.479-3.894,30.123-30.896,30.366c-56.683,0.486-56.683,0.486-56.683-56.117c0-188.273,0-376.547,0-565.064c0-34.254,3.406-37.655,36.978-37.655C613,4.925,613,4.925,613,55.698C613,148.498,613,241.299,613,334.1z"></path>
                </svg>
            </div>
            </a>

        </div>

    </div>
</footer>
`

})


Vue.component('vue-modals', {
    template: `

    <div class="modal-wrapper">
        <div class="modal">
            <!--<div class="modal-close"></div>-->

            <div class="modal-title">Заполните поля ниже и мы свяжемся с Вами в ближайшее время</div>

            <form method="post" action="">
                <!-- Hidden Required Fields -->
                <input type="hidden" name="project_name" value="abm.ginnova.kz">

                <input type="hidden" name="admin_email" value="tester@ginnova.kz">
                <input type="hidden" name="form_subject" value="Заявка">
                <!-- END Hidden Required Fields -->

                <div class="btns-row">
                    <input type="text" name="Имя" placeholder="Имя" required>
                    <input type="tel" id="client-tel-for-consult" name="Телефон" placeholder="Телефон" required>
                </div>

                <div class="btns-row">
                    <button class="call-btn">Отправить</button>
                </div>
            </form>
        </div>

        <div class="thx"><p>СПАСИБО! С ВАМИ СВЯЖЕТСЯ НАШ МЕНЕДЖЕР</p></div>

        <div class="modal-back"></div>

    </div>
`
})

new Vue({
    el: '#vue-app'
})

// END VUE

$(document).ready(function () {

    // NAVIGATION

    $('body').on('click', '.nav-mob', function () {
        $('.navigation-row').toggleClass('nav-active');
        $(this).toggleClass('nav-active');
    });

    // WOW ANIMATIONS

    function animate(animationClass, animation, quantity, startTime, coefTime){

        if( !startTime ){ startTime = 0.2 }

        if( !coefTime ){ coefTime = 3 }

        var wowCycle = 0;

        $(animationClass).addClass('wow ' + animation);

        for(var i = 0; i < quantity; i++){

            wowCycle = startTime + i/coefTime + 's';
            $(animationClass).eq(i).attr("data-wow-delay", wowCycle);
            wowCycle = 0;
        }
    }

    animate('.sc-img', 'slideInLeft', 5);
    animate('.sc-txt', 'slideInRight', 5, 0.5);

    animate('.sa-box', 'fadeIn', 3);

    animate('.sa-service', 'fadeIn', 5, 0.1, 50);

    animate('.box-process', 'fadeIn', 7, 0.1, 10);

});
