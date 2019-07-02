// $(document).ready(function(){
//     $(".nav1>ul>li").mouseover(function(){
//         $(this).children(".ul1").show();
//     })
//     $(".nav1>ul>li").mouseout(function(){
//         $(this).children(".ul1").hide();
//     })
// })
$(document).ready(function(){
    $(".nav1>ul>li>a#sss").mouseenter(function(){
        $(".bbb").animate({"margin-top":"0px"},300);
    })
    $(".nav1>ul>li").mouseleave(function(){
        $(".bbb").animate({"margin-top":"280px"},10);
    })
    $(".nav1>ul>li>a#sss1").mouseenter(function(){
        $(".ccc").animate({"margin-top":"0px"},300);
    })
    $(".nav1>ul>li").mouseleave(function(){
        $(".ccc").animate({"margin-top":"280px"},10);
    })
    $(".nav1>ul>li>a#sss2").mouseenter(function(){
        $(".ddd").animate({"margin-top":"0px"},300);
    })
    $(".nav1>ul>li").mouseleave(function(){
        $(".ddd").animate({"margin-top":"280px"},10);
    })
    $(".nav1>ul>li>a#sss3").mouseenter(function(){
        $(".eee").animate({"margin-top":"0px"},300);
    })
    $(".nav1>ul>li").mouseleave(function(){
        $(".eee").animate({"margin-top":"280px"},10);
    })
})
$(document).ready(function(){
    $(".index-photos a").mouseenter(function(){
        $(this).siblings().show();
        $(".mask>h3").fadeIn(1000);
        $(this).stop().animate({"width":"224px","height":"189px"},600);
    })
    $(".mask").mouseleave(function(){
        $(this).hide();
        $(".mask>h3").fadeOut(100);
        $(".index-photos img").animate({"width":"204px","height":"179px"},100);
    })
})
$(document).ready(function(){
    $(".gs").mouseenter(function(){
        $(this).children("div").css("color","#fff");
        $(this).children("p").css("color","#000");
        $(this).css("background","#F73859");
        $(this).animate({"margin-top":"-20px"})
    })
    $(".gs").mouseleave(function(){
        $(".gs>div").css("color","#f73859");
        $(".gs>p").css("color","#7a7a7b");
        $(this).css("background","rgba(225,225,225,0)");
        $(this).animate({"margin-top":"0px"})
    })
})