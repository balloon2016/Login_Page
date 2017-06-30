$(document).ready(function(){
	$('input#check_btn').click(function(){
		//로그인 버튼을 누를 시 작동됨.
		var id_text = $('input#id').val();
			//id에 적은 내용을 불러옴.
		var pw_text = $('input#pw').val();
			//pw에 적은 내용을 불러옴.
		var status = 1;
			//반복문에서 경고를 여러번 띄우는 오류를 막기 위해 이 변수를 선언함.

		for(var n = 0; n < id.length; n++) {
			if(id[n] == id_text) {
				//id 목록중에 일치하는 것이 있을 시.
				if(pw[n] == pw_text) {
					//비밀번호가 비밀번호 목록과 일치할 시.
					alert('인증 성공');
					//이 경고문을 띄움.
					break;
					//그리고 역시 종료.
				}else if(pw_text == '') {
					//비밀번호가 비어있을 시.
					alert('비밀번호를 채워주세요');
					//해당 경고문을 띄움.
					break;
					//그리고 종료.
				}else if(pw_text != pw[n]) {
					//비밀번호가 없을 시.
					alert('비밀번호가 일치하지 않습니다');
					//위 경고문을 띄움.
					break;
					//마지막까지 빠지지 않는 종료!(사실 여기서는 딱히 안 써도 됨.)
				}
			}else if(id_text == ''){
				//id를 쓰지 않았을 시.
				alert('아이디를 채워주세요');
				//경고문을 띄움.
				break;
				//그리고 반복문을 종료함.
			}else if(id_text != id[n] && status == id.length) {
				//아이디가 일치하지 않고 status가 아이디의 갯수와 똑같을 시.
				//참고로 status가 왜 있어야하는지 알고싶다면 위의 status를 var status=0;으로 바꿔서 확인해보면 된다.
				alert('존재하지 않는 아이디입니다');
				//역시 경고문을 띄움.
				break;
				//그리고 종료!
			}else{
				//지금까지 적은 조건들이 모두 해당하지 않을 시.
				status++;
				//변수 status를 1 더함.
			}
		}
	});
});