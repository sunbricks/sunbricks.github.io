


$('.head_burger_menu').click(function(){
    $('.navbar').slideToggle(500);
})

// $('.close').click(function(){
//     $('.navbar').slideUp(500);
// })


$('.main_Slide').slick({
    arrows : true,
    autoplay : true,
    autoplaySpeed : 3000,
    speed : 800,
    dots : true,
});
// main slide



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
// incruit acodian event


$('.team_text').hide();
$('.inc_acodian_team > .acodian_list_team').click(function() {
    if ( $(this).hasClass('active') ) {
        $(this).find('.team_text').stop().slideUp(500);
        $(this).removeClass('active');
    }
    else {
        $(this).find('.team_text').stop().slideDown(500);
        $(this).addClass('active');
    }
});
// incruit acodian event


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

$(window).scroll(function(){
    var s = $(window).scrollTop();
    if(s>=1){
        $('#header').css('background-color','rgba(0,0,0,0.8)');
    } else {
        $('#header').css('background-color','rgba(0,0,0,0)');
    }
});


$(window).scroll(function(){

    var s = $(window).scrollTop();

    if(s>=700){
        $('.go_top').show();
    } else {
        $('.go_top').hide();
    }
});


$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
// page move


// $(window).resize(function() {
//     $(".navbar > .nav > li > a ").click(function(event){
//         if($(window).width() < 1300) { 
//             $('.navbar').slideUp(500);
//         }
//     })
// });
// // mobile navbar slideup

$(document).ready(function(){
    $(".burger_menu").click(function(){
        $(".burger_menu").hide()
        $(".burger_menu_close").show()
    })
    $(".burger_menu_close").click(function(){
        $(".burger_menu_close").hide()
        $(".burger_menu").show()
    })
})



function btn(){
    alert('Coming Soon!!');
}
// click alert



setInterval(function(){
    if($(".big_door").prop("ended")){
        $('main_door_video > video').hide()
        $('main_door_enter > button').css('display','block')
      //영상종료 후 진행할 함수 입력부분
    }
  },200);


