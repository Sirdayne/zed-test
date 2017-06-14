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
        $(this).parents('.tab').children('.tab-nav').removeClass('tab-nav_active');

        $(this).addClass('tab-nav_active');

        $(this).parents('.tab').children('.tab-main').removeClass('tab-main_active');
        $('.tab-main').eq(index).addClass('tab-main_active');
    });

});
