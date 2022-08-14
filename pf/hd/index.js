// 메인슬라이드

$(function () {
  $(".slider1").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: false, //크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 8000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    draggable: true, //드래그 가능 여부
  });
});

// 공지사항 슬라이드 

$(function () {
  $(".noti-slider").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    prevArrow: "<button type='button' class='slick-prev'></button>", // 이전 화살표 모양 설정
    nextArrow: "<button type='button' class='slick-next'></button>", // 다음 화살표 모양 설정
    dots: false, //크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 8000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: true, // 세로 방향 슬라이드 옵션
    draggable: true, //드래그 가능 여부
  });
});

// 전시 슬라이드

$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    // slidesPerGroup:1,
    centeredSlides: true,
  });
});



$(document).ready(function () {
  var $loginMenu = $('.login-box > ul > li');

  $('.login-box > ul ul').hide();

  $loginMenu.click(function () {
    $('.login-box > ul ul').slideDown();

  });

  $loginMenu.mouseleave(function () {
    $('.login-box > ul ul').slideUp();
  });

});

// 탑버튼
$(document).ready(function () {
  $('.top-btn').hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.top-btn').fadeIn(500);
    } else {
      $('.top-btn').fadeOut();
      $('.top-btn').css('display', 'none');
    }
  });

  $(".top-btn").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});