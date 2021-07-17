$(document).ready(function() {

	// 회원 가입 정보 키 입력시 유효성 검사
	// 아이디
	$("#id").focus(function() {
		if ($("#id").val() == 0) {
			$("#idInputGroup").addClass("has-error");
		}
		$("#id").keyup(function() {
			if ($("#id").val().length >= 4) {
				$("#idInputGroup").removeClass("has-error");
				$("#idInputGroup").addClass("has-success");
				$("#idDupCheck").removeClass("disabled");
			} else {
				$("#idInputGroup").removeClass("has-success");
				$("#idInputGroup").addClass("has-error");
				$("#idDupCheck").addClass("disabled");
			}
		});
	});

	// 비밀번호
	$("#password").focus(function() {
		if ($("#password").val() == 0) {
			$("#pwInputGroup").addClass("has-error");
		}
		$("#password").keyup(function() {
			if ($("#password").val().length >= 8) {
				$("#pwInputGroup").removeClass("has-error");
				$("#pwInputGroup").addClass("has-success");
			} else {
				$("#pwInputGroup").removeClass("has-success");
				$("#pwInputGroup").addClass("has-error");
			}
		});
	});

	// 비밀번호 재확인
	$("#pwCheck").focus(function() {
		if ($("#pwCheck").val() == 0) {
			$("#pwCheckInputGroup").addClass("has-error");
		}
		$("#pwCheck").keyup(function() {
			if ($("#pwCheck").val() == $("#password").val()) {
				$("#pwCheckInputGroup").removeClass("has-error");
				$("#pwCheckInputGroup").addClass("has-success");
			} else {
				$("#pwCheckInputGroup").removeClass("has-success");
				$("#pwCheckInputGroup").addClass("has-error");
			}
		});
	});

	// 이름
	$("#name").focus(function() {
		if ($("#name").val() == 0) {
			$("#userInfoInputGroup").addClass("has-error");
		}
		$("#name").keyup(function() {
			if ($("#name").val().length > 0) {
				$("#userInfoInputGroup").removeClass("has-error");
				$("#userInfoInputGroup").addClass("has-warning");
			} else {
				$("#userInfoInputGroup").removeClass("has-success");
				$("#userInfoInputGroup").removeClass("has-warning");
				$("#userInfoInputGroup").addClass("has-error");
			}
		});
	});

	// 성별
	$("#sex").focus(function() {
		$("#userInfoInputGroup").removeClass("has-warning");
		$("#userInfoInputGroup").addClass("has-error");
		$("#sex").change(function() {
			if ($("#sex").val().length > 0) {
				$("#userInfoInputGroup").removeClass("has-warning");
				$("#userInfoInputGroup").removeClass("has-error");
				$("#userInfoInputGroup").addClass("has-warning");
			} else {
				$("#userInfoInputGroup").removeClass("has-success");
				$("#userInfoInputGroup").removeClass("has-warning");
				$("#userInfoInputGroup").addClass("has-error");
			}
		});
	});

	// 생년월일
	$("#birthday").focus(function() {
		$("#birthday").keyup(function() {
			if ($("#birthday").val().length > 0) {
				$("#userInfoInputGroup").removeClass("has-warning");
				$("#userInfoInputGroup").removeClass("has-error");
				$("#userInfoInputGroup").addClass("has-success");
			} else {
				$("#userInfoInputGroup").removeClass("has-success");
				$("#userInfoInputGroup").removeClass("has-warning");
				$("#userInfoInputGroup").addClass("has-error");
			}
		});
	});

	// 이메일
	$("#email").focus(function() {
		if ($("#email").val() == 0) {
			$("#emailInputGroup").addClass("has-error");
		}
		$("#email").keyup(function() {
			if ($("#email").val().length > 0) {
				$("#emailInputGroup").removeClass("has-error");
				$("#emailInputGroup").addClass("has-success");
			} else {
				$("#emailInputGroup").removeClass("has-success");
				$("#emailInputGroup").addClass("has-error");
			}
		});
	});

	// 휴대전화
	$("#phone").focus(function() {
		if ($("#phone").val() == 0) {
			$("#phoneInputGroup").addClass("has-error");
		}
		$("#phone").keyup(function() {
			if ($("#phone").val().length > 0) {
				$("#phoneInputGroup").removeClass("has-error");
				$("#phoneInputGroup").addClass("has-success");
			} else {
				$("#phoneInputGroup").removeClass("has-success");
				$("#phoneInputGroup").addClass("has-error");
			}
		});
	});

})

// 회원가입 버튼 클릭시 유효성 검사
function validateUserInfo() {
	if ($("#id").val() == "") {
		alert("아이디를 입력하세요");
		$("#id").focus();
		return;
	}
	if ($("#id").val().length < 4) {
		alert("아이디가 4자리 이상이어야 합니다");
		$("#id").focus();
		return;
	}
	if ($("#password").val() == "") {
		alert("비밀번호를 입력하세요");
		$("#password").focus();
		return;
	}
	if ($("#password").val().length < 8) {
		alert("비밀번호가 8자리 이상이어야 합니다");
		$("#password").val("");
		$("#password").focus();
		return;
	}
	if ($("#password").val() != $("#pwCheck").val()) {
		alert("비밀번호 재확인이 맞지않습니다");
		$("#pwCheck").val("");
		$("#pwCheck").focus();
		return;
	}
	if ($("#name").val() == "") {
		alert("이름을 입력하세요");
		$("#name").focus();
		return;
	}

	if ($("#sex").val() == "") {
		alert("성별을 선택하세요");
		$("#sex").focus();
		return;
	}

	if ($("#birthday").val() == "") {
		alert("생년월일을 입력하세요");
		$("#birthday").focus();
		return;
	}

	if (isNaN($("#birthday").val())) {
		alert("숫자로 생년월일을 입력하세요");
		$("#birthday").val("");
		$("#birthday").focus();
		return;
	}

	if ($("#email").val() == "") {
		alert("이메일을 입력하세요");
		$("#email").focus();
		return;
	}

	if ($("#phone").val() == "") {
		alert("휴대 전화번호를 입력하세요");
		$("#phone").focus();
		return;
	}

	if (isNaN($("#phone").val())) {
		alert("숫자로 휴대 전화번호를 입력하세요");
		$("#phone").val("");
		$("#phone").focus();
		return;
	}

	if ($("#active_key").val() == "") {
		alert("이메일 인증을 진행하세요");
		$("#email").focus();
		return;
	}

	// 모든 조건 만족시 submit
	// ajax가 아닌 form양식으로 제출시 action 속성으로 url요청
	// action="signUpForm/signUp" >> @RequestMapping("signUpForm/signUp")
	$("#signUp").submit();
}

// 아이디 중복 체크
function idDupCheck() {
	if ($("#id").val() == "") {
		alert("아이디를 입력해주세요");
		$("#id").focus();
		return;
	}
	if ($("#id").val().length < 4) {
		alert("아이디가 4자리 이상이어야 합니다");
		$("#id").focus();
		return;
	}

	if (confirm($("#id").val() + " 아이디로 중복 확인 하시겠습니까?")) {
		// 중복확인 요청
		$.ajax({
			url : "signUpForm/idDupCheck",
			type : "GET",
			data : {
				paramId : $("#id").val()
			},
			dataType : "text",
			success : function(data) {
				$("#id").val(data);
				if ($("#id").val().length == 0) {
					alert("중복된 아이디입니다. 다시 입력해주세요");
					$("#id").focus();
				} else {
					alert("사용 가능한 아이디입니다. 다음 단계를 진행하세요");
					$("#password").focus();
				}
			}
		});

	} else {
		$("#id").focus();
		return;
	}

}

// 이메일 인증
function emailCertify() {
	if ($("#email").val() == "") {
		alert("이메일을 입력해주세요");
		$("#email").focus();
		return;
	}

	if (confirm($("#email").val() + " 로 이메일 인증을 보내시겠습니까?")) {
		// 인증 요청
		$.ajax({
			url : "signUpForm/emailCertify",
			type : "GET",
			data : {
				paramEmail : $("#email").val()
			},
			dataType : "text",
			success : function(data) {
				$("#active_key").val(data);
			}
		});
		// 인증 메일 전송 후 지연시간 필요
		var width = 1;
		// setInterval 반복 실행 함수
		// 60 = 0.06초당 1번
		// 1부터 100까지 총 100번 = 0.06 * 100 = 6초
		var id = setInterval(progress, 60);
		function progress() {
			if (width >= 100) {
				// 반복 종료
				clearInterval(id);
				$("#progressBar").removeClass("progress-bar");
				$("#progressBar").addClass("progress-bar-success");
				$("#progressBar").text("인증 메일이 전송 완료되었습니다");
			} else {
				width++;
				$("#progressBar").css("width", width + '%');
				$("#progressBar").text(width + '%');
			}
		}
		// 지연시간 종료
	} else {
		$("#email").focus();
		return;
	}

}