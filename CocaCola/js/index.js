$(function () {
    $(".menuBtn a").click(function () {
        $(this).toggleClass("active");
        if ($(".menuBtn a").hasClass("active")) {
            $(".menu").css("display", "block")
        } else {
            $(".menu").css("display", "none")
        }
    })

    // document.querySelector(".rightArrow").addEventListener("click", function () {
    //     document.querySelector(".event").style.transform = "translate(-eWidth+'px')"
    // })

    $("body").on("click", function (e) {
        e.preventDefault()
    })

    let showBanner = 0;
    let eWidth = $(".event li").outerWidth();
    console.log(eWidth);
    let liCount = $(".event>li").length;
    console.log(liCount);

    function moveBanner() {

        $(".event").stop().animate({
            "marginLeft": -showBanner * eWidth
        })
    }

    $(".icon-right").on("click", function () {
        if (showBanner < liCount - 3) {
            showBanner++;
        }
        console.log(showBanner)
        moveBanner()

    })

    $(".icon-left").on("click", function () {
        if (showBanner > 0) {
            showBanner--;
        }
        moveBanner()
    })


    $(window).resize(function () {
        // event Banner 
        let showBanner = 0;
        let eWidth = $(".event li").outerWidth();
        console.log(eWidth);
        let liCount = $(".event>li").length;
        console.log(liCount);

        function moveBanner() {

            $(".event").stop().animate({
                "marginLeft": -showBanner * eWidth
            })
        }

        $(".icon-right").on("click", function () {
            if (showBanner < liCount - 3) {
                showBanner++;
            }
            console.log(showBanner)
            moveBanner()

        })

        $(".icon-left").on("click", function () {
            if (showBanner > 0) {
                showBanner--;
            }
            moveBanner()
        })

    })



})