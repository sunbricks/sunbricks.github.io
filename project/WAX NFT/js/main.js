$('.info_text').hide();
$('.inc_acodian > .acodian_list').click(function() {
    if ( $(this).hasClass('active') ) {
        $(this).find('.info_text').stop().slideUp(500);
        $(this).removeClass('active');
    }
    else {
        $(this).find('.info_text').stop().slideDown(500);
        $(this).addClass('active');
    }
});
// FAQ 아코디언

const button=()=> {
    const burger = document.querySelector('.burger_menu'); 
    //burger class 가져오기
    const menu = document.querySelector('.nav_bar');
    burger.addEventListener('click', ()=> {
        // click event
        burger.classList.toggle('toggle');
        menu.classList.toggle('active');
    });
}
button();

$('.nav_M').hide();
$('.burger_menu').click(function(){
    $('.nav_M').slideToggle(400);
});
// 모바일 헤더

$('.go_top').click(function(){
    $('html,body').animate({
        scrollTop : 0
    });
});
// go_top button


$(window).scroll(function(){
    var s = $(window).scrollTop();

    if(s>=700){
        $('.go_top').show();
    } else {
        $('.go_top').hide();
    }
}); 
// 스크롤 top menu

$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });

});
