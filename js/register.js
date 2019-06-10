$(function(){
	//手机号验证
	$('#tel').blur(function(){
		var regTel = /^1[34578]\d{9}$/;				
		var tel = $('#tel').val();
		var telRes = regTel.test(tel);
		if(!telRes && tel!=' '){
			$('#telBox .conplaint').css('display','block');
			$('#telBox .f').css('display','block');	
			$('#telBox .y').css('display','none');
			$('#telBox .conplaint').html('请输入正确的手机号码');
			$('#securityCodeBox .getSecurity').css({'background':'#d0d0d0','border':' 1px solid #999','cursor':'not-allowed'});
		}
		if(tel==''){
			$('#telBox .conplaint').css('display','block');
			$('#telBox .f').css('display','block');
			$('#telBox .y').css('display','none');
			$('#telBox .conplaint').html('手机号不能为空');		
			$('#securityCodeBox .getSecurity').css({'background':' #d0d0d0','border':' 1px solid #999','cursor':'not-allowed'});
		}
		if(telRes){
			$('#telBox .f').css('display','none');
			$('#telBox .y').css('display','block');
			$('#telBox .conplaint').css('display','none');
			$('#securityCodeBox .getSecurity').css({'background':'#fcedf2','border':'1px solid #ffbee0','cursor':'pointer'});
		}
	})
	//验证码验证
	$('#secure').blur(function(){
		var secure = $('#secure').val();
		var regS = /[1-9]{6}/;
		var secureRes = regS.test(secure);
		console.log(secure);
		console.log(secureRes)
		if(!regS){
			$('#six .conplaint').css('display','block');
		}
		if(regS){
			$('#six .conplaint').css('display','none');
		}		
	})
	//密码
	$('#pass').blur(function(){
		var pass = $('#pass').val();
		//数字+字母，数字+特殊字符，字母+特殊字符，数字+字母+特殊字符组合，而且不能是纯数字，纯字母，纯特殊字符
		var regS = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
		var passRes = regS.test(pass);
//		console.log(pass);
//		console.log(passRes)
		if(pass==''){
			$('#ps .conplaint').css('display','block');
			$('#ps .conplaint').html('密码不能为空')
		}
		if(!passRes && pass!=''){
			$('#ps .conplaint').css('display','block');
			$('#ps .conplaint').html('请输入6-20位密码')
		}
		if(passRes){
			$('#ps .conplaint').css('display','none');
		}	
	}) 
	//再次确认密码
	$('#passAgain').blur(function(){
//		console.log($('#passAgain').val())
		if($('#passAgain').val() != $('#pass').val()){
			$('#again .conplaint').css('display','block');
			$('#again .conplaint').html('密码有误');
		}
	})
	$('#yes').click(function(){
		console.log($("#yes").is(":checked"));
		var re = $("#yes").is(":checked");
		if(re){
			$('#nowRegister').removeAttr('disabled');
			$('#nowRegister').css('backgroundColor','hotpink');
		}else{
			$('#nowRegister').attr('disabled','disabled');
			$('#nowRegister').css('backgroundColor','#f10180');
		}
	})
})
