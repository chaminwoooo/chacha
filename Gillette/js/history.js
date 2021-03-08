$(function () {
    var mWidth = $(window).outerWidth();
    // console.log(mWidth)

    $(window).resize(function () {
        mWidth = $(window).outerWidth();
        // console.log("resize " + mWidth);
        init();
    })

    function init() {
        if (mWidth <= 1024) {
            $("header").css("display", "block");
            $(".menu").css("display", "none");

        } else {
            $("header").css("display", "none");
            $(".menu").css("display", "block");
        }
    }

    init();


    // // sub bg 
    if (mWidth > 1024) {
        $(".menu>li").mouseover(function () {
            $(this).each(function (i) {
                if ($(this).eq(i).find(".sub").length > 0) {
                    $(".bg").css("display", "block")
                } else {
                    $(".bg").css("display", "none")
                }
            })
        })

        $(".menu>li").mouseout(function () {
            $(".bg").css("display", "none")
        })
    }
    // subImg
    $(".sub>li").hover(function () {

        $(this).find(".subImg>li").each(function (i) {
            var timer = i * 200;
            $(this).delay(timer).animate({
                "opacity": 1,
                "top": 50
            })
        })

    }, function () {
        $(this).find(".subImg>li").stop(true, false).css({
            "opacity": 0,
            "top": 100
        })
    })

    // scroll
    $(window).scroll(function () {
        scrollY = $(this).scrollTop();
        // console.log("스크롤 : " + scrollY);
        if (mWidth > 1024) {
            // header 
            if (scrollY < 100) {
                $("header").slideUp(500)
            } else {
                $("header").slideDown(500)
            }

        }
    })


    // bladeHistory

    // $(".bladeHistory>ul>li:eq(0)").click(function () {
    //     $("html,body").stop().animate({
    //         scrollTop: ($(".h1900").offset().top) - 100
    //     }, 400)
    // })

    $(".bladeHistory>ul>li").each(function () {
        $(this).click(function () {
            var gIndex = [".h1900", ".h1920", ".h1957", ".h1965", ".h1998", ".h2010", ".h2015", ".h2016"]

            var i = $(this).index()
            console.log(i)

            $("html,body").stop().animate({
                scrollTop: ($(gIndex[i]).offset().top) - 100
            }, 400)
        })
    })


    $("aside").click(function () {
        $("html,body").stop().animate({
            scrollTop: $("html,body").offset().top
        }, 400)
    })


    // --------------------------mobile
    // mobile hambtn
    $(".hamBtn>a").click(function () {

        $(this).toggleClass("active");
        if (
            $(this).hasClass("active")) {
            $(".menu").css("display", "block")
            $(".bg").css("display", "block")
            $(".hamBtn img").attr({
                "src": "images/x.svg",
                "alt": "x-btn"
            })

            $(".menu>li").each(function (i) {
                var timer = i * 200;
                $(this).delay(timer).animate({
                    "opacity": "1",
                    "right": 0
                })
            })

        } else {
            $(".menu").css("display", "none")
            $(".bg").css("display", "none")
            $(".hamBtn img").attr({
                "src": "images/hambtn.svg",
                "alt": "x-btn"
            })

            $(".menu>li").each(function () {
                $(this).stop().animate({
                    "opacity": "0",
                    "right": 100
                })
            })

        }


    })

    // mobile menu

    $(".menu>li>a").click(function (e) {
        e.preventDefault();
        if (mWidth <= 768) {
            $(this).next(".sub").slideToggle(400);
        }
    })

    // 
})