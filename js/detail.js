$(function(){
	//尺码小助手
	$('#close').click(function(){
		$('#sizeHelp').css('display','none');
	})
	//放大镜
	$('#bPic').mousemove(function(event){
		//console.log(event.clientX,event.clientY);
		//console.log( $('#spic').offset().left, $('#spic').offset().top);
		$('#bPic').css('cursor','crosshair');
		$('#square').css('display','block');
		$('.changePic').css('display','block');
		var nowleft = Math.floor(event.pageX - $('#bPic').offset().left)-50;
		var nowtop = Math.floor(event.pageY -  $('#bPic').offset().top)-50;
		console.log(nowleft,nowtop);
		
		if(nowleft<0){
			nowleft = 0;
		}
		if(nowleft>320){
			nowleft = 320;
		}
		if(nowtop<0){
			nowtop = 0;
		}
		if(nowtop>320){
			nowtop = 320;
		}
		$('#square').css({
			'left':nowleft,
			'top':nowtop
		})
		
		$('#b').css({
			'left':-nowleft*3,
			'top':-nowtop*3
		})
	})
	$('#bPic').mouseleave(function(){
		$('#square').css('display','none');
		$('.changePic').css('display','none');
	})
	//倒计时定时器（天/时/分/秒）
	var timer = setInterval(function(){
		//秒
		var s = Number($('#timeS').text());
		var m = Number($('#timeM').text());
		var h = Number($('#timeH').text());
		s--;
		if(s==0 && m==0 && h==0){
			clearInterval(timer);
		}
		if(s<=0){
			//分>0,改秒59
			if(m>0){
				s=59;
				m--;	
			}
			//如果分<=0，判断时
			if(m<=0){
				if(h>0){
					h--;
					m=59;
				}
				if(h<10){
					h = '0'+h;
				}
				if(h>=0){
					$('#timeH').html(h);
				}
			}
			if(m<10){
				m = '0'+m;
			}
			if(m>=0){
				$('#timeM').html(m);
			}
		}			
		if(s<10){
			s = '0'+s;
		}
		if(s>=0){
			$('#timeS').html(s);
		}				
	},1000)
	//商品数量加减 
	$('#add').click(function(){
		var num = Number($('#numShop').html())+1;
		$('#numShop').html(num);
		if(num==1){
			$('#plus').css('cursor','not-allowed');
		}else{
			$('#plus').css('cursor','pointer');
		}
	})
	$('#plus').click(function(){
		var num = Number($('#numShop').html())-1;
		if(num>=1){
			$('#numShop').html(num);
		}
		if(num==1){
			$('#plus').css('cursor','not-allowed');
		}else{
			$('#plus').css('cursor','pointer');
		}
	})
	//小图
	$('.itemPic').click(function(){
		var i = $('.itemPic').index(this)+1;
		var path = 'img/detailPic/bigPic'+i+'.jpg';
		$('#bPic img').attr('src',path);
	})
	//选择颜色,对应改变图片
	$('#dataU3 .dataButton').click(function(){
		var iNow = $('#dataU3 .dataButton').index(this);
		$('#dataU3 .dataButton').eq(iNow).css('border','1px solid hotpink');
		$('#dataU3 .dataButton').each(function(index,element){
			if(index!=iNow && index!=0){
				$('#dataU3 .dataButton').eq(index).css('border','1px solid #ccc');
			}
		})
		if(iNow==2){
			$('.itemPic').each(function(index,element){
				var b = index+1;
				var path = 'img/detailPic/sRed'+b+'.jpg';
				$('.itemPic img').eq(index).attr('src',path);
				$('#s').eq(index).attr('src','img/detailPic/bRed1.jpg');
				$('.itemPic').click(function(){
					var i = $('.itemPic').index(this)+1;
					var path = 'img/detailPic/bRed'+i+'.jpg';
					$('#bPic img').attr('src',path);
				})
			})
		}
		if(iNow==1){
			$('.itemPic').each(function(index,element){
				var b = index+1;
				var path = 'img/detailPic/pic'+b+'.jpg';
				$('.itemPic img').eq(index).attr('src',path);
				$('#s').eq(index).attr('src','img/detailPic/bigPic1.jpg');
				$('.itemPic').click(function(){
					var i = $('.itemPic').index(this)+1;
					var path = 'img/detailPic/bigPic'+i+'.jpg';
					$('#bPic img').attr('src',path);
				})
			})
		}
	})
	//尺码选择
	$('#dataU4 .size').click(function(){
		var iNow = $('#dataU4 .size').index(this);
		$('#dataU4 .size').eq(iNow).css('border','1px solid hotpink');
		$('#dataU4 .size').each(function(index,element){
			if(index!=iNow){
				$('#dataU4 .size').eq(index).css('border','1px solid #ccc');
			}
		})
	})
	//商品导航
	$('.barBtn').click(function(){
		var iNow = $('.barBtn').index(this);
		if(iNow!=4){
			$('.barBtn').eq(iNow).css('borderBottom','3px solid #f10180');
		}
		 
		$('.barBtn').each(function(index,element){
		 	if(index!=iNow && index!=4){
		 		$('.barBtn').eq(index).css('borderBottom','3px solid black');
		 	}
		 })
	})
	//吸顶
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		if( top>1000){
			$('#detailBar').css({'position':'fixed','top':'-100px'});
		}else{
			$('#detailBar').css('position','static');
		}
	})
	//回到顶部
	$('body').on('click','#returnTop',function(){
		$('body,html').animate({scrollTop:0},1000);
	})	
})
