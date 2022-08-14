/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if ( !$node.attr('data-active-on-visible-diff-y') ) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if ( !$node.attr('data-active-on-visible-delay') ) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() { 
    $('.active-on-visible:not(.actived)').each(function(index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
            $node.addClass('actived');

            setTimeout(function() {
                $node.addClass('active');
                if ( window[callbackFuncName] ) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}



$(document).ready(function () {
    var $topBar = $(".top-bar");

    var windowHeight = $(window).height();

    $(window).resize(function () {
        windowHeight = $(window).height();
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > windowHeight - 600) {
            $topBar.addClass("white");
        } else {
            $topBar.removeClass("white");
        }
    });
});


/* 기능 */
function SliderK__show($slider, index) {
    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = $slider.find('.slides > div').eq(index);

    $currentSlide.removeClass('active');
    $postSlide.addClass('active');

    $slider.find('.page-nav > div.active').removeClass('active');
    $slider.find('.page-nav > div').eq(index).addClass('active');
}

function SliderK__showPrev($slider) {
    SliderK__showPost($slider, -1);
}

function SliderK__showNext($slider) {
    SliderK__showPost($slider, 1);
}

function SliderK__showPost($slider, change) {
    var $currentSlide = $slider.find('.slides > div.active');
    var $postSlide = null;
    var $firstSlide = $slider.find('.slides > div:first-child');
    var $lastSlide = $slider.find('.slides > div:last-child');

    if (change == 1) {
        $postSlide = $currentSlide.next();

        if ($postSlide.length == 0) {
            $postSlide = $firstSlide;
        }
    } else if (change == -1) {
        $postSlide = $currentSlide.prev();

        if ($postSlide.length == 0) {
            $postSlide = $lastSlide;
        }
    }

    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $('.slider-k').each(function (index, node) {
        var $slider = $(node);

        SliderK__initPageNav($slider);
        SliderK__initSideBtns($slider);
        SliderK__initAutoplay($slider);
    });
}

// 페이지 내비를 자동으로 만들어줍니다.
function SliderK__initPageNav($slider) {
    var currentIndex = $slider.find('.slides > div.active').index();
    var slidesCount = $slider.find('.slides > div').length;

    var html = '';

    for (var i = 0; i < slidesCount; i++) {
        if (i == currentIndex) {
            html += '<div class="active"></div>';
        } else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav">' + html + '</div>';
    $slider.append(html);

    $slider.find('.page-nav > div').click(function () {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns > div').click(function () {
        var index = $(this).index();

        if (index == 0) {
            SliderK__showPrev($slider);
        } else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');

    $slider.data('autoplay-now-work', 'Y');

    $slider.mouseenter(function () {
        $slider.data('autoplay-now-work', 'N');
    });

    $slider.mouseleave(function () {
        $slider.data('autoplay-now-work', 'Y');
    });

    if (autoplay != 'Y') {
        return false;
    }

    var autoplayInterval = $slider.data('autoplay-interval');

    if (typeof autoplayInterval == 'undefined') {
        autoplayInterval = 3000;
    } else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }

    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';

    setInterval(function () {
        if ($slider.data('autoplay-now-work') == 'Y') {
            if (autoplayDirIsLeft) {
                SliderK__showPrev($slider);
            } else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}

// 3페이지 슬라이드 숫자
function currentIndex() {
    var $current = $(".slider-div .slick-active").attr("data-slick-index");
    console.log(parseInt($current) + 1);
    $(".slick-index .current").text(parseInt($current) + 1);
}

function totalIndex() {
    var itemLength = $('.slider-div .item').length;
    console.log(itemLength);
    $(".slick-index .total").text(itemLength);
}

$(function () {
    totalIndex();
    $(".slider-div").slick({
        slide: "div", //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 1500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: false, // 자동 스크롤 사용 여부
        autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부
        slidesToShow: 1,
        variableWidth: true
    });
    $(".slider-div").on("afterChange", currentIndex);
    currentIndex();
});

// 4페이지- 스와이퍼 슬라이드 
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 80,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable:true,
        }
    });
});


/* 발견되면 활성화시키는 라이브러리 끝 */


// a태그 상위로 올라가는것 막기
function StopHref() {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
}

// $(function() {

// })
$(function () {
    SliderK__init();
    StopHref();
    ActiveOnVisible__init();
})


