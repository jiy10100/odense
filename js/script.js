$(document).ready(function(){
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        if( sct >= 300){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
    });
    
    const btn = $('.top-btn');
    btn.click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    var swiper = new Swiper(".best", {

        // slidesPerView: 4,
        // spaceBetween: 20,
        loop:true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            1000:{
                slidesPerView: 4,
                spaceBetween: 20,
            },
            900:{
                slidesPerView: 3,
                spaceBetween: 20,
            },
            800:{
                spaceBetween: 20,
                slidesPerView: 2,
            }
        }
          
    });
  const ww = $(window).width();

    if(ww > 1000){
        var swiper = new Swiper(".banner-img", {
            loop: true,
            autoplay:{
                delay:2800,
            }
        });
    }else{

    }
    
    $('.main-menu > li').mouseenter(function(){
        $(this).children('.sub-menu').addClass('active');
        $(this).siblings().children('.sub-menu').removeClass('active');
    });

      $('.sub-menu').mouseleave(function(){
        $(this).removeClass('active');
      });


    //sec-1 data-image 변경
    $('.sec-b li').mouseenter(function(){
        const bgImg = $(this).attr('data-image');
        $('.sect-1.sect-img').css({
            backgroundImage : `url(${bgImg})`
        });
    });
    $('.sec-b li').mouseleave(function(){
        $('.sect-1.sect-img').css({
            backgroundImage : ``
        });
    });

    $('#hamburger').click(function(){
        $(this).toggleClass('hamburger');
        $('.main-menu').toggleClass('active');
    });
});