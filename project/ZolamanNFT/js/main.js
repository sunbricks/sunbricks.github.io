$(window).on('load', function (){
    $("#load").hide();
})

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


$(document).ready(function(){
    $('.menu_btn').on('click', function(){
        $('.menu_bg').show();
        $('.sidebar_menu').show().animate({
            right:0
        });
    });
    
    $('.close_btn').on('click', function(){
            $('.menu_bg').hide(); 
            $('.sidebar_menu').animate({
                right: '-' + 100 + '%'
            },function(){$('.sidebar_menu').hide(); });
            
    });
});

$(document).ready(function($) {
    $(".scroll_move").click(function(event){         
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
// scroll move

$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})
// kilp tab img