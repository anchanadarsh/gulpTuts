// All custom codes with comment

$(document).ready(function () {
    //banner effect
    $("#banner .banner-inner h1 span").addClass("animated");
    $("#banner .banner-inner h1 span").mouseover(function () {
        $("#banner .banner-inner h1 span").removeClass("shake");
        $(this).addClass("shake");
    });

    //modal bg blur effect
    $("#mywork").on("click", ".zoom-modal", function () {
        $(".makeblur").css("filter", "blur(25px)");
    });
    $(".project-modal-outer").on("click", ".mod-close", function () {
        $(".makeblur").css("filter", "blur(0px)");
    });


    //switch button effect
    $(".switch-on-off-button").click(function () {
        $(".light-off-overlay").toggleClass("oz-0");
        $(this).toggleClass("switch-color-red");
        $(".switch-on-shadow").toggleClass("switch-color-red");
        $(".switch-on-off-button p").html("Switch On");
        $(".switch-color-red p").html("Switch Off");
        $(this).css("top", "35px");
        $(".switch-on-shadow").css("top", "2px");
        setTimeout(function () {
            $(".switch-on-off-button").css("top", "30px");
            $(".switch-on-shadow").css("top", "7px");
        }, 100);
    });


    //skill-hover-effect
    $("#myskills").on("mouseover", ".skill-box-out", function () {
        var getcolor = $(this).find("img").attr("setcolor");
        //        $(".skill-box img").addClass("bnw");
        //        $(this).find("img").addClass("invert-transform");
        $(".skill-overlay-bg").css("background", getcolor);
    });
    $("#myskills").on("mouseout", ".skill-box-out", function () {
        $(".skill-box img").removeClass("bnw");
        $(this).find("img").removeClass("invert-transform");
        $(".skill-overlay-bg").css("background", "transparent");
    });

});
