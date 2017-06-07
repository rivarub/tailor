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
            $('.nav-bottom').css('display', 'block').css('position', 'fixed').css('top', '56px');
        } else {
            $('nav').css('position', 'static');
            $('.cd-bg-1').css('padding-top', '0');
            $('.nav-bottom').css('display', 'none');
        }
    });

//menu-mobile
    showMobileMenu = false;
    $('.mobile').hide();
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
});