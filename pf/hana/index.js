function MenuEffect__init() {
    var $Enter = $(".main .top-menu");

    $Enter.mouseenter(function () {
        $Enter.addClass("active");
    });

    $Enter.mouseleave(function () {
        $Enter.removeClass("active");
    });
}

function FooterEf() {
    var $Footer = $('.main > .footer > .innerwarp > .until > ul > .two-mu');

    $('.main > .footer > .innerwarp > .until > ul > .two-mu').click(function () {
        if ($Footer.hasClass('active')) {
            $Footer.removeClass('active');
        } else {
            $Footer.addClass('active');
        }
    });
}


function ListClick() {
    $(".main .top-menu >.menu-box ul ul > li").click(function (e) {
        var $this = $(this);
        var hasClass = $this.hasClass("active");

        if (hasClass) {
            $this.removeClass("active");
        } else {
            $this.siblings(".active").find("li.active").removeClass("active");
            $this.siblings(".active").removeClass("active");
            $this.addClass("active");
        }
    });
    e.stopPropagation();
}

function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $(".active-on-visible").each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr("data-active-on-visible-offsetTop", offsetTop);

        if (!$node.attr("data-active-on-visible-diff-x")) {
            $node.attr("data-active-on-visible-diff-x", "0");
        }

        if (!$node.attr("data-active-on-visible-delay")) {
            $node.attr("data-active-on-visible-delay", "0");
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
    $(".active-on-visible:not(.actived)").each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.attr("data-active-on-visible-offsetTop") * 1;
        var diffY = parseInt($node.attr("data-active-on-visible-diff-x"));
        var delay = parseInt($node.attr("data-active-on-visible-delay"));

        var callbackFuncName = $node.attr(
            "data-active-on-visible-callback-func-name"
        );

        if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
            $node.addClass("actived");

            setTimeout(function () {
                $node.addClass("active");
                if (window[callbackFuncName]) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}

function StopHref() {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
}

$(function () {
    ActiveOnVisible__init();
    StopHref();
    FooterEf();
});

$(function () {
    MenuEffect__init();
    ListClick();
});