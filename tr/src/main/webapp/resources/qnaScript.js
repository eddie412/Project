/*readview*/

		
/*updateview*/
$(document).ready(function(){
	var formObj = $("form[role='updateForm']");
	
	$(".cancel_btn").on("click", function(){
		event.preventDefault();
		location.href = "/qna/readView?qno=${update.qno}"
			   + "&page=${scri.page}"
			   + "&perPageNum=${scri.perPageNum}"
			   + "&searchType=${scri.searchType}"
			   + "&keyword=${scri.keyword}";
	
	});
	
})


/*알럿 확인*/
function qnaCheck(){
	if(document.frm.title.value.length ==0){
		alert("제목을 입력하세요.");
		document.frm.title.focus();
		return false;	
	}
	if(document.frm.content.value.length == 0){
		alert("내용을 입력하세요.");
		document.frm.content.focus();
		return false;
	}
	if(document.frm.pass.value.length == 0){
		alert("비밀번호를 입력하세요.");
		return false;
	}else if(isNaN(document.frm.pass.value)){
		alert("비밀번호는 숫자로 입력하세요.");
		return false;
	}
	return true;
}



