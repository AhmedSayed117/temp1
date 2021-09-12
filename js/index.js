$(document).ready(function (){
    var list = $(".links ul li"),
        menue_list =$(".links-menu ul li");

   list.on("click",function (){
       list.removeClass("active");
         $(this).addClass("active");
   });

    menue_list.on("click",function (){
        menue_list.removeClass("active");
        $(this).addClass("active");
    });


    $(window).on("resize",function (){
       var slider = $(".slider");
       slider.height($(window).height()).width($(window).width());


       slider.css({
           top: - $(".navbar").height()
       });

       $(".overlay").css({
           top:0,
           left:0,
           height : slider.height(),
           width: slider.width()
       });
       $('.s').bxSlider();

       $(".bx-wrapper").css({
           top:((slider.height())/2),
       });

       $(".bx-wrapper p").css({
           marginLeft:((slider.width() - ($(".bx-wrapper p")).width())/2)
       });

       $(".over").height($(".right .box").height()).width($(".right .box").width());
        $(".overl").height($(".testimonials").height()).width($(".testimonials").width());
   });

   $(".navbar .menu").on('click',function (){
       $("links").slideToggle(2000);

   });


    var slider = $(".slider");

    slider.height($(window).height()).width($(window).width());
    slider.css({
        top: - $(".navbar").height()
    });


    $(".overlay").css({
        top:0,
        left:0,
        height : slider.height(),
        width: slider.width()
    });

    $(".s").fadeIn(1000);
    $('.s').bxSlider({
        speed:1500,
    });

    $(".bx-wrapper").css({
       top:((slider.height())/2),
    });

    $(".bx-wrapper p").css({
       marginLeft:((slider.width() - ($(".bx-wrapper p")).width())/2)
    });

    $(".links a").on("click",function (){
        $("html,body").animate({
             scrollTop:+$("#" +$(this).data("value")).offset().top
        },1500) ;
    });

    $(".links-menu a").on("click",function (){
        $("html,body").animate({
            scrollTop:+$("#" +$(this).data("value")).offset().top
        },1500,function (){
            $(".links-menu").fadeOut(1000);
        }) ;
    });

    $(".over").height($(".right .box").height()).width($(".right .box").width());

    $(".navbar .menu").on("click",function (){
       $(".links-menu").slideToggle(1000);
    });

     $(".overl").height($(".testimonials").height()).width($(".testimonials").width());


    (function slider(){
        $(".slid div.active").each(function (){
           if(!$(this).is(":last-child")){
               $(this).delay(3000).fadeOut(2000,function (){
                $(this).removeClass("active").next().addClass("active").fadeIn(2000);
                   slider();
               });
           }else{
               $(this).delay(3000).fadeOut(2000,function (){
                   $(this).removeClass("active");
                   $(".slid div").eq(0).addClass("active").fadeIn(2000);
                   slider();
               });
           }
        });
            console.log("a");

    }());

});