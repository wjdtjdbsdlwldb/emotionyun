function MenuEffect__init() {
  var $Enter = $(".main > .header");

  $Enter.mouseenter(function () {
    $Enter.addClass("active");
  });

  $Enter.mouseleave(function () {
    $Enter.removeClass("active");
  });
}

function hoverBar__init() {
  $(".hover-bar-nav .hover-bar-menu").mouseenter(function () {
    var $this = $(this);

    var menuWidth = $this.width();
    var menuPadding = ($this.innerWidth() - $this.width()) / 2;
    var menuPosition = $this.position().left;

    var $hoverBar = $(".hover-bar");

    $hoverBar.css("width", menuWidth + "px");
    $hoverBar.css("left", menuPosition + menuPadding + "px");
  });

  $(".hover-bar-nav").mouseleave(function () {
    var $this = $(this);

    var $hoverBar = $(".hover-bar");
    $hoverBar.css("width", "");
    $hoverBar.css("left", "");
  });
}

// 메인 이미지 슬라이드
function Slider1__init() {
  $('#owl-one').owlCarousel({
    dots: true,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    loop: true,
    autoplayTimeout: 6000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      200: {
        items: 1,
        nav: false,
        mouseDrag: true,
      },
      600: {
        items: 1,
        nav: false,
        
      },
      1024: {
        items: 1,
        nav: true,
        mouseDrag: true,
        
      }
    }
  });
}

// 뉴스 슬라이드
function Text_slide() {
  $('#owl-two').owlCarousel({
    dots: false,
    nav: false,
    mouseDrag: false,
    autoplay: true,
    loop: false,
    autoWidth: false,
    autoplayTimeout: 6000,

    responsive: {
      0: {
        items: 3
      }

    }
  });
}

// 스토리 슬라이드
function SubNews__init() {
  $('#owl-three').owlCarousel({
    dots: false,
    nav: false,
    mouseDrag: false,
    autoplay: false,
    autoplayTimeout: 5000,

    responsive: {
      0: {
        items: 4
      }

    }
  });
}


// 탑바 큰화면 스크롤 색상변화

$(document).ready(function () {
  var $topBar = $(".top-wrap");
  var $sideTop = $(".media");

  var windowHeight = $(window).height();

  $(window).resize(function () {
    windowHeight = $(window).height();
  });

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > windowHeight - 650) {
      $topBar.addClass("white");
      $sideTop.addClass("white");
    } else {
      $topBar.removeClass("white");
      $sideTop.removeClass("white");
    }
  });
});



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

/* 발견되면 활성화시키는 라이브러리 끝 */

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.button').fadeIn();
    } else {
      $('.button').fadeOut();
      $('.button').css('display', 'none');
    }
  });

  $(".button").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});



$(function () {
  MenuEffect__init();
  hoverBar__init();
  Slider1__init();
  Text_slide();
  ActiveOnVisible__init();
  SubNews__init();
});