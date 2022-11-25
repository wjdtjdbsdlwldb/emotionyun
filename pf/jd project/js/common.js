
$(document).ready(function(){
	// 태블릿, 모바일 토글메뉴효과
	$(".btn_tm_nav_open").click(function(){
		$(".side_tm_menu_wrap").toggleClass("on");
	});
	$(".side_tm_close").click(function(){
		$(".side_tm_menu_wrap").removeClass("on");
	});

	var wh = $(window).height();
	var wd = $(window).width();

	if(wd>=1441){
		
		// 2) 페이지 마다의 top(꼭대기)로 부터의 해당 페이지 위치를 계산해서 지정 var secPos = parseInt($(this).attr("data-val"));
		$(".page").each(function(index){
			// each 반복해라 attr 태그의 속성을 추가할때
			$(this).attr("data-val",index*wh);
		});
		// 3)해당 페이지에서 마우스 휠을 굴릴 때 위로 스크롤 할 때와 아래로 스크롤 할 때를 나누어 처리
		$(".page").on("mousewheel DOMMouseScroll", function(e){
			// 현재 페이지의 위치값을 불러오기 (secPos:현재페이지)
			// mousewheel(크롬) DOMMouseScroll(나머지브라우저)
			var secPos = parseInt($(this).attr("data-val"));
			// wheelDelta 마우스 휠의 동작 값을 저장
			if(e.originalEvent.wheelDelta >= 0){ // 위로 스크롤
				$("html, body").stop().animate({scrollTop:secPos - wh}, 700);
				return false;
			} else if(e.originalEvent.wheelDelta < 0){// 아래로 스크롤
				$("html, body").stop().animate({scrollTop:secPos + wh}, 700);
				return false;
			}
		});
	}
	
	function slideMenu() {
		var activeState = $("#m_header .allMenu").hasClass("active");
		$("#m_header .allMenu").animate({left: activeState ? "0%" : "-100%"}, 400);
	  }
	  $("#hamburger_wrapper").click(function(event) {
		event.stopPropagation();
		$("#hamburger_menu").toggleClass("open");
		$("#m_header .allMenu").toggleClass("active");
		slideMenu();
	
		$("body").toggleClass("overflow-hidden");
	  });
	
	  $(".allMenu").find(".accordion-toggle").click(function() {
		$(this).next().toggleClass("open").slideToggle("fast");
		$(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
	
		$(".allMenu .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".allMenu .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
	  });
	  
	// 퀵메뉴
	var currentPosition = parseInt($("#slidemenu").css("top"));
	$(window).scroll(function() {
		var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
		$("#slidemenu").stop().animate({"top":position+currentPosition+"px"},1000);
  	});


   // 메인슬라이드
   var wd = $("#vs").width();
   var sl = $(".img_box");
   var btn1 = $("#btn_box");
   var len = $(".img_box li").length;
   
   var intv1 = setInterval(function(){ 
       nextSlideAni();
   }, 7000);
   $("#btn_box li.left,#btn_box1 li.left").click(function(){
       clearInterval(intv1);
       prevSlideAni();
       intv1 = setInterval(function(){ nextSlideAni(); }, 5000);
   });
   $("#btn_box li.right,#btn_box1 li.right").click(function(){
       clearInterval(intv1);
       nextSlideAni();
       intv1 = setInterval(function(){ nextSlideAni(); }, 5000);
   });
   $("#slider").find(".book-slide").css("display", "none");
   $("#slider").find(".book-slide").eq(0).css("display", "block");
   $(".book_next").click(function(){
      nextSlide();
   });
   $(".book_prev").click(function(){
      prevSlide();
   });



	// 카메라 아이콘 클릭시 이미지검색
	$(".sch_btn,.url_sch_btn").click(function(){
		$(".main_pop").addClass("on");
 	});
    $(".pop_close, .pop_btn2").click(function(){
    	$(".main_pop").removeClass("on");
	});


	

	/* sub1-5 이용후기 */
	!(function() {
	'use strict';

	var ScrollSlider = function(option) {
		var param = $.extend({
			keyframeName: 'slider',
			speed: 50, // px/s
			frame: '.frame',
			list : '.list',
			item : '.item'
		}, option);

		this.KEYFRAME_NAME = param.keyframeName;
		this.SPEED = param.speed;
		this.SELECTOR = {
			FRAME: param.frame,
			LIST : param.list,
			ITEM : param.item
		};

		this.$elm = {
			frame: $(this.SELECTOR.FRAME),
			list : $(this.SELECTOR.LIST),
			item : $(this.SELECTOR.ITEM),
			style: $('<style>')
		}
		this.total = this.$elm.item.length

		if (this.total === 0) return;

		this.appendStyle();
		this.run();
		this.bindResize();
	};
	
	ScrollSlider.prototype = {
		appendStyle: function() {
			$('head').append(this.$elm.style);
		},
		run: function() {
			this.setWidth()
			this.fillItem();
			this.updateDuration();
			this.updateKeyframe();
		},
		bindResize: function() {
			var self  = this;
			var timer = null;
			$(window).on('resize', function() {
				clearTimeout(timer);
				timer = setTimeout($.proxy(self.run, self), 300);
			});
		},
		setWidth: function() {
			this.frameWidth = this.$elm.frame.innerWidth();
			this.itemWidth  = this.$elm.item.innerWidth();
			this.listWidth  = this.itemWidth * this.total;
		},
		fillItem: function() {
			var sliderWidth = this.itemWidth * $(this.SELECTOR.ITEM).length;
			if (sliderWidth < this.frameWidth + this.listWidth) {
				this.$elm.list.append(this.$elm.item.clone(true));
				this.fillItem();
			}
		},
		updateDuration: function() {
			var duration = this.listWidth / this.SPEED;
			this.$elm.list.css({animationDuration: duration + 's'});
		},
		updateKeyframe: function() {
			var x   = (- this.listWidth) + 'px';
			var str = '';
			str += '@keyframes ' + this.KEYFRAME_NAME + ' {';
			str += 'from {-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}';
			str += 'to   {-webkit-transform:translate3d(' + x + ',0,0);transform:translate3d(' + x + ',0,0);}';
			str += '}';

			this.$elm.style.text(str);
		}
	};
window.ScrollSlider = ScrollSlider;	
	})();
	new ScrollSlider();


	// 퀵메뉴 bx-slider

    // script 오류 주석
	var mySlider = $("#quick_menu").bxSlider({
		mode:"horizontal",    // 가로 수평으로 슬라이드된다.
		speed:500,        // 이동 속도를 설정한다.
		pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
		moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
		slideWidth:580,    // 슬라이드 너비를 설정한다.
		minSlides:2,    // 최소 노출 개수를 설정한다.
		maxSlides:2,    // 최대 노출 개수를 설정한다.
		slideMargin:10, // 슬라이드 간의 간격을 설정한다.
		auto:true,         // 자동으로 흐를지 여부를 설정한다.
		autoHover:true, // 마우스오버 시 정지할지를 설정한다.
		controls:false,    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
		touchEnabled : (navigator.maxTouchPoints > 0)
	}); 
	
	// 이전 버튼을 클릭하면 이전 슬라이드로 전환된다.
	$("#prevBtn").on("click", function(){
		// 이전 슬라이드 배너로 이동된다.
		mySlider.goToPrevSlide();
		// <a>의 링크를 차단한다.
		return false;
	});
	
	// 다음 버튼을 클릭하면 다음 슬라이드로 전환한다.
	$("#nextBtn").on("click", function(){
		// 다음 슬라이드 배너로 이동된다.
		mySlider.goToNextSlide();
		// <a>의 링크를 차단한다.
		return false;
	});
	
	
	$('.responsive').slick({
		dots: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});
});

function nextSlideAni(){
	var sl = $(".img_box");
	var wd = $(window).width();
	sl.not(":animated").animate({"margin-left":-wd+"px"}, 3000, function(){
	sl.find("li").eq(0).appendTo(sl);
	sl.css("margin-left", "0px");
	});
}
function prevSlideAni(){
	var len = $(".img_box li").length;
	var sl = $(".img_box");
	var wd = $(window).width();
	sl.find("li").eq(len-1).prependTo(sl);
	sl.css("margin-left", -wd+"px");
	sl.not(":animated").animate({"margin-left":"0px"}, 3000, function(){
	});
}

function nextSlide(){
   var index = findCurrentSlideIndex();
   if($("#slider").find(".book-slide").length-1 === index){
      $("#slider").find(".book-slide").last().css("display","none");
      $("#slider").find(".book-slide").first().fadeIn(500);
   }else{
      $("#slider").find(".book-slide").eq(index).css("display","none");
      $("#slider").find(".book-slide").eq(index+1).fadeIn(500);
   }
}
function prevSlide(){
   var index = findCurrentSlideIndex();
   if(0 === index){
      $("#slider").find(".book-slide").first().css("display","none");
      $("#slider").find(".book-slide").last().fadeIn(500);
   }else{
      $("#slider").find(".book-slide").eq(index).css("display","none");
      $("#slider").find(".book-slide").eq(index-1).fadeIn(500);
   }
}
function findCurrentSlideIndex(){
   var idx = 0;
   $("#slider").find(".book-slide").each(function(index, ele){
      if($(ele).css("display") === "block"){
         idx = index;
      }
   });
   return idx;
}

   /*sub3-2 popup */
/* popup */
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup.one').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup.one').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	// 마이페이지 배송지주소록 추가
	$('.cd-popup-add-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-popup.add').addClass('is-visible');
	});
	//close popup
	$('.cd-popup.add').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn,.cd-popup-close.img-replace') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
});
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
	});
	//open popup
	$('.cd-popup-trigger1-1').on('click', function(event){
		event.preventDefault();
		$('.cd-popup1-1').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup1-1').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup1-1') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	$('.cd-popup1-1').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup1-1') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup1-1').removeClass('is-visible');
	    }
    });
});


/* popup2 */
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger2').on('click', function(event){
		event.preventDefault();
		$('.cd-popup2').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup2').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup2') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	$('.cd-popup2').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup2') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup2').removeClass('is-visible');
	    }
    });

});

/* mypage 마이페이지 예치금충전팝업 - 탭 */
$(document).ready(function(){ 
	$(".pop_table_wrap2 > div").last().hide();
	var radioContent = $(".pop_table_wrap2 > div");
	$(".charge_option input[type='radio']").click(function(){
	 radioContent.hide();
	 radioContent.eq($(".charge_option input[type='radio']").index(this)).show();
	});
   });
// join agree - List
$(function() {
    var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.agree_title');
            links.on('click', {
                    el: this.el,
                    multiple: this.multiple
            }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                    $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                    $el.find('.agree_conts').not($next).slideUp().parent().removeClass('open');
            };
    }
    var accordion = new Accordion($('.join_list'), false);
});
// 구매,배송,단가조사 절차 클릭효과
$(function(){
    $('.buy_tab li').click(function(){
        var tabType = $(this).index();
		$(".sub2-1-1_info").find("img").removeClass("on");
        $(".sub2-1-1_info").find("img").eq(tabType).addClass("on");
            $('.buy_tab li').each(function(index){
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off','_on'));
            if(tabType != index){
                $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on','_off'));
            }
        });
            $('.buy_con>div').eq(tabType).show().siblings('div').hide();
    });
 });
 
/* popup3 */
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger3').on('click', function(event){
		event.preventDefault();
		$('.cd-popup3').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup3').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup3') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	$('.cd-popup3').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup3') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup3').removeClass('is-visible');
	    }
    });
});

/* popup3-1 */
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger3-1').on('click', function(event){
		event.preventDefault();
		$('.cd-popup3-1').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup3-1').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup3-1') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	$('.cd-popup3-1').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup3-1') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup3-1').removeClass('is-visible');
	    }
    });
});
/* popup4 */
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger4').on('click', function(event){
		event.preventDefault();
		$('.cd-popup4').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup4').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup4') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	$('.cd-popup4').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup4') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup4').removeClass('is-visible');
	    }
    });
});

/* popup4-1 */
jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger4-1').on('click', function(event){
		event.preventDefault();
		$('.cd-popup4-1').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup4-1').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup4-1') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	$('.cd-popup4-1').on('click', function(event){
		if( $(event.target).is('.cd-popup-close-btn') || $(event.target).is('.cd-popup4-1') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup4-1').removeClass('is-visible');
	    }
    });
});


//m_sub_nav accordion
$(function() {
    var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find('.accordion_title');
            links.on('click', {
                    el: this.el,
                    multiple: this.multiple
            }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                    $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                    $el.find('.accordion_conts').not($next).slideUp().parent().removeClass('open');
            };
    }
    var accordion = new Accordion($('.accordion_list'), false);
});

$(window).resize(bxsliderResizing());

    function bxsliderResizing(){
        if($(window).width()<=1200) 
        { // 퀵메뉴 bx-slider
            var mySlider = $("#quick_menu").bxSlider({
                    mode:"horizontal",    // 가로 수평으로 슬라이드된다.
                    speed:500,        // 이동 속도를 설정한다.
                    pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
                    moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
                    slideWidth:100,    // 슬라이드 너비를 설정한다.
                    minSlides:1,    // 최소 노출 개수를 설정한다.
                    maxSlides:2,    // 최대 노출 개수를 설정한다.
                    slideMargin:0, // 슬라이드 간의 간격을 설정한다.
                    auto:true,         // 자동으로 흐를지 여부를 설정한다.
                    autoHover:true, // 마우스오버 시 정지할지를 설정한다.
                    controls:false,    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
                    touchEnabled : (navigator.maxTouchPoints > 0)
                });

			}
		}
		function bxsliderResizing(){
			if($(window).width()<=1024) 
			{ // 퀵메뉴 bx-slider
				var mySlider = $("#quick_menu").bxSlider({
						mode:"horizontal",    // 가로 수평으로 슬라이드된다.
						speed:500,        // 이동 속도를 설정한다.
						pager:false,    // 현재 위치 페이지 표시 여부를 설정한다.
						moveSlides:1,    // 슬라이드 이동 시 개수를 설정한다.
						slideWidth:50,    // 슬라이드 너비를 설정한다.
						minSlides:1,    // 최소 노출 개수를 설정한다.
						maxSlides:1,    // 최대 노출 개수를 설정한다.
						slideMargin:0, // 슬라이드 간의 간격을 설정한다.
						auto:true,         // 자동으로 흐를지 여부를 설정한다.
						autoHover:true, // 마우스오버 시 정지할지를 설정한다.
						controls:false,    // 이전 버튼, 다음 버튼 노출 여부를 설정한다.
						touchEnabled : (navigator.maxTouchPoints > 0)
					});
	
				}
			}