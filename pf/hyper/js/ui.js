$(document).ready(function(){

/*gnb  2depth 메뉴 열기-가로1101px 이상*/
    // $(".gnb li a").on("mouseenter",function(){		
    //     $(".gnb_2depth_wrap .gnb_2depth").slideDown();       
    // });
    // $(".gnb li a").on("mouseleave",function(){
    //     $(".gnb_2depth_wrap .gnb_2depth").stop().slideUp();  
    // });
    // $(document).on({
    //     mouseenter: function() {
    //         $(".gnb_2depth_wrap .gnb_2depth").stop().slideDown(0);
    //     },
    //     mouseleave: function() {
    //         $(".gnb_2depth_wrap .gnb_2depth").stop().slideUp(150);
    //     }
    // }, ".gnb_2depth_wrap .gnb_2depth");
		$(".main>li").mouseover(function() {
			$(this).children(".sub").stop().slideDown();
		});
		$(".main>li").mouseleave(function() {
			$(this).children(".sub").stop().slideUp();
		});
/*가로값 1201px 이상 토탈 카테고리 열기*/
$(".btn_total_nav_open").click(function() {
	  $("#total_category,.page_cover01,html").addClass("open");
	  window.location.hash = "#open";
	});
	window.onhashchange = function() {
	  if (location.hash != "#open") {
		$("#total_category,.page_cover01,html").removeClass("open");
	  }
};

//main header nav Scrol시 CSS적용
function contScroll() {
    $(document).scroll(function() {
        var scrlTop = $(document).scrollTop();

        if (scrlTop >= 30) {
            //console.log("30넘었음");
            $(".header_wrap01").addClass("header_up");
			$(".header_wrap02").addClass("header_up02");
           // $(".logo").css("display","block");
        } else if (scrlTop <= 30) {
            $(".header_wrap01").removeClass("header_up");
			$(".header_wrap02").removeClass("header_up02");
           // $(".logo").css("display","none");
            //console.log("50못넘었음");
        } 
    }); 
}
contScroll();

/* 반응형 gnb 모바일메뉴 오픈 */
	var menu = "close";
	$(".header_wrap02 .btn_tm_nav_open").click(function  () {
		$(this).addClass("on");
		if ( menu == "open" ) {
			menuClose();
			menu = "close";
			$(this).removeClass("on");
		}else {
			menuOpen();
			menu = "open";
		}
		return false;
	});

	$(".page_cover02, .btn_tm_nav_close").click(function  () {
		menuClose();
		menu = "close";
		$(".header_wrap02 .btn_tm_nav_open").removeClass("on");
	});


	function menuOpen () {
			$(".tm_gnb_wrap").stop().animate({"right":"0"},200);
			$(".page_cover02").fadeIn();
			$("body").css({'height':$(window).height(), 'overflow':'hidden'});
	}

	function menuClose () {
			$(".tm_gnb_wrap").stop().animate({"right":"-100%"},200);
			$(".page_cover02").hide();
			$("body").css({'height':'auto', 'overflow':'auto'});
	}

/* tm_gnb 2depth 메뉴 오픈하기 */
	$(".tm_gnb_wrap > ul > li:has('ul')").children("strong").click(function(event){
		/* 2dep 메뉴가 열려있을때 */		
		if ( $(this).parent("li").hasClass("active") ){
			$(this).parent("li").removeClass("active");
			$(this).siblings("ul").slideUp(400);					
		}
		/* 2dep 메뉴가 닫혀있을때 */ 
		else{	  
			$(".tm_gnb_wrap > ul > li").has("ul").each(function() {
				if ( $(this).hasClass("active") ){
					$(this).removeClass("active");
					$(this).children("ul").slideUp(400);
				}
			});	
			$(this).parent("li").addClass("active");
			$(this).siblings("ul").slideDown(400);
		}
		return false;
	}); 


//sub_tab
var w_width = $(window).innerWidth();
$(".sub_tab_02, .sub_tab_03").each(function  () {
	var $tabBox = $(this);
	var $tabBtn = $tabBox.children(".sub_title");
	var $tabList = $tabBox.children(".sub_tab_2depth");

	if (w_width > 1024) {
		$tabBtn.click(function  () {
			$(this).toggleClass("open");
			//$tabList.toggle().toggleClass("open");
			$tabList.slideDown(300);
			return false;
		});
		$tabBox.on('mouseleave',function  () {
			var w_width = $(window).innerWidth();
			$tabList.slideUp(300).removeClass("open");
			$tabBtn.removeClass("open");
		});
	}else {
		$tabBtn.click(function  () {
			$(this).toggleClass("open");
			if ($(this).hasClass("open")) {
				$tabList.slideDown(300);
			}else {
				$tabList.slideUp(300);
				$tabList.removeClass("open");
			}
			return false;
		});
	}
});




//main .visua_slide
$(".main_slide_list").bxSlider({
	auto: true,
	mode: 'fade',
	pause: 5000,
});


// footer top버튼
$(".top_btn").click(function  () {
	$("html, body").animate({scrollTop:0},500,"swing");
	return false;
});
	$("ul.navigation > li > a").each(function(index, item){
		if(item.pathname == location.pathname){
			$(item).addClass("on");
		}else{
			$(item).removeClass("on");
		}
	})
// 팝업시 부모창 크기변화 무
	var scroll = {
		disable: function() {
		  $('body')
			.css('overflow-y', 'scroll');
	  
		  $('.container').css({
			'position': 'fixed',
			'top': -$(win).scrollTop(),
			'left': 0,
			'width': '100%'
		  });
		},
		enable: function() {
		  var scrollPosition = Math.abs($('.container').css('top').split('px')[0]);
	  
		  $('.container').removeAttr('style');
		  $(window).scrollTop(scrollPosition);
		  $('body').removeAttr('style');
		}
	  };
	      //번호별 버튼을 누르면, 해당 이미지가 나오고, 해당 버튼은 on클래스를 부여하도록 구현
		//   var wd = $("#vs1").width();
		//   var len = $("#img_box1 .slider").length;
		//   var ml;
		//   $("#btn_box1 li").click(function(){
		// 	  var idx = $(this).index();
		// 	  $("#img_box1").not(":animated").animate({"margin-left":idx*wd*-1+"px"}, 500);
		// 	  $(this).addClass("on");
		// 	  $(this).siblings().removeClass("on");
		//   });
	  });

 $(document).ready(function(){
	$('.slick-sample.basic').slick({
		prevArrow : $('.prevArrow01'), 
		nextArrow : $('.nextArrow01'),
		asNavFor: '.slick-sample.vertical',
	});
	$('.slick-sample.vertical').slick({
		vertical: true,
		verticalSwiping: true,
		prevArrow : $('.prevArrow01'), 
		nextArrow : $('.nextArrow01'),
		asNavFor: '.slick-sample.basic',
		responsive: [ // 반응형 웹 구현 옵션
	{  
		breakpoint: 960, //화면 사이즈 960px
		settings: {
			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
		} 
	},
	{ 
		breakpoint: 768, //화면 사이즈 768px
		settings: {	
			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
		} 
	}
]
	});
	$('.slick-slider.three').slick({
	centerMode: true,
	slidesToShow: 5,
	// dots: true,
	arrows: true,
	swipe: true,
	vertical: false,
	//  infinite: true,
	swipeToSlide: true,
	//adaptiveHeight: true,
	prevArrow : $('.prevArrow02'), 
	nextArrow : $('.nextArrow02'),
	responsive: [ // 반응형 웹 구현 옵션
	{  
		breakpoint: 960, //화면 사이즈 960px
		settings: {
			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
			slidesToShow:4 
		} 
	},
	{ 
		breakpoint: 768, //화면 사이즈 768px
		settings: {	
			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
			slidesToShow:2
		} 
	},
	{ 
		breakpoint:425, //화면 사이즈 768px
		settings: {	
			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
			slidesToShow:1
		} 
	}
]
	});
	$('.mo_slider .slick-sample.vertical_mo').slick({
		prevArrow : $('.prevArrow01.mo'), 
		nextArrow : $('.nextArrow01.mo'),
		asNavFor: '.slick-sample.vertical_mo01',
	});
	$('.slick-sample.vertical_mo01').slick({
		vertical: true,
		verticalSwiping: true,
		prevArrow : $('.prevArrow01.mo'), 
		nextArrow : $('.nextArrow01.mo'),
		asNavFor: '.slick-sample.vertical_mo',
	});
	
});