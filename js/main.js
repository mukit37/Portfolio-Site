$(document).ready(function(){ 
    var $grid = $('.portfolio-items').isotope({});

    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.portfolio-menu').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

});

$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#scroll').addClass('scroll-show');
    }else{
        $('#scroll').removeClass('scroll-show');
    }
})

$('#scroll').click(function(){
    $('html, body').animate({
        screenTop:0
    },2000)
});









