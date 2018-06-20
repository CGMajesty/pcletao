$(function(){
	$('#loginBtn').on('click',function(){
		var result = $('#loginForm').serializeToJson();

		if(!$.trim(result.username)){
			alert('请输入正确的用户名')
			return
		}
		if(!$.trim(result.password)){
			alert('请输入密码')
			return;
		}

		$.ajax({
			type:'post',
			url:`${APP.baseUrl}/employee/employeeLogin`,
			data:result,
			success:function(resplonse){
					if(resplonse.success){
						location.href='user.html'
					}else{
						alert(resplonse.message)
					}
			}
		})
	})
})