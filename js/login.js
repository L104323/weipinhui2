$(function(){
	$('.topBox').click(function(){
		var iNow = $('.topBox').index(this);
		if(iNow==1){
			$('#countLogin').css('display','block');
			$('#codeLogin').css('display','none');
			$('.topBox:nth-child(2)').css('color','#f10180');
			$('.topBox:nth-child(1)').css('color','black');
		}
		if(iNow==0){
			$('#codeLogin').css('display','block');
			$('#countLogin').css('display','none');
			$('.topBox:nth-child(1)').css('color','#f10180');
			$('.topBox:nth-child(2)').css('color','black');
		}
	})
	
	$('#codePic').hover(
		function(){
			$('#codePic').css('marginLeft','30px');
			$('#phoneBox').css('opacity','1');
		},
		function(){
			$('#codePic').css('marginLeft','90px');
			$('#phoneBox').css('opacity','0');
		},
	)
	$('#countName').blur(function(){
		var name = $('#countName').val();
		var regEmail = /^\d{5,11}@qq.com$/;
		var regTel = /^1[34578]\d{9}$/;	
		var regName =/^[a-zA-Z0-9_]{4,16}$/;
		var a = regName.test(name);
		var b = regTel.test(name);
		var c = regEmail.test(name);
		console.log(a,b,c)
		if(name==''){
			$('#countBox .infoF').css('display','block');
			$('#countBox .f').css('display','block');
			$('#countBox .infoF').html('用户名不能为空');
		}
		if((!a || !b || !c)&&name!=''){
			$('#countBox .infoF').css('display','block');
			$('#countBox .f').css('display','block');
			$('#countBox .infoF').html('登录名有误');
			$('#countName').css('border','1px solid red');
		}
		if(a || b || c){
			$('#countBox .infoF').css('display','none');
			$('#countBox .f').css('display','none');
			$('#countName').css('border','1px solid #b2b2b2');
		}
	})
	$('#pas').blur(function(){
		if($('#pas').val()==''){
			$('#passBox .infoF').css('display','block');
		}else{
			$('#passBox .infoF').css('display','none');
		}
	})
})
