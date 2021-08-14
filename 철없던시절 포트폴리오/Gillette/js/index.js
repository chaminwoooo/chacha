$(function () {
    var mWidth = $(window).outerWidth();
    var scrollY = 0;
    var kindTop = $(".kind").offset().top
    var advisorTop = $(".advisor").offset().top
    var hBannerTop = $(".halfBanner").offset().top

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
            $(".banner").css({
                "background-image": "url(images/m_startkit.jpg)"
            })
            $(".banner a").removeClass("btn-outline-light").addClass("btn-outline-gillette")
        } else {
            $("header").css("display", "none");
            $(".menu").css("display", "block");
            $(".banner").css({
                "background-image": "url(images/banner.webp)"
            })

            $(".banner a").addClass("btn-outline-light").removeClass("btn-outline-gillette")
        }
    }

    init();

    // dArrow
    $(".dArrow>a").click(function () {
        $("html,body").stop().animate({
            scrollTop: $(".kindBox").offset().top
        }, 400)
    })

    // // sub bg 
    if (mWidth > 1024) {
        $(".menu>li").mouseover(function () {
            $(this).each(function (i) {
                if ($(this).eq(i).find(".sub").length > 0) {
                    $(".bg").css("display", "block")
                    // $(".bg").slideDown(400)
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
            if (scrollY < 1) {
                $("header").slideUp(500)
            } else {
                $("header").slideDown(500)
            }

            // kind
            if (scrollY > kindTop - 50) {
                $(".kindBox>li").each(function (i) {
                    var timer = i * 300;
                    // console.log(timer);
                    $(this).delay(timer).animate({
                        "opacity": 1,
                        "top": 0
                    }, 500)
                })
            }

            // halfBanner
            if (scrollY > advisorTop) {
                $(".halfBanner").stop().animate({
                    "opacity": 1,
                    "top": 0
                })
            }

            // Tip
            if (scrollY > hBannerTop) {
                $(".tip").stop().animate({
                    "opacity": 1,
                    "top": 0
                })
            }

            if (scrollY < 200) {
                $(".kindBox>li").stop(true, false);
                $(".kindBox>li").css({
                    "opacity": 0,
                    "top": "80px"
                })
                $(".halfBanner,.tip").css({
                    "opacity": 0,
                    "top": "20px"
                })
            }
        } else {
            $(".kindBox,.halfBanner,.tip").css({
                "opacity": 1,
                "top": "0"
            })
        }
        // scrollend
    })

    $("aside").click(function () {
        $("html,body").stop().animate({
            scrollTop: $("html,body").offset().top
        }, 400)
    })

    // --------------------------mobile
    // mobile hambtn
    $(".hamBtn>a").click(function (e) {
        e.preventDefault(e)

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
        if (mWidth <= 1024) {
            $(this).next(".sub").slideToggle(400);
            // e.preventDefault();
        }
    })


    // 
})