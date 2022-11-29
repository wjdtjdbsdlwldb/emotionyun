<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../inc/header.jsp" %>
<!--#include file="../inc/header.asp"-->
</head>
<body>
	<!--바로가기 메뉴 시작-->
	<div id="content_go">
		<!--#include file="../inc/contents_shortcut.asp"-->
		<%@ include file="../inc/contents_shortcut.jsp" %>	
	</div><!--바로가기 메뉴 끝-->
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
			</div><!--태블릿, 모바일 / 가로 1200px 이하 메뉴 끝-->
		</header>
		<main id="contents_shortcut">
			<!--sub-visual 시작-->
			<div class="sub_visual sub_visual04">
				<!--#include file="../inc/sub_visual04.asp"-->
				<%@ include file="../inc/sub_visual04.jsp" %>
			</div><!--sub-visual end-->
			<div class="sub_container">
				<div class="company_introduce_container">	
							<div class="inner clearfix">
								<div class="sub_contents">
									<h4>찾아오시는 길</h4>
									<div class="contents_wrap">
										<div class="map">
											<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.747547628042!2d129.06290571560737!3d35.13797298032454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb8410ef78ef%3A0xf99a4103c9c2d700!2z67aA7IKw6rSR7Jet7IucIOuPmeq1rCDrspTsnbwy64-ZIOyekOyEseuhnDEzM-uyiOq4uCAxMA!5e0!3m2!1sko!2skr!4v1628043024613!5m2!1sko!2skr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
										</div>
										<div class="map_txt">
											<h4 style="text-align: left; margin-bottom: 10px; color:#5642B1;">하이퍼큐브</h4>
											<table>
												<tbody><tr>
													<th><span class="icon_circle"></span>주소</th>
													<td>경기도 파주시 중앙로 328, 11층 청년창업사관학교 하이퍼큐브</td>
												</tr>
												<tr>
													<th><span class="icon_circle"></span>대표전화</th>
													<td>010-4355-8851</td>
												</tr>
												<tr>
													<th><span class="icon_circle"></span>사업 제휴</th>
													<td>biz@hypercube.games</td>
												</tr>
												<tr>
													<th><span class="icon_circle"></span>고객 지원</th>
													<td>game@hypercube.games</td>
												</tr>
											</tbody></table>
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
</html>