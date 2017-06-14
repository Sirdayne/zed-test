$(document).ready(function () {

    $('body').on('click', '.search-title', function () {
        $('.header__search').toggleClass('js-active');
    });

    $('body').on('click', '.header__languages', function () {
        $(this).toggleClass('header__languages_active');
        $('.languages').toggleClass('languages_active');
    });

    $('body').on('click', '.lang-box', function () {
        var previousText = $('.header__languages p').html();
        var text = $(this).html();
        $(this).html(previousText);
        $('.header__languages p').html(text);
    });

    $('body').on('click', '.tab-nav', function () {
        var index = $('.tab-nav').index(this);
        console.log(index);

        $('.tab-nav').removeClass('tab-nav_active');
        $(this).addClass('tab-nav_active');

        $('.tab-main').removeClass('tab-main_active');
        $('.tab-main').eq(index).addClass('tab-main_active');
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
    /*
    animate('.sc-img', 'slideInLeft', 5);
    animate('.sc-txt', 'slideInRight', 5, 0.5);

    animate('.sa-box', 'fadeIn', 3);

    animate('.sa-service', 'fadeIn', 5, 0.1, 50);

    animate('.box-process', 'fadeIn', 7, 0.1, 10);
    */

});
