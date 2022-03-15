$(document).ready(function(){
    $('.design_icon').click(function(){
        $('.design_icon').hide();
        $('.design_text').show();
    });
    $('.design_text').click(function(){
        $('.design_icon').toggle();
        $('.design_text').toggle();
    });
    $('.dev_icon').click(function(){
        $('.dev_icon').hide();
        $('.dev_text').show();
    });
    $('.dev_text').click(function(){
        $('.dev_icon').toggle();
        $('.dev_text').toggle();
    });
    $('.product_icon').click(function(){
        $('.product_icon').hide();
        $('.product_text').show();
    });
    $('.product_text').click(function(){
        $('.product_icon').toggle();
        $('.product_text').toggle();
    });

    $('.work_4').hover(function(){
        $('#black').css('opacity',1).fadeIn(20000);
    }, function(){
        $('#black').css('opacity',0).fadeOut();
    });
    $('.work_3').hover(function(){
        $('#mighty_ontario').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#mighty_ontario').css('opacity',0).fadeOut();
    });
    $('.work_2').hover(function(){
        $('#orange_oblique').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#orange_oblique').css('opacity',0).fadeOut();
    });
    $('.work_1').hover(function(){
        $('#blogs').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#blogs').css('opacity',0).fadeOut();
    });
    $('.work_5').hover(function(){
        $('#portfolio').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#portfolio').css('opacity',0).fadeOut();
    });
    $('.work_6').hover(function(){
        $('#dashboard').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#dashboard').css('opacity',0).fadeOut();
    });
    $('.work_7').hover(function(){
        $('#burned').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#burned').css('opacity',0).fadeOut();
    });
    $('.work_8').hover(function(){
        $('#giraffe').css('opacity',1).fadeIn(2000);
    }, function(){
        $('#giraffe').css('opacity',0).fadeOut();
    });


});
