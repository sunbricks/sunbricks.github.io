 // 햄버거 메뉴
function toggleSidebar() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

 // 헤더 스크롤 백그라운드 컬러
$(window).scroll(function(){
    var s = $(window).scrollTop();
    if(s>=1){
        $('#header').css('background-color','rgba(0,0,0, 0.3)');
    } else {
        $('#header').css('background-color','rgba(0,0,0,0.0)');
    }
});

// 페이지 무빙
$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});

// click alert
function btn(){
    alert('곧 공개 예정입니다.');
}
