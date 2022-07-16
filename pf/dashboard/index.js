$(document).ready(function () {

    function MobileSideBar__toggle() {
        var $side_btn = $('.mobile-btn');
        var $mobile_bar = $('.main .menu-box');

        if ($side_btn.hasClass('active')) {
            $mobile_bar.removeClass('active');
            $('.background').removeClass('active');
            $side_btn.removeClass('active');
            $('.main .menu-box').removeClass('active');
            $('.mobile-btn .mb-wrap').removeClass('active');


        } else {
            $mobile_bar.addClass('active');
            $('.background').addClass('active');
            $side_btn.addClass('active');
            $('.main .menu-box').addClass('active');
            $('.mobile-btn .mb-wrap').addClass('active');

        }
    }

    function MobileSideBar__init() {
        $('.mobile-btn, .background').click(MobileSideBar__toggle);

        $('.main .menu-box ul > li').click(function (e) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.top-box .log-box .log-wrap ul li').removeClass('active');
            } else {
                $(this).addClass('active');
                $(this).siblings('.active').find('li.active').removeClass('active');
                $(this).siblings('.active').removeClass('active');
                $('.top-box .log-box .log-wrap ul li').addClass('active');
                $('.top-box .log-box .log-wrap ul li').siblings('.active').find('li.active').removeClass('active');
                $('.top-box .log-box .log-wrap ul li').siblings('.active').removeClass('active');

            }
            e.stopPropagation();
        });
    }

    MobileSideBar__init();


})

$(document).ready(function () {
    var $login = $('.top-box .log-box .log-wrap li');

    $login.click(function (e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $(this).siblings('.active').find('li.active').removeClass('active');
            $(this).siblings('.active').removeClass('active');

        }
        e.stopPropagation();
    });

})