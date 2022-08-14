function Slider() {
  $(".slider-div").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 1000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: false, //크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    draggable: true //드래그 가능 여부
  });
}

function MiniSlider__init() {
  $('.mini-slider > .owl-carousel').owlCarousel({
    responsive: {
      0: {
        items: 3
      }
    },
    center: true,
    loop: false,
    dots: false,
    nav: false
  });
}


function video() {
  $('.som').click(function () {
    $('.som').css('opacity', '0');
    $('#video').trigger('play');
  })
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

function Svg__showAllPathLengths() {
  var pathes = $('svg').find('polyline');
  pathes.each(function (i, polyline) {
    var total_length = polyline.getTotalLength();
    console.log("svg path " + i + "의 길이 : " + total_length);
  });
}

// function abs(){
// $(document).ready(function(){
//   $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if (scroll > 200) {
//       $(".text-box").css("margin-left" , "150px");
//       $(".text-box").addClass('active');
//     }
//     else{
//       $(".text-box").css("margin-left" , "-400px");
//       $(".text-box").removeClass('active');   
//     }
//   })
// })
// }

$(function () {
  Slider();
  video();
  MiniSlider__init();
  ActiveOnVisible__init();
});

$(function () {
  Svg__showAllPathLengths();
});