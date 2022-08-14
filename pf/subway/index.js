function TopBar__init() {
  var $topBar = $(".top-bar");
  var $MenuBox = $(".top-bar > .menu-box");
  var $ListBox = $(".top-bar .menu-box > ul");

  $topBar.find(".menu-box > ul").mouseenter(function () {
    $ListBox.addClass("bg-active");
    $MenuBox.addClass("bg-active");
  });

  $ListBox.mouseleave(function () {
    $ListBox.removeClass("bg-active");
    $MenuBox.removeClass("bg-active");
  });
}

function sliderBtn() {
  $(".btn-box > .dot").click(function () {
    var $active = $(".slider > .btn-box").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next = $active.next();

    $active.removeClass("active");
    $click.addClass("active");

    $(".slider > .slides > li > a >div").css("margin-left", -1920 * index);
  });
}

setInterval(function a() {
  var $active = $(".slider-menu > .btn-box").find(".active");
  var $click = $(this);
  var index = $click.index();
  var $next = $active.next();

  if ($next.length == 0) {
    $(".slider-menu > .btn-box > div:first-child").click();
  } else {
    $next.click();
  }
}, 5000);

function MiniBtn() {
  $(".subway-bottom >.mini-bn > .mini-slider > .button > .dots").click(function () {
    var $active2 = $(".subway-bottom > .mini-bn > .mini-slider > .button ").find(".active");
    var $click = $(this);
    var index = $click.index();
    var $next2 = $active2.next();

    $active2.removeClass("active");
    $click.addClass("active");

    $(".subway-bottom >.mini-bn > .mini-slider > .img-box >.box").css("margin-left", -270 * index);
  });
}

setInterval(function a() {
  var $active2 = $(".subway-bottom .mini-bn > .mini-slider > .button").find(".active");
  var $click = $(this);
  var index = $click.index();
  var $next2 = $active2.next();

});

function MenuList() {
  $('.tab-box > .head > ul > li').click(function () {
    var $clickedLi = $(this);
    var index = $clickedLi.index();

    $clickedLi.siblings('.active').removeClass('active');
    $clickedLi.addClass('active');

    var $tabBox = $clickedLi.closest('.tab-box');

    $tabBox.find('.body > ul > li').removeClass('active');
    $tabBox.find('.body > ul > li').eq(index).addClass('active');
  }); // 메뉴 이름 클릭

  $('.carousel-1 > .owl-carousel').owlCarousel({
    navSpeed: 150,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    slideBy: 4,
    mouseDrag: false,
    navText: ['<div class="left-btn"></div>', '<div class="right-btn"></div>'],
    responsive: {
      0: {
        items: 4
      }
    }
  }); // 메뉴 슬라이드

  $('.carousel-1 > .owl-carousel .owl-item').mouseenter(function () {
    var eventItem = this;
    var $carousel = $(this).closest('.carousel-1');

    for (var i = 1; i <= 4; i++) {
      $carousel.removeClass('carousel-item-' + i + '-hover');
    }

    $carousel.find('.owl-item.active').each(function (index, node) {
      if (eventItem == node) {
        $carousel.addClass('carousel-item-' + (index + 1) + '-hover');

        return false;
      }
    });
  }); // 메뉴 마우스 오버

  $('.carousel-1 > .owl-carousel .owl-item').mouseleave(function () {
    var $carousel = $('.carousel-1');

    for (var i = 1; i <= 4; i++) {
      $carousel.removeClass('carousel-item-' + i + '-hover');
    }
  });

  $('.carousel-1').mouseleave(function () {
    var $carousel = $(this);

    for (var i = 1; i <= 4; i++) {
      $carousel.removeClass('carousel-item-' + i + '-hover');
    }
  }); // 메뉴 마우스 리브

  $('.head > ul > li').click(function () {
    $click_menu = $(this);

    $click_menu.addClass('active');
  });

}


$(function () {
  sliderBtn();
  TopBar__init();
  MiniBtn();
  MenuList();
});
