<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
<title>Hyeonjae's 1st Bulletin Board System SignUpPage</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 부트스트랩3 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- jQuery -->
<!-- <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script> -->
<!-- 커스텀 CSS -->
<link href="resources/css/signStyle.css" rel="stylesheet" type="text/css" media="screen">
<!-- 회원가입 유효성 검사 JS -->
<script type="text/javascript" src="resources/js/signValidation.js"></script>
</head>

<body>
	<!-- 최상단 네비 -->
	<div class="container-fluid">
		<nav class="navbar navbar-default">
			<ul class="nav navbar-nav navbar-right">
				<li style="font-size: 16px"><a href="index">메인으로</a></li>
			</ul>
		</nav>
		<nav class="navbar navbar-default">
			<div class="navbar-header">
				<a href="index"><img src="resources/img/j_favicon.png" class="img-thumbnail" width="100px" height="100px"></a>
			</div>
		</nav>
	</div>

	<div class="container-fluid text-center">
		<div id="signWrap" class="row">
			<div class="row">
				<h1>회원가입</h1>
				<!-- 회원가입 폼-->
				<form id="signUp" action="signUpForm/signUp" method="post">
					<!-- 아이디 -->
					<div id="idInputGroup" class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-user"></i>
						</span>
						<input id="id" type="text" class="form-control" name="id" placeholder="4자리 이상 영문 아이디를 입력하세요">
						<span id="idDupCheck" onclick="idDupCheck()" class="btn btn-warning input-group-addon">중복확인</span>
					</div>

					<!-- 비밀번호 -->
					<div id="pwInputGroup" class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-lock"></i>
						</span>
						<input id="password" type="password" class="form-control" name="password" placeholder="8자리 이상 비밀번호를 입력하세요">
					</div>
					<!-- 비밀번호 재확인 -->
					<div id="pwCheckInputGroup" class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-ok"></i>
						</span>
						<input id="pwCheck" type="password" class="form-control" name="pwCheck" placeholder="같은 비밀번호를 입력하세요">
					</div>
					<!-- 회원 정보 -->
					<div id="userInfoInputGroup" class="input-group">
						<!-- 이름 -->
						<span class="input-group-addon">이름</span>
						<input id="name" type="text" class="form-control" name="name" placeholder="이름">
						<!-- 성별 -->
						<span class="input-group-addon">성별</span>
						<select id="sex" class="form-control" name="sex">
							<option value="">선택</option>
							<option value="man">남성</option>
							<option value="woman">여성</option>
						</select>
						<!-- 생년월일 -->
						<span class="input-group-addon">생년월일</span>
						<input id="birthday" type="text" class="form-control" name="birthday" placeholder="ex) 19990506">
					</div>
					<!-- 이메일 -->
					<div id="emailInputGroup" class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-envelope"></i>
						</span>
						<input id="email" type="text" class="form-control" name="email" placeholder="이메일 인증에 이용되니 정확하게 입력하세요">
						<span onclick="emailCertify()" class="btn btn-warning input-group-addon">인증확인</span>
						<input id="active_key" name="active_key" type="hidden"></input>
					</div>
					<div class="progress">
						<div id="progressBar" class="progress-bar progress-bar-striped active" style="width: 0%; color: white;"></div>
					</div>
					<!-- 휴대전화 -->
					<div id="phoneInputGroup" class="input-group">
						<span class="input-group-addon">
							<i class="glyphicon glyphicon-phone"></i>
						</span>
						<input id="phone" type="text" class="form-control" name="phone" placeholder="ex) 01012345678">
					</div>
					<button onclick="validateUserInfo();return false;" class="btn btn-primary btn-block">회원가입</button>
				</form>
			</div>
		</div>
	</div>

	<jsp:include page="include/footer.jsp" />
</body>

</html>