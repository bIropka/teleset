        $(document).ready(function () {
            var myTimer;
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
                rightShift2();
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

            /***** sliders with partners ****/
            /****** slider-1 *******/
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
            /****** slider-2 *******/
            var elements2 = $('.partners-2 .partner');
            var firstElement2 = $('.partners-2 .partner:first-child');
            var firstVisible2 = 6;
            var  leftShift2 = function(){
                if(firstVisible2 > 0){
                    $(firstElement2).animate({
                        'margin-left': '+=49.5%'
                    }, 600);
                    firstVisible2 -= 3;
                } else {
                    $(firstElement2).css('margin-left', '-297%');
                    firstVisible2 = elements2.length - 6;
                    $(firstElement2).animate({
                        'margin-left': '+=49.5%'
                    }, 600);
                    firstVisible2 -= 3;
                }
                $(elements2).removeClass('first-visible');
                $(elements2).eq(firstVisible2).addClass('first-visible');
            };
            var  rightShift2 = function(){
                if(firstVisible2 < elements2.length - 6){
                    $(firstElement2).animate({
                        'margin-left': '-=49.5%'
                    }, 600);
                    firstVisible2 += 3;
                } else {
                    $(firstElement2).css('margin-left', '0%');
                    firstVisible2 = 0;
                    $(firstElement2).animate({
                        'margin-left': '-=49.5%'
                    }, 600);
                    firstVisible2 += 3;
                }
                $(elements2).removeClass('first-visible');
                $(elements2).eq(firstVisible2).addClass('first-visible');
            };
            $('.left-arrow-2').click(function(){
                clearInterval(myTimer);
                $('.left-arrow-2').css('visibility', 'hidden');
                leftShift2();
                setTimeout(function () {
                    $('.left-arrow-2').css('visibility', 'visible');
                }, 800);
                myTimer = setInterval(forTimer, 6000);
            });
            $('.right-arrow-2').click(function(){
                clearInterval(myTimer);
                $('.right-arrow-2').css('visibility', 'hidden');
                rightShift2();
                setTimeout(function () {
                    $('.right-arrow-2').css('visibility', 'visible');
                }, 800);
                myTimer = setInterval(forTimer, 6000);
            });
        });