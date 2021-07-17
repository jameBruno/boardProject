<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
<title>Hyeonjae's 1st Bulletin Board System</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 부트스트랩3 -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- 커스텀 CSS -->
<link href="../resources/css/boardStyle.css" rel="stylesheet" type="text/css" media="screen">
<!-- 네이버 스마트 에디터 2 -->
<script type="text/javascript" src="../resources/js/naver_smart_editor2/js/service/HuskyEZCreator.js" charset="utf-8"></script>
<!-- boardCRUD.js -->
<script type="text/javascript" src="../resources/js/boardCRUD.js"></script>

</head>

<body>
	<jsp:include page="../include/boardHeader.jsp" />

	<div class="container-fluid text-center">
		<!-- 그리드 분배 9, 3-->
		<div class="row">
			<!-- 메인 -->
			<div class="col-sm-9 text-left">
				<h1>자유게시판</h1>
				<div class="row">
					<div class="panel-group">
						<div class="panel panel-default">
							<!-- 작성글 헤더(글 제목, 글 정보) -->
							<div class="panel-heading">
								<h4>글 쓰기</h4>
							</div>
							<!-- 작성글 바디(글 내용) -->
							<div class="panel-body">
								<div class="well">
									<p>광고 1</p>
								</div>
								<!-- 글 작성 폼 -->
								<div class="row">
									<form id="write" action="write" method="post">
										<div class="input-group">
											<span class="input-group-addon">
												<i class="glyphicon glyphicon-user"></i>
											</span>
											<input readonly id="id" type="text" class="form-control" name="id" value="${login_session.u_id}">
										</div>
										<div class="input-group">
											<span class="input-group-addon">제목</span>
											<input id="title" type="text" class="form-control" name="title" placeholder="글 제목">
										</div>
										<!-- 네이버 스마트 에디터 -->
										<textarea name="content" id="content" rows="10" cols="128"></textarea>
										<button type="button" id="writeSubmit" class="btn btn-success pull-right">글 등록</button>
									</form>
								</div>
							</div>
							<!-- 작성글 푸터(댓글) -->
							<div class="panel-footer"></div>
						</div>
					</div>
				</div>
				<!-- 글목록 버튼 -->
				<button onclick="location.href='../index'" type="button" class="btn btn-primary pull-right">글목록</button>
			</div>
			<!-- 오른쪽 사이드 메뉴-->
			<div class="col-sm-3 sidenav">
				<div class="well">
					<p>광고 1</p>
				</div>
			</div>
		</div>

	</div>

	<jsp:include page="../include/footer.jsp" />

</body>

</html>