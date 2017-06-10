/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
//scroll for nav
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) { //215
            $('nav').css('position', 'fixed').css('top', '0').css('width', '100%');
            $('.cd-bg-1').css('padding-top', '70px');
//        $('nav').css('position', 'fixed').css('top', '6px').css('width', '100%');
//        $('.nav-top').css('display', 'block').css('position', 'fixed').css('top', '0');
            $('.nav-bottom').css('display', 'block').css('position', 'fixed').css('top', '54px');            
        } else {
            $('nav').css('position', 'static');
            $('.cd-bg-1').css('padding-top', '0');
            $('.nav-bottom').css('display', 'none');
        }
        if ($(window).scrollTop() > 70&&$(window).scrollTop() < 1200) {
            $('.about').css('color', '#aa0019');
        } else {
            $('.about').css('color', '#484047');
        }
        if ($(window).scrollTop() > 1199&&$(window).scrollTop() <2200) {
            $('.serv').css('color', '#aa0019');
//            $('.services').css('color', '#aa0019');
        } else {
            $('.serv').css('color', '#484047');
//            $('.services').css('color', '#000');
        }
        if ($(window).scrollTop() > 2199) {
            $('.contacts').css('color', '#aa0019');
//            $('ul.contact').css('color', '#aa0019');
//            $('h3').css('color', '#000');
        } else {
            $('.contacts').css('color', '#484047');
//            $('ul.contact').css('color', '#484047');
        }
    });

//menu-mobile-1
    showMobileMenu = false;
    $('.mobile').hide();
//    $('.bar').click(function (event) {
//        showMobileMenu = !showMobileMenu;
//        if (showMobileMenu == true) {
//            $('.mobile').show();
//            $('nav').css('padding-bottom', '0');
//        } else {
//            $('.mobile').hide();
//            $('nav').css('padding-bottom', '16px');
//        }
//    });
//menu-mobile-2     
    $('.bar').click(function (event) {
        showMobileMenu = !showMobileMenu;
        if (showMobileMenu == true) {
            $('.mobile').show();
            $('nav').css('padding-bottom', '0');
        } else {
            $('.mobile').hide();
            $('nav').css('padding-bottom', '16px');
        }
    });
    $('.mobile .menu-link').click(function (event){
        showMobileMenu = !showMobileMenu;
        $('.mobile').hide();
        $('nav').css('padding-bottom', '16px');
    });
});