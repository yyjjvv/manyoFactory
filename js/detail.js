$(function(){
    //Image Tab Click, Image Change
    $(".img_tab1").addClass("on");
    $(".s_pic").click(function(){
        $(".s_pic").parent(".img_tab").removeClass("on");
        $(this).parent(".img_tab").addClass("on");
    });

    //Product Quantity Change
    $(".btn_plus").click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
    $(".btn_minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    //Snap Tab Navigation to Header
    $(document).scroll(function(){
        let scrollTop=$(document).scrollTop();
        let headerT=$("#header").height();
        let pos=$(".prd_des").offset().top-headerT;
        console.log(scrollTop);
        if(scrollTop>=pos){
            $(".tab_nav").css({position:"fixed", top:headerT});
            $("#header").removeClass("shadow");
        }else{
            $(".tab_nav").css({position:"absolute", top:0});
            $("#header").addClass("shadow");
        }
    });

    //Tab Nav Contents Height
    let i;
    let tabH=$(".tab_cont>li").eq(0).height();
    $(".tab_nav>li").eq(0).addClass("on");
    $(".tab_cont>li").eq(0).show();
    $(".tab_cont").height(tabH);
    $(".tab_nav>li").click(function(){
        i=$(this).index();
        console.log(i);
        tabH=$(".tab_cont>li").eq(i).height();
        console.log(tabH);
        $(".tab_nav>li").removeClass("on");
        $(this).addClass("on");
        $(".tab_cont>li").hide();
        $(".tab_cont>li").eq(i).show();
        $(".tab_cont").height(tabH);
    });

    //Description Accordion Effect
    $(".notice_menu").eq(0).children(".accordion").addClass("on");
    $(".notice_menu").eq(0).children("div").children(".list_open").text("-");
    $(".list_open").click(function(){
        if($(this).parent("div").next(".accordion").hasClass("on")==false){
            $(this).text("-");
            $(this).parent("div").next(".accordion").addClass("on");
        }else{
            $(this).text("+");
            $(this).parent("div").next(".accordion").removeClass("on");
        };
    });
});
