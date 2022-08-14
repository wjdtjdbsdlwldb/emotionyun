function FullPage() {
    var myFullpage = new fullpage('#fullpage', {
        scrollingSpeed: 1000,
        scrollBar: true,
        verticalCentered: false
    });
}

function HoverEffect__init() {
    var $Hover = $('.main > .header > .top-bar >.lan-box > .lan');

    $Hover.mouseenter(function(){
        $Hover.addClass('active');
    });

    $Hover.mouseleave(function(){
        $Hover.removeClass('active');
    });
}


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
    
    if ( change == 1 ) {
        $postSlide = $currentSlide.next();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $firstSlide;
        }
    }
    else if ( change == -1 ) {
        $postSlide = $currentSlide.prev();
        
        if ( $postSlide.length == 0 ) {
            $postSlide = $lastSlide;
        }
    }
    
    SliderK__show($slider, $postSlide.index());
}

/* 초기화 */
function SliderK__init() {
    $('.slider-k').each(function(index, node) {
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
        
    for ( var i = 0; i < slidesCount; i++ ) {
        if ( i == currentIndex ) {
            html += '<div class="active"></div>';
        }
        else {
            html += '<div></div>';
        }
    }

    html = '<div class="page-nav">' + html + '</div>';
    $slider.append(html);
    
    $slider.find('.page-nav > div').click(function() {
        SliderK__show($slider, $(this).index());
    });
}

// 사이드 버튼에 이벤트를 겁니다.
function SliderK__initSideBtns($slider) {
    $slider.find('.side-btns > div').click(function() {
        var index = $(this).index();
        
        if ( index == 0 ) {
            SliderK__showPrev($slider);
        }
        else {
            SliderK__showNext($slider);
        }
    });
}

function SliderK__initAutoplay($slider) {
    var autoplay = $slider.data('autoplay');
    
    $slider.data('autoplay-now-work', 'Y');
    
    $slider.mouseenter(function() {
        $slider.data('autoplay-now-work', 'N');
    });
    
    $slider.mouseleave(function() {
        $slider.data('autoplay-now-work', 'Y');
    });
    
    if ( autoplay != 'Y' ) {
        return false;
    }
    
    var autoplayInterval = $slider.data('autoplay-interval');
    
    if ( typeof autoplayInterval == 'undefined' ) {
        autoplayInterval = 3000;
    }
    else {
        // 문자열을 숫자화
        autoplayInterval = autoplayInterval * 1;
    }
    
    var autoplayDirIsLeft = $slider.data('autoplay-dir') == 'left';
    
    setInterval(function() {
        if ( $slider.data('autoplay-now-work') == 'Y' ) {
            if ( autoplayDirIsLeft ) {
                SliderK__showPrev($slider);
            }
            else {
                SliderK__showNext($slider);
            }
        }
    }, autoplayInterval);
}

/*
function ListClick() {
    $(".main>.header> .menu-box > ul > li").click(function (e) {
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
*/

/* 자동 높이 조절 */
function menuHeight__init(){
    $(document).ready(function(){
        $(".main > .header > .menu-box > ul > li > ul").each(function(){
            var $this = $(this);
            var $parent = $this.parent();

            $parent.data('data-sub-menu-height', $this.outerHeight());
            console.log($parent.data('data-sub-menu-height'));
            $this.css('height',0);

            //$this.css('height',0);
        });
    })

    $(".main>.header> .menu-box > ul > li").click(function(){
        var $this = $(this);
        var menuHeight = $this.data('data-sub-menu-height');

        if( $this.hasClass("active") ){
            $(".main>.header> .menu-box > ul > li").removeClass("active")
            $(".main>.header> .menu-box > ul > li > ul").css('height', 0);
        }
        else {
            $this.addClass("active");
            $(".main>.header> .menu-box > ul > li > ul").css('height', 0);
            $this.find('> ul').css('height', menuHeight);
        }
    })
}

// 2페이지  -슬라이드

function Carousel1__onTranslated() {
    // $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');
    
    // $('.carousel-1').data('carousel-1-autoplay-status', 'Y');
    
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
    $('.carousel-1 .item').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.carousel-1 > .owl-carousel').owlCarousel({
        autoplay:false, // 오토 플레이
        loop:true, // 끝에서 다시 처음으로 시작
        dots:true,
        margin:0,
        smartSpeed:700,
        navSpeed:800,
        center:true,
        mouseDrag:false,
        nav:true,
        navText:["<img src='https://wjdtjdbsdlwldb.github.io/img1/blog/article/si/btn_roll_image_prev.png?dummy123123'>","<img src='https://wjdtjdbsdlwldb.github.io/img1/blog/article/si/btn_roll_image_next.png?dummy123123'>"],
        responsive:{
            0:{
                items:1
            }
        },
        autoplayHoverPause:false, /* 필수 */
        onTranslated: Carousel1__onTranslated,
    });

    // $('.carousel-1 .play').on('click',function(){
    //     $('.carousel-1 > .owl-carousel').trigger('play.owl.autoplay');

    //     $('.carousel-1').data('carousel-1-autoplay-status', 'N');
    // });

    $('.carousel-1 .stop').on('click',function(){
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
 
    if ( no != currentNo ) {
        $('.carousel-1 > .owl-carousel').trigger('to.owl.carousel', [no - 1, 100]);
    }
}

// function Carousel2__onTranslated() {
//     $('.carousel-2 > .owl-carousel').trigger('play.owl.autoplay');
    
//     $('.carousel-2').data('carousel-2-autoplay-status', 'N');
// }

function Carousel2__init() {
    // 데이터 개수 적어두기
    var totalItemNo = $('.carousel-2 .item').length;
    $('.carousel-2').data('total-items', totalItemNo);
    
    // 각 아이템에 번호 매기기
    $('.carousel-2 .item').each(function(index, node) {
        $(node).attr('data-no', index + 1);
    });
    
    $('.carousel-2 > .owl-carousel').owlCarousel({
        autoplay:false, // 오토 플레이
        loop:true, // 끝에서 다시 처음으로 시작
        margin:0,
        dots:false,
        nav:false,
        smartSpeed:600,
        mouseDrag:false,
        center:true,
        navText:["<img src='https://wjdtjdbsdlwldb.github.io/img1/blog/article/si/btn_roll_image_prev.png?dummy123123'>","<img src='https://wjdtjdbsdlwldb.github.io/img1/blog/article/si/btn_roll_image_next.png?dummy123123'>"],
        responsive:{
            0:{
                items:1
            }
        },
        autoplayHoverPause:false, /* 필수 */
        // onTranslated: Carousel2__onTranslated,
    });

    $('.carousel-2 .play').on('click',function(){
        $('.carousel-2 > .owl-carousel').trigger('play.owl.autoplay');

        $('.carousel-2').data('carousel-2-autoplay-status', 'Y');
    });

    $('.carousel-2 .stop').on('click',function(){
        $('.carousel-2 > .owl-carousel').trigger('stop.owl.autoplay');

        $('.carousel-2').data('carousel-2-autoplay-status', 'N');
    });
}



$(function(){
    FullPage();
    SliderK__init();
});

$(function(){
    HoverEffect__init();
    menuHeight__init();
    Carousel2__init();
    Carousel1__init();
});
