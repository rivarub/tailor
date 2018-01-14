$(document).ready(function () {
    $(window).scroll(function ()
    {
        if ($(window).scrollTop() > 0) {
            //$('header').css('display', 'none');
            $('nav').css('position', 'fixed').css('top', '0').css('width', '100%');
            //$('.cd-bg-1').css('padding-top', '100px');
//            $('.nav-bottom').css('display', 'block').css('position', 'fixed').css('top', '54px');
        } else {
            //$('header').css('display', 'block');
            //$('header').css('margin-top', '61px');
            $('header').css('margin-top', '4em');
            //$('nav').css('position', 'static');
            //$('.cd-bg-1').css('padding-top', '0');
//            $('.nav-bottom').css('display', 'none');
        }
        if ($(window).scrollTop() > 800 && $(window).scrollTop() < 1820) {
            $('.about').css('color', '#aa0019');
        } else {
            $('.about').css('color', '#484047');
        }
        if ($(window).scrollTop() > 1819 && $(window).scrollTop() < 2730) {
            $('.serv').css('color', '#aa0019');
        } else {
            $('.serv').css('color', '#484047');
        }
        if ($(window).scrollTop() > 2729) {
            $('.contacts').css('color', '#aa0019');
        } else {
            $('.contacts').css('color', '#484047');
        }
    });
    //Mobile-nav
    showMobileMenu = false;
    $('.mobile').hide();
    $('.bar').click(function (event) {
        $('.mobile_navPhone').hide();
        $('.fa-phone').css('color', '#aa0019');
        $('nav').css('position', 'fixed');//щоби картинка не напливала на пункти меню
        showMobileMenu = !showMobileMenu;
        if (showMobileMenu == true) {
            $('.mobile').show();
            $('nav').css('padding-bottom', '0');
        } else {
            $('.mobile').hide();
            $('nav').css('padding-bottom', '16px');
        }
    });
    $('.mobile .menu-link').click(function (event) {
        showMobileMenu = !showMobileMenu;
        $('.mobile').hide();
        $('nav').css('padding-bottom', '16px');
    });
    //Mobile-Phone
//    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
//    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))&& screen.width < 991) {
    if ($(window).width() < 992) {
        showMobile_navPhoneMenu = false;
        $('.mobile_navPhone').hide();
        $('.i-phone').click(function (event) {
            $('.mobile').hide();
            showMobile_navPhoneMenu = !showMobile_navPhoneMenu;
            if (showMobile_navPhoneMenu == true) {
                $('.mobile_navPhone').show();
                $('.fa-phone').css('color', '#a67c52');
                $('nav').css('padding-bottom', '0');
            } else {
                $('.mobile_navPhone').hide();
                $('.fa-phone').css('color', '#aa0019');
                $('nav').css('padding-bottom', '16px');
            }
        });
    }

// GALLERY MODAL
//                    function show_hallo() {
//                        alert('Hallo, World!');
//                        return false;
//                    }
//                    $(document).ready (show_hallo) ;
//                    function show_volodymyra() {
//                        $('img#myImg').attr("src", "img/vlada_.jpg");
//                    }
//                    $(document).ready(show_volodymyra);


//  
//// Get the elements with class="column"
//                    var elements = document.getElementsByClassName("column");
//
//// Declare a loop variable
//                    var i;
//
//// Four images side by side
//                    function four() {
//                        for (i = 0; i < elements.length; i++) {
//                            elements[i].style.width = "25%";
//                        }
//                    }
//
//// Two images side by side
//                    function two() {
//                        for (i = 0; i < elements.length; i++) {
//                            elements[i].style.width = "50%";
//                        }
//                    }
//
//// Full-width images
//                    function one() {
//                        for (i = 0; i < elements.length; i++) {
//                            elements[i].style.width = "100%";
//                        }
//                    }

    // MODAL
    // Get the modal
    var modal = document.getElementById('myModal');
    //var modal1 = document.getElementById('myModal1');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
/*    
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var img = document.getElementById('myImg1');
    var modalImg = document.getElementById("img02");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var img = document.getElementById('myImg2');
    var modalImg = document.getElementById("img03");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
*/

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Promko
    var myImages = new Array();
    //var picturesCount = $('img', 'div.gal').length;
    //alert(picturesCount);
    var picturesCount = 40;
    for (i = 0; i < picturesCount; i++) {
        myImages[i] = {};
    }
//    myImages[0].src = "img/girl-bride_dress.jpg";
//    myImages[0].alt = "girl-bride dress";
//    myImages[1].src = "img/bride_dress.jpg";
//    myImages[2].src = "img/bride_dress3.jpg";
//    myImages[3].src = "img/tailoring_v.jpg";
//    myImages[4].src = "img/halloween_costume.jpg";
//    myImages[5].src = "img/girl-bride_dress2.jpg";
//    myImages[6].src = "img/bride_dress2.jpg";
//    myImages[7].src = "img/ball_pair.jpg";
//    myImages[8].src = "img/bride_crystals.jpg";
//    myImages[9].src = "img/halloween_costume2.jpg";
//    myImages[10].src = "img/blue_glossy_dress.jpg";
//    myImages[11].src = "img/blue_dress.jpg";
//    myImages[12].src = "img/white_dress.jpg";
//    myImages[13].src = "img/wd.jpg";
//    myImages[14].src = "img/chervona_lyce.jpg";
//    myImages[15].src = "img/blue_glossy_dress2.jpg";
//    myImages[16].src = "img/blue_dress2.jpg";
//    myImages[17].src = "img/white_dress1.jpg";
//    myImages[18].src = "img/bride_crystals1.jpg";
//    myImages[19].src = "img/chervona_spyna.jpg";
//    myImages[20].src = "img/baby-bride_dress.jpg";
//    myImages[21].src = "img/pink_dress.jpg";
//    myImages[22].src = "img/red_dress.jpg";
//    myImages[23].src = "img/jacket.jpg";
//    myImages[24].src = "img/synya_lyce.jpg";
//    myImages[25].src = "img/baby-bride_dress2.jpg";
//    myImages[26].src = "img/pink_dress2.jpg";
//    myImages[27].src = "img/red_dress2.jpg";
//    myImages[28].src = "img/jacket1.jpg";
//    myImages[29].src = "img/synya_spyna.jpg";
//    myImages[30].src = "img/red_crystals_dress.jpg";
//    myImages[31].src = "img/white_jacket.jpg";
//    myImages[32].src = "img/white_dress_.jpg";
//    myImages[33].src = "img/overcoat.jpg";
//    myImages[34].src = "img/red_v.jpg";
//    myImages[35].src = "img/red_crystals_dress2.jpg";
//    myImages[36].src = "img/white_jacket2.jpg";
//    myImages[37].src = "img/white_dress_2.jpg";
//    myImages[38].src = "img/overcoat1.jpg";
//    myImages[39].src = "img/blue_crystals.jpg";


//    myImages[0].src = "img/girl-bride_dress.jpg";
//    myImages[0].alt = "girl-bride dress";
//    myImages[1].src = "img/girl-bride_dress2.jpg";
//    myImages[2].src = "img/bride_dress.jpg";
//    myImages[3].src = "img/bride_dress2.jpg";
//    myImages[4].src = "img/bride_dress3.jpg";
//    myImages[5].src = "img/baby-bride_dress.jpg";
//    myImages[6].src = "img/baby-bride_dress2.jpg";
//    myImages[7].src = "img/white_dress_.jpg";
//    myImages[8].src = "img/white_dress_2.jpg";
//    myImages[9].src = "img/tailoring_v.jpg";
//    myImages[10].src = "img/blue_glossy_dress.jpg";
//    myImages[11].src = "img/blue_glossy_dress2.jpg";
//    myImages[12].src = "img/white_dress.jpg";
//    myImages[13].src = "img/white_dress1.jpg";
//    myImages[14].src = "img/bride_crystals1.jpg";
//    myImages[15].src = "img/blue_dress.jpg";
//    myImages[16].src = "img/blue_dress2.jpg";
//    myImages[17].src = "img/pink_dress.jpg";
//    myImages[18].src = "img/pink_dress2.jpg";
//    myImages[19].src = "img/bride_crystals.jpg";
//    myImages[20].src = "img/wd.jpg";
//    myImages[21].src = "img/red_crystals_dress.jpg";
//    myImages[22].src = "img/red_crystals_dress2.jpg";    
//    myImages[23].src = "img/red_dress.jpg";
//    myImages[24].src = "img/red_dress2.jpg";      
//    myImages[25].src = "img/chervona_lyce.jpg";
//    myImages[26].src = "img/chervona_spyna.jpg";
//    myImages[27].src = "img/synya_lyce.jpg";
//    myImages[28].src = "img/synya_spyna.jpg";
//    myImages[29].src = "img/ball_pair.jpg";  
//    myImages[30].src = "img/blue_crystals.jpg";
//    myImages[31].src = "img/white_jacket.jpg";
//    myImages[32].src = "img/white_jacket2.jpg";
//    myImages[33].src = "img/overcoat.jpg";
//    myImages[34].src = "img/overcoat1.jpg";
//    myImages[35].src = "img/jacket.jpg";
//    myImages[36].src = "img/jacket1.jpg";
//    myImages[37].src = "img/halloween_costume.jpg";
//    myImages[38].src = "img/halloween_costume2.jpg";
//    myImages[39].src = "img/red_v.jpg";

    myImages[0].src = "img/girl-bride_dress.jpg";
    myImages[0].alt = "girl-bride dress";
    myImages[1].src = "img/girl-bride_dress2.jpg";
    myImages[2].src = "img/blue_glossy_dress.jpg";
    myImages[3].src = "img/blue_glossy_dress2.jpg";
    myImages[4].src = "img/baby-bride_dress.jpg";
    myImages[5].src = "img/baby-bride_dress2.jpg";
    myImages[6].src = "img/red_crystals_dress.jpg";
    myImages[7].src = "img/red_crystals_dress2.jpg";
    myImages[8].src = "img/bride_dress.jpg";
    myImages[9].src = "img/bride_dress2.jpg";
    myImages[10].src = "img/blue_dress.jpg";
    myImages[11].src = "img/blue_dress2.jpg";
    myImages[12].src = "img/pink_dress.jpg";
    myImages[13].src = "img/pink_dress2.jpg";
    myImages[14].src = "img/white_jacket.jpg";
    myImages[15].src = "img/white_jacket2.jpg";
    myImages[16].src = "img/bride_dress3.jpg";
    myImages[17].src = "img/ball_pair.jpg";
    myImages[18].src = "img/white_dress.jpg";
    myImages[19].src = "img/white_dress1.jpg";
    myImages[20].src = "img/red_dress.jpg";
    myImages[21].src = "img/red_dress2.jpg";
    myImages[22].src = "img/white_dress_.jpg";    
    myImages[23].src = "img/white_dress_2.jpg";
    myImages[24].src = "img/tailoring_v.jpg";      
    myImages[25].src = "img/bride_crystals.jpg";
    myImages[26].src = "img/wd.jpg";
    myImages[27].src = "img/bride_crystals1.jpg";
    myImages[28].src = "img/jacket.jpg";
    myImages[29].src = "img/jacket1.jpg";  
    myImages[30].src = "img/overcoat.jpg";
    myImages[31].src = "img/overcoat1.jpg";
    myImages[32].src = "img/halloween_costume.jpg";
    myImages[33].src = "img/halloween_costume2.jpg";
    myImages[34].src = "img/chervona_lyce.jpg";
    myImages[35].src = "img/chervona_spyna.jpg";
    myImages[36].src = "img/synya_lyce.jpg";
    myImages[37].src = "img/synya_spyna.jpg";
    myImages[38].src = "img/red_v.jpg";
    myImages[39].src = "img/blue_crystals.jpg";
    

    var i = 0;
    var current;
    $('img', 'div.gal').each(function () {
//        $(this).attr('id', 'img' + i);
//        //console.log(i);
//        $(this).attr("src", myImages[i].src);
//        $(this).attr("alt", myImages[i].alt);
        $(this).click(function () {
            current = parseInt(this.id.substring(3));
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
        i++;
    });
    $('.nextSlide').click(nextSlide);
    function nextSlide() {
        current++;
        if (current == picturesCount) {
            current = 0;
        }
        modalImg.src = myImages[current].src;
        captionText.innerHTML = myImages[current].alt || '';
    }

    $('.prevSlide').click(prevSlide);
    function prevSlide() {
        current--;
        if (current < 0) {
            current = picturesCount - 1;
        }
        modalImg.src = myImages[current].src;
        captionText.innerHTML = myImages[current].alt || '';
    }
    $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            prevSlide();
            break;

        case 38: // up
        break;

        case 39: // right
            nextSlide();
            break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

    //                    for  (var i = 0; i < myImages.length; i++) {
//                                .attr('id', 'picture');

// END GALLERY MODAL
});