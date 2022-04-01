window.onload=function(){
    let myAgent=navigator.userAgent.toLowerCase();
    let mobile=['iphone', 'ipad', 'android', 'blackberry', 'window ce', 'nokia'];
    for(let i=0; i<mobile.length; i++){
        if(myAgent.indexOf(mobile[i])>=0){
            // location.href="http://yyjjvv.dothome.co.kr/m/manyo_factory";
            location.href="http://yyjjvv.com/m/manyo_factory";
        };
    };
};

$(function(){
    //Search Panel Show
    $(".search").click(function(e){
        e.preventDefault();
        $(".srch_win").show();
    });
    $(".srch_win").hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });

    //Filter Window Show
    $(".filter").click(function(e){
        e.preventDefault();
        $(".filter_win").show();
    });
    $(".filter_win").hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });

    //Shopping Bag Window Show
    $(".shopping_b").click(function(e){
        e.preventDefault();
        $(".sb_win").show();
    });
    $(".sb_win").hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });

    //Footer Brand Site Nav
    $(".brand_site").click(function(){
        if($(".ftr_lnb").hasClass("on")==false){
            $(".ftr_lnb").addClass("on");
            $(".brand_site i").css({transform:"rotate(180deg)"});
        }else{
            $(".ftr_lnb").removeClass("on");
            $(".brand_site i").css({transform:"rotate(0deg)"});
        };
    });

    //Side Button_ History Window Show
    $(".history").hover(function(){
        $(".history_win").show();
    },function(){
        $(".history_win").hide();
    });

    //Side Button_ 'Go To Top' Button
    $(window).scroll(function(){
        let Top=$(document).scrollTop();
        let winH=$(window).height();
        if(Top>=winH/2){
            $(".side_btn").fadeIn(200);
        }else{
            $(".side_btn").fadeOut(200);
        }
    });
    $(".btn_top").on("click", function(e){
        e.preventDefault();
        $("html,body").stop().animate({scrollTop:0},500);
    });
});
