// 메인 효과
document.addEventListener("DOMContentLoaded", function () {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };
  
    // IMAGE ANIMATION
  
    let revealCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
  
        if (entry.isIntersecting) {
          console.log(container);
          container.classList.add("animating");
          return;
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("animating");
        }
      });
    };
  
    let revealObserver = new IntersectionObserver(revealCallback, options);
  
    document.querySelectorAll(".reveal").forEach((reveal) => {
      revealObserver.observe(reveal);
    });
  
    // TEXT ANIMATION
  
    let fadeupCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
        container.classList.add("not-fading-up");
  
        if (entry.isIntersecting) {
          container.classList.add("fading-up");
          return;
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("fading-up");
        }
      });
    };
  
    let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
  
    document.querySelectorAll(".fadeup").forEach((fadeup) => {
      fadeupObserver.observe(fadeup);
    });
  });

// work view more 버튼 효과
$(function(){
    $('.all_works li').hide();
    $(".all_works li").slice(0, 3).css("display", "block"); 
    $("#more").click(function(e){
        e.preventDefault();
        $(".all_works li:hidden").slice(0, 3).fadeIn(600).css('display', 'block'); // 클릭시 more 갯수 지저정
        if($(".all_works li:hidden").length == 0){ // 컨텐츠 남아있는지 확인
            $('#more').html("<a>No More</a>").fadeIn(1000);
        }
    });
});

// project view more 버튼
$(function(){
  $('.projects li').hide();
  $(".projects li").slice(0, 4).css("display", "block"); 
  $("#moreTwo").click(function(e){
      e.preventDefault();
      $(".projects li:hidden").slice(0, 2).fadeIn(600).css('display', 'block'); // 클릭시 more 갯수 지저정
      if($(".projects li:hidden").length == 0){ // 컨텐츠 남아있는지 확인
          $('#moreTwo').html("<a>No More</a>").fadeIn(1000);
      }
  });
});
