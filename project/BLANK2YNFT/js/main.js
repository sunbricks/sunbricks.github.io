$(window).scroll(function(){
    let s = $(window).scrollTop();
    if(s>=1){
        $('#header').css('background-color','rgba(0,0,0,1)');
    } else {
        $('#header').css('background-color','rgba(0,0,0,0)');
    }
});

$('.footer__go-top-button').click(function(){
    $('html,body').animate({
        scrollTop : 0
    });
});

$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
// 페이지 이동


$(document).ready(function(){
    $('.header__burger').click(function(){
        $(this).toggleClass('toggle');
        $('.header__nav').slideToggle(400);
    });

    $('.header__nav-item a').click(function(){
        if ($(window).width() < 1024) {
            $('.header__nav').slideUp(400);
            $('.header__burger').removeClass('toggle');
        }
    });
    
    $(window).resize(function(){
        if($(window).width() >= 1024){
            $('.header__nav').show();
        }
    });
});

$(window).scroll(function(){
    let s = $(window).scrollTop();
    if(s>=700){
        $('.footer__go-top').show();
    } else {
        $('.footer__go-top').hide();
    }
}); 
// 스크롤 top menu