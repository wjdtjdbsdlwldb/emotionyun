<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../inc/header.jsp" %>
<!--#include file="../inc/header.asp"-->
</head>

<body>
	<!--바로가기 메뉴 시작-->
	<div id="content_go">
		<!--#include file="../inc/contents_shortcut.asp"-->
		<%@ include file="../inc/contents_shortcut.jsp" %>
	</div>
	<!--바로가기 메뉴 끝-->
	<div class="wrap sub_wrap">
		<header class="sub_hd">
			<!-- PC / 가로 1201px 이상 메뉴 시작-->
			<div class="header_wrap01">
				<div class="bottom">
					<!--#include file="../inc/gnb.asp"-->
					<%@ include file="../inc/gnb.jsp" %>
				</div>
			</div><!-- PC / 가로 1201px 이상 메뉴 end-->
			<!-- 태블릿, 모바일 / 가로 1200px 이하 메뉴 시작-->
			<div class="header_wrap02 clearfix">
				<!--#include file="../inc/tm_menu.asp"-->
				<%@ include file="../inc/tm_menu.jsp" %>
			</div>
			<!--태블릿, 모바일 / 가로 1200px 이하 메뉴 끝-->
		</header>
		<main id="contents_shortcut">
			<!--sub-visual 시작-->
			<div class="sub_visual sub_visual01">
				<!--#include file="../inc/sub_visual01.asp"-->
				<%@ include file="../inc/sub_visual01.jsp" %>
			</div>
			<!-- 게임소개 리스트 페이지 시작 -->
			<div class="sub_container confirm_progress02_container game_sub_container">
				<div class=" inner clearfix">
					<div class="sub_contents">
						<div class="contents_wrap">
							<!--상단 게임 탭 메뉴 -->
							<div class="game_tab_menu01">
								<ul class="tabs">
									<li><a href="#" class="tab-link current" data-tab="tab-1">ALL</a></li>
									<li><a href="#" class="tab-link current" data-tab="tab-2">PS4/PS5</a></li>
									<li><a href="#" class="tab-link current" data-tab="tab-3">Switch</a></li>
									<li><a href="#" class="tab-link current" data-tab="tab-4">XB1/XSX</a></li>
									<li><a href="#" class="tab-link current" data-tab="tab-5">PC</a></li>
									<li><a href="#" class="tab-link current" data-tab="tab-6">PSVITA</a></li>
								</ul>

							</div>
							<!-- 게임 리스트 -->
							<div class="content_mid">
								<div class="game_infor_box">
									<div class="game_infor_wrap">
										<ul class="game_img">
											<li>
												<a href="#">
													<div
														style="background:url(../images/sub/game_img1.jpg) no-repeat center center; background-size: cover;">
													</div>
												</a>
											</li>
										</ul>
										<div class="game_infor_text">
											<div class="text_wrap">
												<p>울트라 에이지 PC</p>
												<span>Next Stage / Visual Dart</span>
												<div class="last_txt">PC</div>
											</div>

										</div>
										<div class="hover_line"></div>
									</div>
								</div>
								<div class="game_infor_box">
									<div class="game_infor_wrap">
										<ul class="game_img">
											<li>
												<a href="#">
													<div
														style="background:url(../images/sub/game_img2.jpg) no-repeat center center; background-size: cover;">
													</div>
												</a>
											</li>
										</ul>
										<div class="game_infor_text">
											<div class="text_wrap">
												<p>울트라 에이지 PC</p>
												<span>Next Stage / Visual Dart</span>
												<div class="last_txt">PC</div>
											</div>
										</div>
										<div class="hover_line"></div>
									</div>
								</div>
								<div class="game_infor_box">
									<div class="game_infor_wrap">
										<ul class="game_img">
											<li>
												<a href="#">
													<div
														style="background:url(../images/sub/game_img3.jpg) no-repeat center center; background-size: cover;">
													</div>
												</a>
											</li>
										</ul>
										<div class="game_infor_text">
											<div class="text_wrap">
												<p>울트라 에이지 PC</p>
												<span>Next Stage / Visual Dart</span>
												<div class="last_txt">PC</div>
											</div>
										</div>
										<div class="hover_line"></div>
									</div>
								</div>
								<div class="game_infor_box">
									<div class="game_infor_wrap">
										<ul class="game_img">
											<li>
												<a href="#">
													<div
														style="background:url(../images/sub/game_img1.jpg) no-repeat center center; background-size: cover;">
													</div>
												</a>
											</li>
										</ul>
										<div class="game_infor_text">
											<div class="text_wrap">
												<p>울트라 에이지 PC</p>
												<span>Next Stage / Visual Dart</span>
												<div class="last_txt">PC</div>
											</div>
										</div>
										<div class="hover_line"></div>
									</div>
								</div>
								<div class="game_infor_box">
									<div class="game_infor_wrap">
										<ul class="game_img">
											<li>
												<a href="#">
													<div
														style="background:url(../images/sub/game_img2.jpg) no-repeat center center; background-size: cover;">
													</div>
												</a>
											</li>
										</ul>
										<div class="game_infor_text">
											<div class="text_wrap">
												<p>울트라 에이지 PC</p>
												<span>Next Stage / Visual Dart</span>
												<div class="last_txt">PC</div>
											</div>
										</div>
										<div class="hover_line"></div>
									</div>
								</div>
								<div class="game_infor_box">
									<div class="game_infor_wrap">
										<ul class="game_img">
											<li>
												<a href="#">
													<div
														style="background:url(../images/sub/game_img3.jpg) no-repeat center center; background-size: cover;">
													</div>
												</a>
											</li>
										</ul>
										<div class="game_infor_text">
											<div class="text_wrap">
												<p>울트라 에이지 PC</p>
												<span>Next Stage / Visual Dart</span>
												<div class="last_txt">PC</div>
											</div>
										</div>
										<div class="hover_line"></div>
									</div>
								</div>
							</div>
							<!-- 페이징 넘버 -->
							<div class="page_number">
								<div class="page_number_wrap">
									<ul>
										<li><a href="#"><img src="../images/sub/page_number.png" alt="페이지넘기기"></a></li>
										<li><a href="#" class="actvie">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#"><img src="../images/sub/page_number_right.png" alt="페이지넘기기"></a>
										</li>
									</ul>
								</div>
							</div>
							<!-- <div class="out_btn">
								<a onfocus="this.blur();" class="confirm">더보기&nbsp;<i class="fas fa-chevron-down"
										style="vertical-align:middle;"></i></a>
							</div> -->
						</div>
					</div>
				</div>
				<!-- 게임 상세내용 모달 팝업 -->
				<div class="popup_bg open"></div>
				<div class="modal_popup open">
					<div class="modal_wrap">
						<div class="pop_slider">
							<div class="swiper-container gallery-top">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="swiper-slide-container">
											<img src="../images/sub/game_img1.jpg" alt="게임이미지1">
										</div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container">
											<img src="../images/sub/game_img2.jpg" alt="게임이미지1"></div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container"> <img src="../images/sub/game_img3.jpg"
												alt="게임이미지1"></div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container"> <img src="../images/sub/game_img1.jpg"
												alt="게임이미지1"></div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container"><img src="../images/sub/game_img2.jpg"
												alt="게임이미지1"></div>
									</div>
								</div>
							</div>
							<div class="swiper-container gallery-thumbs">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
										<div class="swiper-slide-container">
											<img src="../images/sub/game_img1.jpg" alt="게임이미지1">
										</div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container">
											<img src="../images/sub/game_img2.jpg" alt="게임이미지1"></div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container"> <img src="../images/sub/game_img3.jpg"
												alt="게임이미지1"></div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container"> <img src="../images/sub/game_img1.jpg"
												alt="게임이미지1"></div>
									</div>
									<div class="swiper-slide">
										<div class="swiper-slide-container"><img src="../images/sub/game_img2.jpg"
												alt="게임이미지1"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="pop_text_box">
							<div class="pop_text_wrap">
								<div class="close_btn" id="close">
									<a href="#">
										<!-- 모달팝업 pc 사이즈일때 보여지는 닫기버튼 -->
										<img src="../images/sub/close_btn.png" alt="닫기버튼" class="pc_close_btn">
										<!-- 모달팝업 미디어 768이하 일때 보여지는 닫기버튼 -->
										<img src="../images/sub/md_close_btn.png" alt="닫기버튼" class="md_close_btn">
									</a>
								</div>
								<div class="popup_body">
									<h2>울트라 에이지 PC</h2>
									<p>Next Stage / Visual Dart</p>
								</div>
								<div class="company_icon">
									<a href="#"><img src="../images/sub/company_steam.png" alt="회사아이콘"></a>
								</div>
								<div class="infor_list">
									<p>
										<span>플랫폼</span>
										<span>PC (스팀)</span>
									</p>
									<p>
										<span>출시일</span>
										<span>2022.04.28</span>
									</p>
									<p>
										<span>장르</span>
										<span>하이스피드 액션</span>
									</p>
									<p>
										<span>언어</span>
										<span>음성: 영어, 일본어 / 자막: 한국어, 영어, 일본어, 중국어 등 기타 언어 지원</span>
									</p>
									<p>
										<span>개발사</span>
										<span>Next Stage / Visual Dart</span>
									</p>
									<p>
										<span>심의등급</span>
										<span>12세이용가</span>
									</p>
									<p>
										<span>배급사</span>
										<span>하이퍼큐브</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</main>
		<div class="etc_menu">
			<!--#include file="../inc/etc_menu.asp"-->
			<%@ include file="../inc/etc_menu.jsp" %>
		</div>
		<footer>
			<!--#include file="../inc/footer.asp"-->
			<%@ include file="../inc/footer.jsp" %>
			<!--#include file="../inc/back.asp"-->
			<%@ include file="../inc/back.jsp" %>
		</footer>
	</div>
</body>
<script>
	jQuery('.btn_function').click(function () {
		if ($("#tools_layer").css("display") == "none") {
			jQuery('#tools_layer').css("display", "block");
		} else {
			jQuery('#tools_layer').css("display", "none");
		}
	});
	jQuery('.i_icon').click(function () {
		if ($("#tools_layer1").css("display") == "none") {
			jQuery('#tools_layer1').css("display", "block");
		} else {
			jQuery('#tools_layer1').css("display", "none");
		}
	});
	jQuery('.comment_btn').click(function () {
		if ($(".comments_block").css("display") == "none") {
			jQuery('.comments_block').css("display", "block");
		} else {
			jQuery('.comments_block').css("display", "none");
		}
	});


	$(document).ready(function () {
		var galleryTop = new Swiper('.gallery-top', {
			loop: false,
			autoplay: {
				delay: 3000,
				// disableOnInteraction: true,
			},
			touchRatio: 0,
			slidesPerView: 1
			// loopedSlides: 4
		});
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			centeredSlides: true,
			slidesPerView: 5,
			touchRatio: 0,
			slideToClickedSlide: true,
			loop: false,
			// freeMode: true,
			// loopedSlides: 4
		});
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;


	});

	// 하이퍼큐브 게임소개_탭메뉴
	jQuery('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');

	});
	// 하이퍼큐브 게임소개 모달팝업
	$(document).ready(function () {
		$(".open").hide();
		$(".game_infor_wrap").click(function () {
			$(".open").css('display', 'flex').hide().fadeIn();
		});
		$('html').addClass("active");
		$("#close,.popup_bg").click(function () {
			modalClose();
		});

		function modalClose() {
			$(".open").fadeOut(200);
		}
	});
</script>

</html>