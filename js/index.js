$(function(){
	//轮播
	slider();
	function slider(){
		var iNow = 0;				
		setInterval(function(){
			iNow++;
			if(iNow>$('.sPic').length-1){
				iNow = 0;
				$('#picBox').css('transition','')
				changePic();
			}else{
				$('#picBox').css('transition','left 0.2s')
				changePic();
			}
//      			console.log(iNow)
		},2000)	
		
		function changePic(){
			var nowleft = -iNow*974;
//					console.log( nowleft );			
			$('#picBox').css('left',nowleft)
		}
	}
	//吸顶
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		if(top>=191){
			$('#bottomNav').css({position:'fixed',top:'0'});						
			$('#bottomNav').css('backgroundColor','white');
			$('#bottomNav').css('z-index','2');	
			$('#bottomNav').css('boxShadow','0 2px 3px gray');
		}else{
			$('#bottomNav').css('position','static');
			$('#bottomNav').css('boxShadow','none');
		} 
	})


	//动态创建
	function create(x,y){			 
		$.each(x,function(index,data){	
			var str = `<a href="#">
							<div class="girlBox">
								<img src="${data.src}" class="gPic"/>
								<div class="hidden">
									<object><a href="#"><span class="iconfont">&#xe605;</span>收藏品牌</a></object>
								</div>
								<div class="brandInfo">
									<span class="discount">
										<span class="num">${data.num}</span>
										<span class="nored">折起</span>
									</span>	
									<span class="name nored">${data.name}</span>
									<span class="time">
										<i class="timeIcon"></i>
										<span class="days nored">${data.days}</span>
									</span>
								</div>
								<div class="opacityBox"></div>
							</div>
						</a>`;
			y.append(str);
			var s = y;
			$('.girlBox').css('margin-bottom','20px');	
			if(index%2==0){
				$('#floor1 .createBox .girlBox').eq(index).css('float','right');
				$('#floor2 .createBox .girlBox').eq(index).css('float','right');
				$('#floor3 .createBox .girlBox').eq(index).css('float','right');
				$('#floor4 .createBox .girlBox').eq(index).css('float','right');
				$('#floor5 .createBox .girlBox').eq(index).css('float','right');
				$('#floor6 .createBox .girlBox').eq(index).css('float','right');
				$('#floor7 .createBox .girlBox').eq(index).css('float','right');
				$('#floor8 .createBox .girlBox').eq(index).css('float','right');
				$('#floor9 .createBox .girlBox').eq(index).css('float','right');
				$('#floor10 .createBox .girlBox').eq(index).css('float','right');
			}
		})			
	}
	
	create(inf,$('#floor1 .createBox'));
	create(shoe,$('#floor2 .createBox'));
	create(boy,$('#floor3 .createBox'));
	create(boy,$('#floor4 .createBox'));
	create(omament,$('#floor5 .createBox'));
	create(beauty,$('#floor6 .createBox'));
	create(baby,$('#floor7 .createBox'));
	create(home,$('#floor8 .createBox'));
	create(nation,$('#floor9 .createBox'));
	create(life,$('#floor10 .createBox'));
	//hover透明度定时器
	$('.createBox').on('mouseenter','.girlBox',function(){
		$('.opacityBox').eq($('.girlBox').index(this)).fadeIn('2s');
		$('.opacityBox').eq($('.girlBox').index(this)).fadeOut();
	})		
	//明日预告动态创建 三列
	$.each(advance,function(index,data){
		var str = `<div class="advanceBox l">
						<a href="#">
							<img src="${data.src}" />
							<div class="advanceInfo">
								<span class="advanceName">${data.advanceName}</span>
								<span class="advanceDiscount">
									<span class="discountNum">${data.discountNum}</span>折起
								</span>								
							</div>
						</a>
							<div class="warn">
								<input type="text" placeholder="请输入手机号" class="warnTel"/>
								<button class="warnBtn" type="submit">开售提醒</button>
							</div>						
					</div>`;
		$('.createAdvance').append(str);
		$('.advanceBox').css('margin','0 20px 20px 0');
	})
	
	//锚点法一
//	$('.list').click(function(){	
//		var s = $('.list').index(this);
//		$('.list').eq(s).css('backgroundColor','#f10180');	
//		$('.list a').eq(s).css('color','white');	
//		$('.list').eq(s).attr('data-flag','1');
//		$(this).siblings().css('backgroundColor','white');
//		$(this).siblings().attr('data-flag','0');
//		if($('.list').attr('data-flag')=='0'){
//			$('.list a').css('color','black');
//		}
//	})
	//锚点法二
	$('.list').click(function(){
		var s = $('.list').index(this);
		$('.list').eq(s).css('backgroundColor','#f10180');	
		$('.list a').eq(s).css('color','white');
		$('.list').each(function(index,element){
			if(index!=s){
				$('.list').eq(index).css('backgroundColor','white');	
				$('.list a').eq(index).css('color','black');
			}			
		})
	})
		
	//滚动锚点显示隐藏
	$(document).scroll(function(){
		if($(document).scrollTop()>1800){
			$('#anchorBox').css('display','block');
		}else{
			$('#anchorBox').css('display','none');
		}
	})
	//回到顶部
	$('body').on('click','#returnTop',function(){
		$(document).scrollTop(0);
//		$('body,html').animate({scrollTop:0},1000);
	})			
	//锚点自动跳转
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		$('.activeBox').each(function(index,element){	
			var off = $('.activeBox').eq(index).offset().top-400;
			console.log(index)
			console.log(off)
			if(top>off){
				$('.list').eq(index).css('backgroundColor','#f10180');	
				$('.list a').eq(index).css('color','white');
				$('.list').each(function(a,element){
					if(a!=index){
						$('.list').eq(a).css('backgroundColor','white');	
						$('.list a').eq(a).css('color','black');
					}			
				})
			}			
		})			
	})
})

