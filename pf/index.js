$(document).ready(function () {
    var select = function (s) {
            return document.querySelector(s);
        },
        liquidFront = select('.liquidFront'),
        liquidMaskGroup = select('.liquidMaskGroup'),
        liquidBack = select('.liquidBack'),
        bubble0 = select('.bubble0'),
        bubble1 = select('.bubble1'),
        bubble2 = select('.bubble2'),
        bubble3 = select('.bubble3'),
        bubble4 = select('.bubble4'),
        pop = select('.pop'),
        bubblePop0 = select('.bubblePop0'),
        bubblePop1 = select('.bubblePop1'),
        bubblePop2 = select('.bubblePop2'),
        liquidBubblesGroup = select('.liquidBubblesGroup');
    var xLink = "http://www.w3.org/1999/xlink";
    var pop1 = pop.cloneNode(true);
    var pop2 = pop.cloneNode(true);
    liquidMaskGroup.appendChild(pop1);
    liquidMaskGroup.appendChild(pop2);

    var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

    if (!isDevice) {

        TweenMax.set(liquidBubblesGroup, {
            filter: 'url(#goo)',
            '-webkit-filter': 'url(#goo)'
        })
    }


    var mainTimeline = new TimelineMax();

    var frontLiquidTimeline = new TimelineMax({
        repeat: -1
    });
    frontLiquidTimeline.to(liquidFront, 4, {
        x: -600,
        ease: Linear.easeNone
    })

    var backLiquidTimeline = new TimelineMax({
        repeat: -1
    });
    backLiquidTimeline.from(liquidBack, 4, {
        x: -700,
        ease: Linear.easeNone
    })


    function getBetweenVal(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});


// 페이지 2 슬라이드 
function Carousel1__onTranslated() {
    $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');

    $('.carousel-1').data('carousel-1-autoplay-status', 'Y');

    var no = $('.carousel-1 .owl-item.active.center > .item').attr('data-no') * 1;

    $('.carousel-2 > .owl-carousel').trigger('to.owl.carousel', [no - 1]);
    $('.carousel-2 .owl-item > .item.active').removeClass('active');
    $('.carousel-2 .owl-item > .item[data-no="' + no + '"]').addClass('active');
}

function Carousel1__init() {
    // 데이터 개수 적어두기
    var totalItemNo = $('.carousel-1 .item').length;
    $('.carousel-1').data('total-items', totalItemNo);

    // 각 아이템에 번호 매기기
    $('.carousel-1 .item').each(function (index, node) {
        $(node).attr('data-no', index + 1);
    });

    $('.carousel-1 > .owl-carousel').owlCarousel({
        autoplay: false, // 오토 플레이
        loop: false, // 끝에서 다시 처음으로 시작
        dots: false,
        margin: 0,
        center: true,
        mouseDrag: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            }
        },
        autoplayHoverPause: false,
        /* 필수 */
        onTranslated: Carousel1__onTranslated,
    });

    $('.carousel-1 .play').on('click', function () {
        $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');

        $('.carousel-1').data('carousel-1-autoplay-status', 'Y');
    });

    $('.carousel-1 .stop').on('click', function () {
        $('.carousel-1 > .owl-carousel').trigger('stop.owl.autoplay');

        $('.carousel-1').data('carousel-1-autoplay-status', 'N');
    });
}


/* 캐러셀 2 */
function Carousel2__itemClicked(el) {
    var $el = $(el);

    var no = $el.attr('data-no') * 1;
    var currentNo = $('.carousel-1 .owl-item.active > .item').attr('data-no') * 1;

    console.log('no : ' + no);
    console.log('currentNo : ' + currentNo);

    if (no != currentNo) {
        $('.carousel-1 > .owl-carousel').trigger('to.owl.carousel', [no - 1, 100]);
    }
}

function Carousel2__onTranslated() {
    $('.carousel-2 > .owl-carousel').trigger('play.owl.autoplay');

    $('.carousel-2').data('carousel-2-autoplay-status', 'Y');
}

function Carousel2__init() {
    // 데이터 개수 적어두기
    var totalItemNo = $('.carousel-2 .item').length;
    $('.carousel-2').data('total-items', totalItemNo);

    // 각 아이템에 번호 매기기
    $('.carousel-2 .item').each(function (index, node) {
        $(node).attr('data-no', index + 1);
    });

    $('.carousel-2 > .owl-carousel').owlCarousel({
        autoplay: false, // 오토 플레이
        loop: false, // 끝에서 다시 처음으로 시작
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        center: true,
        // navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            }
        },
        autoplayHoverPause: false,
        /* 필수 */
        onTranslated: Carousel2__onTranslated,
    });

    $('.carousel-2 .play').on('click', function () {
        $('.carousel-2 > .owl-carousel').trigger('play.owl.autoplay');

        $('.carousel-2').data('carousel-2-autoplay-status', 'Y');
    });

    $('.carousel-2 .stop').on('click', function () {
        $('.carousel-2 > .owl-carousel').trigger('stop.owl.autoplay');

        $('.carousel-2').data('carousel-2-autoplay-status', 'N');
    });
}


/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(_.debounce(ActiveOnVisible__initOffset, 500));
    ActiveOnVisible__initOffset();

    $(window).scroll(_.debounce(ActiveOnVisible__checkAndActive, 50));
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible:not(.actived)').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if (!$node.attr('data-active-on-visible-diff-y')) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if (!$node.attr('data-active-on-visible-delay')) {
            $node.attr('data-active-on-visible-delay', '0');
        }

        var diffY = $node.attr('data-active-on-visible-diff-y');
        var delay = $node.attr('data-active-on-visible-delay');

        if (diffY.substr(-2, 2) == 'vh') {
            diffY = parseInt(diffY);

            diffY = diffY * $(window).height() / 100;
        } else if (diffY.substr(-1, 1) == '%') {
            diffY = parseInt(diffY);

            diffY = diffY * $node.height() / 100;
        } else {
            diffY = parseInt(diffY);
        }

        $node.data('data-active-on-visible-diff-y', diffY);
        $node.data('data-active-on-visible-delay', delay);
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
    $('.active-on-visible:not(.actived)').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.data('data-active-on-visible-diff-y'));
        var delay = parseInt($node.data('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var nodeHeight = $node.height();

        if (scrollTop + windowHeight + diffY > offsetTop) {
            setTimeout(function () {
                $node.addClass('active');

                if ($node.hasClass('active-only-one')) {
                    $node.addClass('actived');
                }

                if (window[callbackFuncName]) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        } else {
            $node.removeClass('active');
        }
    });
}

$(function () {
    ActiveOnVisible__init();
})

$(function () {
    Carousel1__init();
    Carousel2__init();
});