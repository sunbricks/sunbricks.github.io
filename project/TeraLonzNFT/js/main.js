// 헤더 네비게이션 토글 (버거 버튼 클릭 시)
$('.header__burger').click(function(){
    $('.header__nav').slideToggle(500);
});

// 햄버거 메뉴 열고 닫기 효과
$(document).ready(function(){
    $(".header__burger-menu").click(function(){
        $(".header__burger-menu").hide();
        $(".header__burger-close").show();
    });
    $(".header__burger-close").click(function(){
        $(".header__burger-close").hide();
        $(".header__burger-menu").show();
    });
});

$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
// page move

$(window).scroll(function(){
    var s = $(window).scrollTop();
    if(s>=1){
        $('#header').css('background-color','rgba(0,0,0,0.8)');
    } else {
        $('#header').css('background-color','rgba(0,0,0,0)');
    }
});

$('.footer__go-top').click(function(){
    $('html, body').animate({
        scrollTop: 0
    });
});

$(window).scroll(function(){
    let s = $(window).scrollTop();
    if (s >= 700) {
        $('.footer__go-top').show();
    } else {
        $('.footer__go-top').hide();
    }
});

$('.story__slider').slick({
    arrows : true,
    autoplay : true,
    autoplaySpeed : 5000,
    speed : 800,
    dots : true,
});

$('.team__profiles').hide();
$('.team__group > .team__member').click(function() {
    if ($(this).hasClass('active')) {
        $(this).find('.team__profiles').stop().slideUp(500);
        $(this).removeClass('active');
    } else {
        $(this).find('.team__profiles').stop().slideDown(500);
        $(this).addClass('active');
    }
});
// incruit acodian event



$('.faq__answer-list').hide();
$(document).ready(function(){
    $('.faq__list > .faq__item').click(function() {
        if ($(this).hasClass('active')) {
        $(this).find('.faq__answer-list').stop().slideUp(500);
        $(this).removeClass('active');
        } else {
        $(this).find('.faq__answer-list').stop().slideDown(500);
        $(this).addClass('active');
        }
    });
});

// incruit acodian event

function btn(){
    alert('Coming Soon!!');
}
// click alert


