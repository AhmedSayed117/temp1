$("body").niceScroll({
    cursorcolor:"#1abc9c",
    cursorwidth:"7px",
    cursorborder:"none",
    zindex: [9999]
});

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
        $(".boxs .Box .ov").height($(".boxs img").height()).width($(".boxs img").width());
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

    }());

    $(".boxs .Box .ov").height($(".boxs .Box img").height()).width($(".boxs .Box img").width());


    $(".boxs .Box img").on({
        mouseenter :function (){
            console.log($(this).next().firstChild);
            $(this).next().css({
                display: "block",
                backgroundColor: "#1abc9c",
                opacity: "70%",
                overflow: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
            });
            (function (){
                $("div.ov").fadeOut(3000);
            }())
         },
    });

});