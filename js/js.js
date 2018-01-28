/*
 * 
 var menu_selector = "nav";
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}
*/
function isVisible(tag) {
    var t = $(tag);
    var w = $(window);
    var wt = w.scrollTop();
    console.log('window.scrollTop()='+wt);
    var tt = t.offset().top;
    console.log('services.offset().top='+tt);
    var tb = tt + t.height();
    return ((tb <= wt + w.height()) && (tt <= wt));
}


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    console.log('docViewTop='+docViewTop);
    var docViewBottom = docViewTop + $(window).height();
    //console.log('docViewBottom='+docViewBottom);
    var elemTop = $(elem).offset().top;
    console.log('elemTop='+elemTop);
    var elemBottom = elemTop + $(elem).height();
    //console.log('elemBottom='+elemBottom);

    return ((elemTop <= docViewTop) && (elemBottom >= docViewBottom));
}

$(document).ready(function () {
//slow-scroll
        var $page = $('html, body');
        $('a[href*="#"]').click(function () {
            $page.animate({
                scrollTop:$($.attr(this, 'href')).offset().top
            }, 1500);
            //$(this).css('color', '#aa0019');
            return false;
            
        });

//menu-colore
   
    $(window).scroll(function ()
    {
        var docViewTop = $(window).scrollTop();
        //var elemTop = $(elem).offset().top;
        //var a = $("#about");
        //var s = $("#services");
        //var c = $("#contact_us");
        var aboutTop = $("#about").offset().top;
        var servicesTop = $("#services").offset().top;
        var contact_usTop = $("#contact_us").offset().top;
        if ($(window).scrollTop() > 0) {
            $('nav').css('position', 'fixed').css('top', '0').css('width', '100%');
        } else {
            $('header').css('margin-top', '4em');
        }
        
        if(docViewTop >= aboutTop && docViewTop < servicesTop) {
            $('.about').css('color', '#aa0019');
            $('.serv').css('color', '#484047');
            $('.contacts').css('color', '#484047');
        } else if (docViewTop >= servicesTop && docViewTop < contact_usTop) {
            $('.serv').css('color', '#aa0019');
            $('.about').css('color', '#484047');
            $('.contacts').css('color', '#484047');
        } else if (docViewTop >= contact_usTop) {
            $('.contacts').css('color', '#aa0019');
            $('.about').css('color', '#484047');
            $('.serv').css('color', '#484047');
        } else {
            $('.about').css('color', '#484047');
            $('.serv').css('color', '#484047');
            $('.contacts').css('color', '#484047');
        }
/* працює, але з мертвими зонами між розділами        
        if (isScrolledIntoView(a)) {
            $('.about').css('color', '#aa0019');
        } else {
            $('.about').css('color', '#484047');
        }
        
        if (isScrolledIntoView(s)) {
            $('.serv').css('color', '#aa0019');
        } else {
            $('.serv').css('color', '#484047');
        }
        
        if (isScrolledIntoView(c)) {
            $('.contacts').css('color', '#aa0019');
        } else {
            $('.contacts').css('color', '#484047');
        }
*/        
//        if ($(window).scrollTop() > 800 && $(window).scrollTop() < 2450) {
//            $('.about').css('color', '#aa0019');
//        } else {
//            $('.about').css('color', '#484047');
//        }
//        if ($(window).scrollTop() > 2449 && $(window).scrollTop() < 4800) {
//            $('.serv').css('color', '#aa0019');
//        } else {
//            $('.serv').css('color', '#484047');
//        }
//        if ($(window).scrollTop() > 4799) {
//            $('.contacts').css('color', '#aa0019');
//        } else {
//            $('.contacts').css('color', '#484047');
//        }
    });
/*    
    //menu-scroll color
    $(document).on("scroll", onScroll);
	$("a[href^=#]").click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
*/    

//Mobile-nav
    showMobileMenu = false;
    $('.mobile').hide();
    $('.bar').click(function (event) {
        $('.mobile_navPhone').hide();
        $('.fa-phone').css('color', '#aa0019');
        $('nav').css('position', 'fixed');
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

// MODAL
// Get the modal
    var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

// Promko
    var myImages = new Array();
    var picturesCount = 40;
    for (i = 0; i < picturesCount; i++) {
        myImages[i] = {};
    }

    myImages[0].src = "img/girl-bride_dress.jpg";
    myImages[0].alt = "1/40";
    myImages[1].src = "img/girl-bride_dress2.jpg";
    myImages[1].alt = "2/40";
    myImages[2].src = "img/blue_glossy_dress.jpg";
    myImages[2].alt = "3/40";
    myImages[3].src = "img/blue_glossy_dress2.jpg";
    myImages[3].alt = "4/40";
    myImages[4].src = "img/baby-bride_dress.jpg";
    myImages[4].alt = "5/40";
    myImages[5].src = "img/baby-bride_dress2.jpg";
    myImages[5].alt = "6/40";
    myImages[6].src = "img/red_crystals_dress.jpg";
    myImages[6].alt = "7/40";
    myImages[7].src = "img/red_crystals_dress2.jpg";
    myImages[7].alt = "8/40";
    myImages[8].src = "img/bride_dress.jpg";
    myImages[8].alt = "9/40";
    myImages[9].src = "img/bride_dress2.jpg";
    myImages[9].alt = "10/40";
    myImages[10].src = "img/blue_dress.jpg";
    myImages[10].alt = "11/40";
    myImages[11].src = "img/blue_dress2.jpg";
    myImages[11].alt = "12/40";
    myImages[12].src = "img/pink_dress.jpg";
    myImages[12].alt = "13/40";
    myImages[13].src = "img/pink_dress2.jpg";
    myImages[13].alt = "14/40";
    myImages[14].src = "img/white_jacket.jpg";
    myImages[14].alt = "15/40";
    myImages[15].src = "img/white_jacket2.jpg";
    myImages[15].alt = "16/40";
    myImages[16].src = "img/bride_dress3.jpg";
    myImages[16].alt = "17/40";
    myImages[17].src = "img/ball_pair.jpg";
    myImages[17].alt = "18/40";
    myImages[18].src = "img/white_dress.jpg";
    myImages[18].alt = "19/40";
    myImages[19].src = "img/white_dress1.jpg";
    myImages[19].alt = "20/40";
    myImages[20].src = "img/red_dress.jpg";
    myImages[20].alt = "21/40";
    myImages[21].src = "img/red_dress2.jpg";
    myImages[21].alt = "22/40";
    myImages[22].src = "img/white_dress_.jpg";
    myImages[22].alt = "23/40";
    myImages[23].src = "img/white_dress_2.jpg";
    myImages[23].alt = "24/40";
    myImages[24].src = "img/tailoring_v.jpg";
    myImages[24].alt = "25/40";
    myImages[25].src = "img/bride_crystals.jpg";
    myImages[25].alt = "26/40";
    myImages[26].src = "img/wd.jpg";
    myImages[26].alt = "27/40";
    myImages[27].src = "img/bride_crystals1.jpg";
    myImages[27].alt = "28/40";
    myImages[28].src = "img/jacket.jpg";
    myImages[28].alt = "29/40";
    myImages[29].src = "img/jacket1.jpg";
    myImages[29].alt = "30/40";
    myImages[30].src = "img/overcoat.jpg";
    myImages[30].alt = "31/40";
    myImages[31].src = "img/overcoat1.jpg";
    myImages[31].alt = "32/40";
    myImages[32].src = "img/halloween_costume.jpg";
    myImages[32].alt = "33/40";
    myImages[33].src = "img/halloween_costume2.jpg";
    myImages[33].alt = "34/40";
    myImages[34].src = "img/chervona_lyce.jpg";
    myImages[34].alt = "35/40";
    myImages[35].src = "img/chervona_spyna.jpg";
    myImages[35].alt = "36/40";
    myImages[36].src = "img/synya_lyce.jpg";
    myImages[36].alt = "37/40";
    myImages[37].src = "img/synya_spyna.jpg";
    myImages[37].alt = "38/40";
    myImages[38].src = "img/red_v.jpg";
    myImages[38].alt = "39/40";
    myImages[39].src = "img/blue_crystals.jpg";
    myImages[39].alt = "40/40";


    var i = 0;
    var current;
    $('img', 'div.gal').each(function () {
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
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                prevSlide();
                break;
            case 39: // right
                nextSlide();
                break;
            case 27: // Esc
                modal.style.display = "none";
                break;

            default:
                return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });
// END GALLERY MODAL
});