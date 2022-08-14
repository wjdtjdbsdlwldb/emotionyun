function mobileSideBar__toggle() {
    $(".main-top .logo > button > span").click(function () {
        var $toggle = $(".side-toggle");
        var $btn = $(".main-top .logo > .toggle > .open");
        var $close = $(".main-top .logo > .toggle > .exe");

        if ($toggle.hasClass("active")) {
            $toggle.removeClass("active");
            $close.removeClass("active");
        } else {
            $toggle.addClass("active");
            $btn.addClass("active");
        }
    });
}

function MobileSideBar__init() {
    $(".side-toggle ul > li").click(function (e) {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
            $(this).siblings(".active").removeClass("active");
        }
        e.stopPropagation();
    });
}

$(function () {
    mobileSideBar__toggle();
    MobileSideBar__init();
});