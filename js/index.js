$(document).ready(function () {
    var myTimer;
    /***** slider with partners ****/
    var elements = $('.partners .partner');
    var firstElement = $('.partners .partner:first-child');
    var firstVisible = 6;
    var  leftShift = function(){
        if(firstVisible > 0){
            $(firstElement).animate({
                'margin-left': '+=49.5%'
            }, 600);
            firstVisible -= 3;
        } else {
            $(firstElement).css('margin-left', '-297%');
            firstVisible = elements.length - 6;
            $(firstElement).animate({
                'margin-left': '+=49.5%'
            }, 600);
            firstVisible -= 3;
        }
        $(elements).removeClass('first-visible');
        $(elements).eq(firstVisible).addClass('first-visible');
    };
    var  rightShift = function(){
        if(firstVisible < elements.length - 6){
            $(firstElement).animate({
                'margin-left': '-=49.5%'
            }, 600);
            firstVisible += 3;
        } else {
            $(firstElement).css('margin-left', '0%');
            firstVisible = 0;
            $(firstElement).animate({
                'margin-left': '-=49.5%'
            }, 600);
            firstVisible += 3;
        }
        $(elements).removeClass('first-visible');
        $(elements).eq(firstVisible).addClass('first-visible');
    };
    $('.left-arrow').click(function() {
        clearInterval(myTimer);
        $('.left-arrow').css('visibility', 'hidden');
        leftShift();
        setTimeout(function () {
            $('.left-arrow').css('visibility', 'visible');
        }, 800);
        myTimer = setInterval(forTimer, 6000);
    });
    $('.right-arrow').click(function(){
        clearInterval(myTimer);
        $('.right-arrow').css('visibility', 'hidden');
        rightShift();
        setTimeout(function () {
            $('.right-arrow').css('visibility', 'visible');
        }, 800);
        myTimer = setInterval(forTimer, 6000);
    });
    /*** end of slider with partners ***/
    /***** main slider *****/
    var currentSlide = 0, nextSlide = 1;
    var controls = $('.control');
    var slides = $('.slide');

    var changeSlide = function() {
        $(slides).eq(currentSlide).fadeOut(1000);
        $(slides).eq(nextSlide).fadeIn(1000);
    };

    var forTimer = function(){
        $('.arrow').css('visibility', 'hidden');
        /****main slider******/
        if(currentSlide === 4) {
            nextSlide = 0;
        } else {
            nextSlide = currentSlide + 1;
        }
        changeSlide();
        currentSlide = nextSlide;
        $(controls).removeClass('active');
        $(controls).eq(currentSlide).addClass('active');
        /***** partners ****/
        rightShift();
        setTimeout(function () {
            $('.arrow').css('visibility', 'visible');
        }, 1000);
    };
    myTimer = setInterval(forTimer, 6000);

    $(controls).click(function() {
        if(!$(this).hasClass('active')){
            clearInterval(myTimer);
            nextSlide = $(controls).index(this);
            $('.control').removeClass('active');
            $(this).addClass('active');
            changeSlide();
            currentSlide = nextSlide;
            myTimer = setInterval(forTimer, 6000);
        }
    });
    /***** end of main slider *****/
});