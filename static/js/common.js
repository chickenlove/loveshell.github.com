$(document).ready(function(){
    $('.dropdown-toggle').dropdownHover();
    var $nav = $('.navigation');
    if($nav.data('isfix') != false){
        $(window).scroll(function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 0){
                $nav.addClass('fx-nav')
            }else{
                $nav.removeClass('fx-nav')
            }
        });
    }
});