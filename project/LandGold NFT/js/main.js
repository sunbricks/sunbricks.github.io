$('.menu_btn').click(function(){
    $('.nav_mo').slideToggle(500);
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