$('.menu_btn').click(function(){
    $('.nav_mo').slideToggle(500);
})


$('project_mo .project_list').hide();
$('.project_mo > .project_list').click(function() {
    if ( $(this).hasClass('active') ) {
        $(this).find('.project_info').stop().slideUp(500);
        $(this).removeClass('active');
    }
    else {
        $(this).find('.project_info').stop().slideDown(500);
        $(this).addClass('active');
    }
});

$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top - 80}, 500);
    });
});
// scroll move

