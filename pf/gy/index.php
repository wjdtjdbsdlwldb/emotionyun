<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>고양아람누리</title>
    <link rel="stylesheet" href="./index.css">
    <link rel="stylesheet" href="/pf/gy/font/font.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css">
    <!-- swiper 불러오기 -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.min.css">
    <script src="./index.js"></script>
</head>

<body>
    <div class="top-search popup popup-active">
        <div class="search-area">
            <input type="text" id="searchbox" value="" title="통합검색 박스" placeholder="검색어를 입력해 주세요">
            <a href="#" class="icon-sc"></a>
        </div>
        <span class="sc-close"></span>
    </div>

    <div class="top-bar con-min-width popup-active">
        <div class="main-bar flex flex-ai-c con">
            <div class="side-btn flex-1-0-0">
                <a href="#" class="open-btn block" onclick="Popup();">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </a>
            </div>
            <div class="logo flex-1-0-0">
                <a href="#">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/logo.png" alt=""></a>
            </div>
            <nav class="menu-box flex">
                <ul class="flex login">
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">회원가입</a></li>
                </ul>
                <ul class="flex icon">
                    <li><a href="#"><img
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_search_main_show.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#"><img
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_calendar_2.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#">
                            <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_lang_2.png?dummy123123"
                                alt=""></a>
                        <ul class="text-align-center">
                            <li><a href="#" class="block">ENG</a></li>
                            <li><a href="#" class="block">JPN</a></li>
                            <li><a href="#" class="block">CHN</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="main con-min-width">
        <div class="swiper-container swiper1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <video src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/dronevidoo_aram.mp4" id="video"
                        autoplay="" loop="" muted="" playsinline=""></video>
                    <div class="text-box text-align-center">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/txt_aram_slide.png?dummy123123"
                            alt="">

                        <h2 class="">고양아람누리</h2>
                        <div class="line-bt"></div>
                        <a href="#" class="view">VIEW</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <video src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/dronevidoo_oulim.mp4" id="video"
                        autoplay="" loop="" muted="" playsinline="">
                    </video>
                    <div class="text-box text-align-center">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/txt_oulim_slide.png?dummy123123"
                            alt="">
                        <h2 class="">고양어울림누리</h2>
                        <div class="line-bt2"></div>
                        <a href="#" class="view">VIEW</a>
                    </div>
                </div>
            </div>
            <div class="btn-1 con">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>

    <div class="side-menu-box">
        <div class="close-box">
            <div class="close-btn">
                <a href="#">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_close_allmenu.png?dummy123123"
                        alt="">
                    전체메뉴닫기
                </a>
            </div>
        </div>
        <div class="menu-area">
            <div class="menu-wrap">
                <nav class="sd-menu">
                    <ul class="flex">
                        <li><a href="#" class="block">공연</a>
                            <ul>
                                <li><a href="#">공연일정</a></li>
                                <li><a href="#">연간공연일정</a></li>
                                <li><a href="#">공연패키지</a></li>
                                <li><a href="#">공연새소식</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="block">전시</a>
                            <ul>
                                <li><a href="#">전시일정</a></li>
                                <li><a href="#">전시연계교육</a></li>
                                <li><a href="#">전시새소식</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="block">문화예술교육</a>
                            <ul>
                                <li>
                                    <a href="#">문화예술교육소개</a>
                                    <a href="#">프로그램소개/신청</a>
                                    <a href="#">나의수강현황</a>
                                    <a href="#">교육새소식</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#" class="block">지역문화</a>
                            <ul>
                                <li><a href="#">고양문화다리</a></li>
                                <li><a href="#">거리예술활성화</a></li>
                                <li><a href="#">고양버스커즈</a></li>
                                <li><a href="#">고양행주문화제</a></li>
                                <li><a href="#">고양호수예술축제</a></li>
                                <li><a href="#">썸머페스티벌</a></li>
                                <li><a href="#">콘서트차량</a></li>
                                <li><a href="#">시민모니터링단</a></li>
                                <li><a href="#">지역문화진흥</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="block">대관</a>
                            <ul>
                                <li><a href="#">공연장</a></li>
                                <li><a href="#">미술관</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="block">커뮤니티</a>
                            <ul>
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">이벤트</a></li>
                                <li><a href="#">관람리뷰</a></li>
                                <li><a href="#">영상갤러리</a></li>
                                <li><a href="#">문화예술이야기</a></li>
                                <li><a href="#">보도자료</a></li>
                                <li><a href="#">웹진</a></li>
                                <li><a href="#">계간 누리</a></li>
                            </ul>
                        </li>
                        <li><a href="#" class="block">고객센터</a>

                            <ul>
                                <li><a href="#">오시는길</a></li>
                                <li><a href="#">고객의소리</a></li>
                                <li><a href="#">1:1 문의</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">좌석배치도</a></li>
                                <li><a href="#">예매안내</a></li>
                                <li><a href="#">관람예절</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="grid-box flex">
                    <div class="grid1 grid row">
                        <h2><a href="#">
                                재단소개
                            </a></h2>
                        <a href="#" class="more"></a>
                        <ul class="cell">
                            <li><a href="#">소개</a></li>
                            <li><a href="#">인사말</a></li>
                            <li><a href="#">운영목표</a></li>
                            <li><a href="#">조직 및 기구</a></li>
                            <li><a href="#">경영공시</a></li>
                        </ul>
                        <ul class="cell right-box">
                            <li><a href="#">윤리경영</a></li>
                            <li><a href="#">CI소개</a></li>
                            <li><a href="#">조례/정관</a></li>
                            <li><a href="#">후원회</a></li>
                        </ul>
                    </div>
                    <div class="grid2 grid">
                        <h2><a href="#">
                                고양아람누리
                            </a></h2>
                        <a href="#" class="more"></a>
                        <ul>
                            <li><a href="#">오시는길</a></li>
                            <li><a href="#">공연장</a></li>
                            <li><a href="#">미술관</a></li>
                            <li><a href="#">편의시설</a></li>
                            <li><a href="#">공연장투어</a></li>
                        </ul>
                    </div>
                    <div class="grid3 grid">
                        <h2><a href="#">
                                고양어울림누리
                            </a></h2>
                        <a href="#" class="more"></a>
                        <ul>
                            <li><a href="#">오시는길</a></li>
                            <li><a href="#">공연장</a></li>
                            <li><a href="#">미술관</a></li>
                            <li><a href="#">별따기배움터</a></li>
                            <li><a href="#">편의시설</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="page-2  con-min-width active-on-visible effect" data-active-on-visible-diff-y="200">
        <nav class="infor side-con">
            <ul class="flex text-align-center">
                <li><a href="#" class="block">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/a_link1.png?dummy123123" alt="">
                        <p>오시는길</p>
                    </a></li>
                <li><a href="#" class="block">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/a_link2.png?dummy123123" alt="">
                        <p>좌석배치도</p>
                    </a></li>
                <li><a href="#" class="block">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/a_link3.png?dummy123123" alt="">
                        <p>예매안내</p>
                    </a></li>
                <li><a href="#" class="block">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/a_link4_2.png?dummy123123"
                            alt="">
                        <p>공지사항</p>
                    </a></li>
                <li><a href="#" class="block">
                        <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/a_link5_2.png?dummy123123"
                            alt="">
                        <p>공연장<br>대관신청</p>
                    </a></li>
            </ul>
        </nav>
    </div>

    <div class="page-3 con-min-width active-on-visible effect" data-active-on-visible-diff-y="50">
        <h2 class="tit side-con">전체공연</h2>
        <div class="swiper-container swiper2">
            <ul class="swiper-wrapper">
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200806_02.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>새라새ON - 낙타상자</p>
                            <p>2020-11-13(금) ~ 2020-11-15(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>새라새ON - 낙타상자</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200922_01.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>새라새ON - 송영주 with Friends</p>
                            <p>2020-12-04(금) ~ 2020-12-05(토)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>새라새ON - 송영주 with Friends</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200317_01.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 아람누리 마티네콘서트 1</p>
                            <p>2020-12-10(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 아람누리 마티네콘서트 1</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200219_15.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>새라새on시리즈 패키지</p>
                            <p>2020-04-25(토) ~ 2020-12-05(토)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>새라새on시리즈 패키지</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20201012_06.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>제 67회 정기연주회, 평화와 힐링 콘서트</p>
                            <p>2020-11-10(화)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>제 67회 정기연주회, 평화와 힐링 콘서트</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20201012_02.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 론 브랜튼의〈재즈 크리스마스! 〉- 20주년 기념</p>
                            <p>2020-12-25(금)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 론 브랜튼의〈재즈 크리스마스! 〉- 20주년...</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200831_02.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>포레스텔라 콘서트[넬라 판타지아] - 고양</p>
                            <p>2020-11-14(토) ~ 2020-11-15(토)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>포레스텔라 콘서트[넬라 판타지아] - 고양</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200803_05.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>정미조X말로X박주원 The 3 LIVE</p>
                            <p>2020-11-07(토)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>정미조X말로X박주원 The 3 LIVE</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200917_09.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>거리두기좌석제 콘서트 <이십세기 이승환 +> 고양</p>
                            <p>2020-10-31(토)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>거리두기좌석제 콘서트 <이십세기 이승환 +> 고양</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200928_02.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>뮤직 퍼포먼스 '골목길'</p>
                            <p>2020-10-24(토) ~ 2020-10-25(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>뮤직 퍼포먼스 '골목길'</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20191230_09.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 아람누리 마티네콘서트 4</p>
                            <p>2020-10-29(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 아람누리 마티네콘서트 4</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200929_04.jpg?dummy1231231"
                        alt="">
                    <div class="pt-txt">
                        <span class="nuri2">어울림<br>누리</span>
                        <div class="pt-infor">
                            <p>고양시 어린이와 함께하는 "그림으로 듣는 음악회"</p>
                            <p>2020-10-25(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>고양시 어린이와 함께하는 "그림으로 듣는 음악회"</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200616_08.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 아람누리 마티네콘서트 2</p>
                            <p>2020-11-05(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 아람누리 마티네콘서트 2</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200114_13(2).png?dummy123123"
                        alt="">
                    <div class="pt-txt">
                        <span class="nuri2">어울림<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 아침음악나들이 - 박미경</p>
                            <p>2020-11-26(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 아침음악나들이 - 박미경</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20201006_04.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>초대거부:invitation Denied-part 1</p>
                            <p>2020-10-14(수) ~ 2020-11-28(토)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>초대거부:invitation Denied-part 1</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200917_03.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>김가은 댄스 컬렉티브 [모호한 경계 Ⅲ - SPACE: ‘Park']</p>
                            <p>2020-11-05(목) ~ 2020-11-06(금)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>김가은 댄스 컬렉티브 [모호한 경계 Ⅲ - SPACE:...</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200917_01.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>광개토 사물놀이 예술단 [국악 & 힙합 하이브리드 콘서트 ‘무브먼트 코리아’]</p>
                            <p>2020-12-13(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>광개토 사물놀이 예술단 [국악 & 힙합 하이브리드 콘서...</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200924_01.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>베이스바리톤 길병민 리사이틀</p>
                            <p>2020-11-12(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>베이스바리톤 길병민 리사이틀</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200818_04.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri2">어울림<br>누리</span>
                        <div class="pt-infor">
                            <p>뮤지컬 헬로카봇 시즌5 [별똥별을 지켜라!] - 고양</p>
                            <p>2020-12-12(토) ~ 2020-12-13(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>뮤지컬 헬로카봇 시즌5 [별똥별을 지켜라!] - 고양</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200818_08.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri2">어울림<br>누리</span>
                        <div class="pt-infor">
                            <p>뮤지컬[알사탕]</p>
                            <p>2020-12-04(금) ~ 2020-12-06(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>뮤지컬[알사탕]</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200907_02.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>목이 긴 메아리</p>
                            <p>2020-10-15(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>목이 긴 메아리</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200820_06.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>[취소] 김목경 공연</p>
                            <p>2020-10-18(일)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>[취소] 김목경 공연</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200114_09.png?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri2">어울림<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 아침음악나들이 - 패키지 [웹표시용]</p>
                            <p>2020-03-26(목) ~ 2020-11-26(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 아침음악나들이 - 패키지 [웹표시용]</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20191230_11.jpg?dummy123123" alt="">
                    <div class="pt-txt">
                        <span class="nuri">아람<br>누리</span>
                        <div class="pt-infor">
                            <p>2020 아람누리 마티네콘서트 패키지 [웹표시용]</p>
                            <p>2020-04-23(목) ~ 2020-11-05(목)</p>
                        </div>
                        <div class="hov row">
                            <a href="#" class="favor block cell-right"></a>
                            <p>2020 아람누리 마티네콘서트 패키지 [웹표시용]</p>
                            <a href="#" class="detail block">상세</a>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- Add Pagination -->
            <div class="swiper-pagination">
                <span class="swiper-pagination-progressbar-fill"></span>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>

    <div class="page-4 con-min-width active-on-visible effect" data-active-on-visible-diff-y="50">
        <a href="#" class="banner">
            <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/20200624_11_1.jpg?dummy123123" alt="">
        </a>
    </div>

    <div class="page-5 con-min-width active-on-visible effect" data-active-on-visible-diff-y="50">
        <div class="box-list-1 side-con">
            <div class="flex box-1212 flex-ai-c">
                <h2 class="text flex flex-grow-1">
                    <a href="#">Notice</a></h2>
                <div class="head">
                    <ul class="flex">
                        <li class="flex-1-0-0 active" data-tab-name="box-1" data-tab-head-item-name="1"><a>전체</a>
                        </li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="2"><a>공지</a></li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="3"><a>공연</a></li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="4"><a>전시</a></li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="5"><a>교육</a></li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="6"><a>채용</a></li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="7"><a>입찰</a></li>
                        <li class="flex-1-0-0" data-tab-name="box-1" data-tab-head-item-name="8"><a>대관</a></li>

                    </ul>
                </div>
            </div>
            <div class="flex flex-row-wrap">
                <div class="box">
                    <div class="content tab-type-1">
                        <div class="body">
                            <ul class="flex">
                                <li class="active" data-tab-name="box-1" data-tab-body-item-name="1">
                                    <span>공연</span>
                                    <a href="#" class="block">[일정변경] 정미조X말로X박주원 The 3 LIVE</a>
                                    <p>2020-10-08</p>
                                </li>
                                <li class="active" data-tab-name="box-1" data-tab-body-item-name="1">
                                    <span>공지</span>
                                    <a href="#" class="block">2020년 추석연휴 서비스플라자 운영 안내</a>
                                    <p>2020-09-28</p>
                                </li>
                                <li class="active" data-tab-name="box-1" data-tab-body-item-name="1">
                                    <span>채용</span>
                                    <a href="#" class="block">공공미술 프로젝트 사업보조 단시간 근로자 채용공고</a>
                                    <p>2020-09-25</p>
                                </li>
                            </ul>
                            <ul class="flex">
                                <li data-tab-name="box-1" data-tab-body-item-name="2">
                                    <span>공지</span>
                                    <a href="#" class="block">2020년 추석연휴 서비스플라자 운영 안내</a>
                                    <p>2020-09-28</p>
                                </li>
                                <li data-tab-name="box-1" data-tab-body-item-name="2">
                                    <span>공지</span>
                                    <a href="#" class="block">2020년 지역 예술활동기획 공모 지원사업 <고양예술은행> 공모</a>
                                    <p>2020-09-21</p>
                                </li>
                                <li data-tab-name="box-1" data-tab-body-item-name="2">
                                    <span>공지</span>
                                    <a href="#" class="block">공연·전시·교육·축제·행사 등 취소 안내</a>
                                    <p>2020-09-03</p>
                                </li>
                            </ul>
                            <ul class="flex">
                                <li data-tab-name="box-1" data-tab-body-item-name="3">
                                    <span>공연</span>
                                    <a href="#" class="block">[일정변경] 정미조X말로X박주원 The 3 LIVE</a>
                                    <p>2020-10-08</p>
                                </li>
                                <li data-tab-name="box-1" data-tab-body-item-name="3">
                                    <span>공연</span>
                                    <a href="#" class="block">[취소] 아침음악나들이 3 <테이></a>
                                    <p>2020-09-08</p>
                                </li>
                                <li data-tab-name="box-1" data-tab-body-item-name="3">
                                    <span>공연</span>
                                    <a href="#" class="block">[취소] 새라새ON - 공연배달서비스 간다 [템플]</a>
                                    <p>2020-09-04</p>
                                </li>
                            </ul>
                            <ul class="flex">
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="4">
                                    <span>전시</span>
                                    <a href="#" class="block">[운영중단] 이웃예술가와 함께하는 미술감상 커뮤니티 운영중단 안내</a>
                                    <p>2020-08-18</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="4">
                                    <span>전시</span>
                                    <a href="#" class="block">프렌치모던 : 모네에서 마티스까지 展 휴관 안내</a>
                                    <p>2020-08-18</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="4">
                                    <span>전시</span>
                                    <a href="#" class="block">[공모]2021고양우수작가공모전 ‘고양아티스트365’ 전시 작가 공모</a>
                                    <p>2020-08-04</p>
                                </li>
                            </ul>
                            <ul class="flex">
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="5">
                                    <span>교육</span>
                                    <a href="#" class="block">어울림문화학교 3학기 잠정중단 안내</a>
                                    <p>2020-08-17</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="5">
                                    <span>교육</span>
                                    <a href="#" class="block">2020 아람문예아카데미 일시중단 안내</a>
                                    <p>2020-08-15</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="5">
                                    <span>교육</span>
                                    <a href="#" class="block">2020 아람문예아카데미 상반기 임시공휴일 휴강 안내</a>
                                    <p>2020-08-12</p>
                                </li>
                            </ul>

                            <ul class="flex">
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="6">
                                    <span>채용</span>
                                    <a href="#" class="block">공공미술 프로젝트 사업보조 단시간 근로자 채용공고</a>
                                    <p>2020-09-25</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="6">
                                    <span>채용</span>
                                    <a href="#" class="block">2020년 제1차 고양문화재단 전문 기간제 및 정규직 채용 최종 합격자 공고</a>
                                    <p>2020-08-05</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="6">
                                    <span>채용</span>
                                    <a href="#" class="block">2020년 제2차 고양문화재단 기간제 직원 채용 최종 합격자 공고</a>
                                    <p>2020-08-04</p>
                                </li>
                            </ul>
                            <ul class="flex">
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="7">
                                    <span>입찰</span>
                                    <a href="#" class="block">일제강점기 침탈의 현장, 30사단 내 항일음악회 행사 용역 개찰 결과</a>
                                    <p>2019-03-21</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="7">
                                    <span>입찰</span>
                                    <a href="#" class="block">2019년 시민과 함께하는 물놀이음악회 대행용역 입찰결과 안내</a>
                                    <p>2019-03-12</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="7">
                                    <span>입찰</span>
                                    <a href="#" class="block">공유재산(아람누리 해받이터) 사용.수익허가입찰공고</a>
                                    <p>2017-08-31</p>
                                </li>
                            </ul>
                            <ul class="flex">
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="8">
                                    <span>대관</span>
                                    <a href="#" class="block">2021년 상반기 공연장 정기대관 신청 안내</a>
                                    <p>2020-08-07</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="8">
                                    <span>대관</span>
                                    <a href="#" class="block">2020 호수청소년생활문화센터 [호수마당] 9월 수시대관 공고</a>
                                    <p>2020-08-07</p>
                                </li>
                                <li class="" data-tab-name="box-1" data-tab-body-item-name="8">
                                    <span>대관</span>
                                    <a href="#" class="block">2020 아람생활문화센터 [아람마당] 9월 수시대관 공고</a>
                                    <p>2020-08-07</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <div class="page-6 con-min-width text-align-center active-on-visible effect" data-active-on-visible-diff-y="100">
        <div class="tit-txt">
            <p>생활 속 문화예술 배움터 · 지역 유일의 문화예술 전문 아카데미</p>
            <h2>고양시민문화 예술학교</h2>
        </div>
        <ul>
            <li
                style="background-image:url(https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_edu1.png?dummy123123)">
                <a href="#" class="block">아람문예아카데미</a></li>
            <li
                style="background-image:url(https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_edu2.png?dummy123123)">
                <a href="#" class="block">어울림문화학교</a></li>
            <li
                style="background-image:url(https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_edu3.png?dummy123123)">
                <a href="#" class="block">문화예술교육지원사업</a></li>
        </ul>
    </div>

    <div class="page-7 con-min-width">
        <div class="aram flex active-on-visible effect" data-active-on-visible-diff-y="150">
            <div class="img-box"
                style="background-image:url(https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/hall_aram2.jpg?dummy123123)">
            </div>
            <div class="bg-txt">
                <div class="aram-box">
                    <h3>Aram Nuri Arts Center</h3>
                    <h2>고양아람누리</h2>
                    <span class="block">세계적인 예술가를 만나는 곳</span>
                    <p>고양시 일산동구 정발산 자락에 자리잡은 아람누리는<br>
                        ‘크고 아름다운 세상’이라는 뜻으로<br>
                        문화예술의 새로운 르네상스를 꿈꾸는<br>
                        고양시의 의지를 표현한 이름입니다.<br>
                        뛰어난 접근성을 자랑하는 아람누리는<br>
                        1만 6천여 평의 대지에 장르별로 특성화하여 만들어진<br>
                        세계적 수준의 전문공연예술센터 입니다.</p>
                    <a href="#">자세히보기</a>
                </div>
            </div>
        </div>
        <div class="oulim flex active-on-visible effect" data-active-on-visible-diff-y="150">
            <div class="bg-txt">
                <div class="aram-box">
                    <h3>Oulim Nuri Arts Center</h3>
                    <h2>고양어울림누리</h2>
                    <span class="block">생활 속의 예술가가 되는 곳</span>
                    <p>고양시 덕양구 성사동에 위치한 어울림누리는<br>
                        공연장, 문화예술 교육시설, 체육시설이 어우러진<br>
                        동양 최대의 복합 문화예술 공간입니다.<br>
                        시민들을 위한 생활 밀착형 공연, 전시<br>
                        그리고 문화예술 교육 강좌등<br>
                        생활예술이 함께 호흡하는 열린 문화예술 공원입니다</p>
                    <a href="#">자세히보기</a>
                </div>
            </div>
            <div class="img-box"
                style="background-image:url(https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/hall_oulim2.jpg?dummy123123)">
            </div>
        </div>
    </div>

    <div class="page-8 con-min-width active-on-visible effect" data-active-on-visible-diff-y="100">
        <div class="social flex flex-ai-c">
            <div class="warp flex-grow-1">
                <div class="player-box" onclick="playVideo();">
                    <div id="player"></div>
                    <img src="https://i.ytimg.com/vi/pgo1v7SCOMM/hqdefault.jpg" alt="">
                    <button><img src="http://www.artgy.or.kr/_asset/img/main/btn_play_youtube.png" alt=""></button>
                </div>
            </div>
            <div class="box-list-2 con">
                <div class="flex flex-row-wrap">
                    <div class="box2">
                        <div class="content2 tab-type-2">
                            <div class="head2">
                                <ul class="flex">
                                    <li class="flex-1-0-0 active2" data-tab-name-2="box-1"
                                        data-tab-head-item-name-2="1">
                                        <a><img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/sns_tab_icon_twitter.gif?dummy123123"
                                                alt="">트위터</a></li>
                                    <li class="flex-1-0-0" data-tab-name-2="box-1" data-tab-head-item-name-2="2">
                                        <a><img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/sns_tab_icon_blog.gif?dummy123123"
                                                alt="">블로그</a></li>
                                    <li class="flex-1-0-0" data-tab-name-2="box-1" data-tab-head-item-name-2="3">
                                        <a><img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/sns_tab_icon_facebook.gif?dummy123123"
                                                alt="">페이스북</a></li>
                                </ul>
                            </div>
                            <div class="body2">
                                <ul>
                                    <li class="active2" data-tab-name-2="box-1" data-tab-body-item-name-2="1">
                                        <ul class="sns-box row">
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #템플 #온라인상영 10.28(수) 저녁8시 💥https://t.co/VZh1REpaSZ #공연배달서비스간다
                                                        #연극 #아람누리 #고양문화재단 https://t.co/uvZ6EEw6Lx
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양아람누리 상주단체 공연배달서비스 간다 템플 TEMPLE #온라인상영 - ☑ 10월 27일(화), 28일(수)
                                                        저녁 8시 ☑ 고양문화재단 유튜브 채널 🎥 https://t.co/D34TYAC0pA
                                                        https://t.co/K3dhZX1M7J
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #티켓오픈 8. 4(화) 11am #공연일 10. 10(토) 5pm #아람누리 #아람극장 R석 3만원 S석 2만원
                                                        A석 1만원 . #정미조 #말로 #박주원 #아람극장 #아람누리 #콘서트 #라이브 #LIVE…
                                                        https://t.co/PjsRKkIb3K
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #2020마티네콘서트 티켓 재오픈 안내 #재오픈일 8.8(토) 11am . 오상진의 스윗 클래식 - 8.27(목)
                                                        - 10.29(목) - 11.5(목) - 12.10(목) 아람누리 아람음악당 전석 2만원 .…
                                                        https://t.co/jaYVuS74SZ
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #공연계최초 #안심하고예매 내 자리 옆엔 아무도 못앉게 만들어드려요~ 가족&친구&연인은 같이, 선택 좌석 좌우엔
                                                        1자리씩 자동 거리두기! . https://t.co/Mm1IUE4Kpy https://t.co/qF30fHOfPw
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #문화가있는날 7/29(수) 관람료 5천원(청소년 4천원) #사전예매필수 . #아람미술관 #프렌치모던
                                                        #모네에서마티스까지 #모네 #마티스 #미술관 #갤러리 #고양시 #데이트 #나들이 #일상 #문화예술…
                                                        https://t.co/h25jImMdHZ
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        프렌치모던 보자 그게 뭔데 모네랑 마티스 보러 가자고 그거 어떻게 하는 건데 . . . 사전예매 -
                                                        https://t.co/n42ZSLIolJ https://t.co/VzrYv7hrmD
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #사전예매 #프렌치모던 #브루클린미술관 #아람미술관 이번주말 미술관 오려면 지금 예약! . 예약 >>
                                                        https://t.co/uG2GV68RJ4 https://t.co/n6FZtWMMNx
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        RT @williamyoun: I am most proud and happy to share the cover my
                                                        my upcoming album! Thank you irene.zandel for the special
                                                        photos, your und…
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img class="inline-block"
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/twitter_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">7시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #전시연장 #사전예약필수 <프렌치모던:모네에서 마티스까지,1850-1950>
                                                            https://t.co/uG2GV68RJ4 https://t.co/tiPxvPRrOM
                                                    </div>
                                                </a></li>
                                        </ul>
                                    </li>

                                    <li data-tab-name-2="box-1" data-tab-body-item-name-2="2">
                                        <ul class="sns-box row">
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">공연배달서비스 간다 '템플 TEMPLE'</span>
                                                        <span class="screen_name">@artsgoyang</span>
                                                        <span class="date">10월 23일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양아람누리 상주단체 공연배달서비스 간다템플 TEMPLE-시간: 10월 27일(화), 28일(수) 저녁 8시장소:
                                                        고양문화재단 유투브 채널-📣 실시간으로 공연을 관람하실 수 있으며,공연이 끝난 이후에는 관람이 불가능합니다.
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">2020 아람누리 마티네콘서트 4</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 13일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        찬바람 불 땐 클래식-2020 아람누리 마티네콘서트 4피아니스트 원재연과 다채로운 편성의 실내악으로 꾸미는마티네
                                                        콘서트의 특별한 무대쌀쌀한 바람이 부는 가을, 실내악을 만나보세요!
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">[일정변경] 정미조X말로X박주원 The 3 LIVE</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 8일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        정미조X말로X박주원 The 3 LIVE변경일정 > 2020년 11월 7일(토) : 오후 5시
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양버스커즈 집콕콘서트 시즌2의 세 번재 공연 안내!</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 6일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양버스커즈 집콕콘서트 시즌2의 두 번재 공연 안내!10월 7일(수) 저녁 7시에 시작됩니다!올드팝의
                                                        진수"한키"우리 고양 트로트 대장"민들레예술단"즐거움을 나눠주는 밴드"마이통밴드"집콕 콘서트 상영은 아래
                                                        링크(고양버스커즈 유튜브 채널)에서상영하실 수 있습니다.
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">오늘의 #좋은글</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 6일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #아메리카노좋아좋아좋아
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">10월 공연 미리보기</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 5일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        살랑살랑 가을바람에 💨🍁🍂고양문화재단이 준비한 공연소식을 실어 보냅니다.정미조X말로X박주원 The 3 LIVE
                                                        2020 아람누리 마티네콘서트 4목이 긴 메아리권율의 여자들김목경 공연그리운 한국 가곡 시리즈1 "가곡에 살리라”
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양버스커즈 집콕콘서트 시즌2의 두 번재 공연 안내!</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">9월 29일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양버스커즈 집콕콘서트 시즌22편의 출연진을 공개합니다!9월 30일(수) 저녁 7시 부터 시작이 됩니다.많은 상영
                                                        부탁드립니다!!다재다능한 멀티악기연주자"영혼다해"아름다운 오카리나 합창단"엔젤스 오카리나"자유로운 영혼의
                                                        바이올리니스트"살로세르게이"섬세하고 역동적인 연주를 선사하는 피아니스트"김주영?집콕 콘서트 상영은 아래 링크로
                                                        이동하시면 됩니다.
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">즐거운 한가위 보내세요~</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">9월 29일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        2020년 추석연휴 서비스플라자 운영 안내-아람누리, 어울림누리 고객도움자리 고객센터 및 콜센터도 쉬어갑니다.9월
                                                        30일(수) ~ 10월 2일(금) 3일 휴무-즐거운 일 가득한 한가위되시길 바랍니다🙇‍♀️ 고양문화재단
                                                        서비스플라자 드림 🙇
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">우리동네 글로컬(Global+Local) 아티스트, 집콕으로
                                                            만나요!</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">9월 24일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        우리동네 글로컬(Global+Local) 아티스트, 집콕으로 만나요!- 고양문화재단, 2020 하반기 <고양버스커즈
                                                            집콕콘서트> 확대 진행 중- ~11/25 매주 수요일 저녁 7시, 고양버스커즈 유튜브 채널에
                                                            공개고양문화재단에서는 고양지역에 거주하며 전세계를 무대로 활약하는 예술가, ‘글로컬(Global+Local)
                                                            아티스트’를 초청해 시민들이 다양하고 수준 높은 문화 예술을 감상할 수 있는 기회를 선사합니다. 글로컬
                                                            아티스트란, 고양문화재단이 고양에 사는 세계적인 수준의 예술가들을 위해 존경과 애정을 담아 만든 호칭인데요~
                                                            ‘세계적인’을 뜻하는 영어단어 ‘글로벌’과 ‘지역의’와 ‘주민’을 의미하는 영어단어 ‘로컬’을
                                                            조합.......
                                                    </div>
                                                </a></li>
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/blog_profile.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">카카오프로젝트100_피아니스트 임현정편 온라인 Meet
                                                            UP(9/24)</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">9월 24일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        🍁가을밤 임현정과 함께🎹 듣고 나누는 베토벤 음악이야기.#데일리씨어터 #카카오프로젝트100피아니스트 임현정편
                                                        온라인 Meet UP : 9/24(목)
                                                        8pmhttps://www.youtube.com/user/davidavid2009
                                                    </div>
                                                </a></li>
                                        </ul>
                                    </li>

                                    <li data-tab-name-2="box-1" data-tab-body-item-name-2="3">
                                        <ul class="sns-box">
                                            <li><a href="#" class="inline-block">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini1.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">12시간전</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        <카카오프로젝트100> #재주소년 #온라인미팅 유튜브로 드루와 드루와~🎶🔊 2020.10.30(금) #오늘 저녁
                                                            8시 ✅ https://www.youtube.com/c/afternoonrecords
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini2.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 29일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양문화재단 #목요고사
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini3.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 28일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        [고양버스커즈 집콕콘서트 시즌 2] 제6편 'ROCK N' ROLL' 출연진 공개
                                                        💥https://www.youtube.com/channel/UCE3TNl7ZExNhwM8bz633Yvg 신나는
                                                        ROCK의 세계로 빠지고 싶으신 분들은 잠시 후, 저녁 19시 고양버스커즈 유튜브 채널에서 만나요! ( •̀ .̫
                                                        •́ )✧
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini4.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 28일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #템플 #온라인상영 오늘저녁 8시 . 💥https://youtu.be/B1abj8lhML4
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini5.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 27일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        🙌이따 저녁 8시에 만나요~🙌 고양아람누리 상주단체 공연배달서비스 간다 템플 TEMPLE - ☑ 10월
                                                        27일(화), 28일(수) 저녁 8시 ☑ 고양문화재단 유튜브 채널 🎥 https://bit.ly/2HBDUmQ -
                                                        📣 녹화분을 실시간으로 상영하실 수 있습니다.
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini6.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 26일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        오늘의 #좋은글
                                                    </div>
                                                </a></li>
                                            <li><a href="#"> <img
                                                        src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini7.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 23일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #고양버스커즈TV 고퀄리티로 거리공연을 온라인에서 보고싶다면 여기로 👉🏻유튜브 : 고양버스커즈TV #잠시후7시
                                                        https://www.youtube.com/channel/UCE3TNl7ZExNhwM8bz633Yvg
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini8.png?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 23일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양아람누리 상주단체 공연배달서비스 간다 템플 TEMPLE #온라인상영 - ☑ 10월 27일(화), 28일(수)
                                                        저녁 8시 ☑ 고양문화재단 유튜브 채널 🎥 https://youtu.be/_do-aeiy0zU - 📣 녹화분을
                                                        실시간으로 상영하실 수 있습니다.
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini7.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 22일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        #고양버스커즈TV 고퀄리티로 거리공연을 온라인에서 보고싶다면 여기로 👉🏻유튜브 : 고양버스커즈TV #잠시후7시
                                                        https://www.youtube.com/channel/UCE3TNl7ZExNhwM8bz633Yvg
                                                    </div>
                                                </a></li>
                                            <li><a href="#">
                                                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/mini9.jpg?dummy123123"
                                                        alt="">
                                                    <div class="sns-infor cell-right">
                                                        <span class="sns-tit">고양아람누리 고양어울림누리 고양문화재단</span>
                                                        <span class="screen_name">@ArtsGoyang</span>
                                                        <span class="date">10월 22일</span>
                                                    </div>
                                                    <div class="sns-cont">
                                                        고양문화재단 문화늬우스 10월호 - 시간관리의 끝판왕, 칸트 칸트의 동네사람들은 시계를 볼 필요가 없다는데, 그
                                                        이유는?
                                                    </div>
                                                </a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="ft-use side-con">
            <nav class="wrap">
                <ul class="flex">
                    <li><a href="#" class="block">경영공시</a></li>
                    <li><a href="#" class="block">이용약관</a></li>
                    <li><a href="#" class="block">이메일무단수집거부</a></li>
                    <li><a href="#" class="block">개인정보취급방침</a></li>
                </ul>
            </nav>
        </div>
        <div class="ft-infor side-con flex">
            <div class="copy-box flex-grow-1">
                <p><strong>고양어울림누리 : </strong> 10471 경기도 고양시 덕양구 어울림로 33 재단법인 고양문화재단 고양어울림누리
                    <br>사업자등록번호 128-82-08626</p>
                <p><strong>고양아람누리 :</strong> 10409 경기도 고양시 일산동구 중앙로 1286 고양아람누리
                    <br>사업자등록번호 128-82-10520</p>
                <p>대표번호 1577-7766 | 통신판매업신고번호 제2009-경기고양 9677호 | webmaster@artgy.or.kr</p>
                <p>COPYRIGHT © The goyang cultural foundation ALL RIGHTS RESERVED.</p>
            </div>
            <nav class="related text-align-right">
                <select name="relatedsites" id="relatedsites" title="관련사이트"
                    onchange="if(this.value) window.open(this.value);">
                    <option value="관련사이트">관련사이트</option>
                    <option value="#">고양시청</option>
                    <option value="#">고양시의회</option>
                    <option value="#">중남미문화원</option>
                    <option value="#">고양시 시설관리공단</option>
                    <option value="#">프랑스문화원</option>
                    <option value="#">한국문화예설위원회</option>
                    <option value="#">한국예술종합학교</option>
                    <option value="#">국민권익위원회</option>
                    <option value="#">고양호수예술축제</option>
                    <option value="#">고양행주문화제</option>
                    <option value="#">고양어린이박물관</option>
                    <option value="#">고양시마두청소년수련관</option>
                    <option value="#">탄현청소년카페</option>
                    <option value="#">생활문화센터[마당]</option>
                    <option value="#">고양버스커즈</option>
                    <option value="#">고양시자원봉사센터</option>
                </select>
                <ul class="sns-icon flex flex-jc-end">
                    <li><a href="#"><img class="block"
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_sns_instagram.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#"><img class="block"
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_sns_facebook.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#"><img class="block"
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_sns_twitter.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#"><img class="block"
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_sns_blog.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#"><img class="block"
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_sns_youtube.png?dummy123123"
                                alt=""></a></li>
                </ul>
                <ul class="flex flink">
                    <img src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_flink2.png?dummy123123" alt="">
                    <li><a href="#"><img
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_flink3.png?dummy123123"
                                alt=""></a></li>
                    <li><a href="#"><img
                                src="https://wjdtjdbsdlwldb.github.io/img1/blog/article/gy/btn_flink4.png?dummy123123"
                                alt=""></a></li>
                </ul>
            </nav>
        </div>

    </div>
</body>

</html>