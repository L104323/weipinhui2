$(function(){
	//导航栏图标
//	$('.hotBtn').hover(
//		function(){		
//			var a = $('.hotBtn').index(this);
//			$('.hotIcon').eq(a).css('backgroundImage',"url(img/hotPic/hotIcon2.png)");
//			$('.sort').eq(a).css('color',"#f10180");			
//		},
//		function(){
//			$('.hotIcon').css('backgroundImage','url(img/hotPic/hotIcon1.png)');
//			$('.sort').css('color',"#333");
//		}
//	)
	//动态创建
	function createHot(x){		
		$('.containBox').remove();
		$.each(x, function(index,data) {
			var order = index+1;
//			var now = $('.containBox').length;			
			if(index<9){
				order = '0'+order;
			}
			var str = `<div class="containBox l">
							<div class="hotPic">
								<img src="${data.src}" />
								<div class="order">
									<span class="orderNum">${order}</span>
								</div>
							</div>
							<div class="hotC">
								<span class="brandName">${data.brandName}</span>
								<div class="listdetail">${data.listdetail}</div>
								<div class="priceB">
									<i>￥</i>
									<span class="nowPrice">${data.nowPrice}</span>
									<del class="beforePrice">${data.beforePrice}</del>
								</div>	
								<a href="#">
									<button class="buyNow">立即抢购</button>
								</a>			
							</div>
						</div>`;
			$('#bigBox').append(str);
			if(order%4==0){
				$('.containBox').eq(index).css('marginRight','0');
			}		
		})
	}
	//总榜
	createHot(all);
	//点击换图
	$('.hotBtn').click(function(){
		var iNow = $('.hotBtn').index(this);
		console.log(iNow);
		$('.hotIcon').eq(iNow).css('backgroundImage',"url(img/hotPic/hotIcon2.png)");
		$('.sort').eq(iNow).css('color','#f10180');
		$('.hotBtn').each(function(index,element){
			if(index!=iNow){
				$('.hotIcon').eq(index).css('backgroundImage',"url(img/hotPic/hotIcon1.png)");
				$('.sort').eq(index).css('color','black');
			}
		})
		if(iNow==0){
			//总榜
			createHot(all);
		}
		if(iNow==2){
			//女装
			createHot(boy);
		}
	})
	
	//回到顶部
	$('body').on('click','#returnTop',function(){
//		$(document).scrollTop(0);
		$('body,html').animate({scrollTop:0},1000);
	})
	//吸顶
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		console.log(top)
		if(top>=500){
			$('#hotBar').css({'position':'fixed',top:'0',left:'0'});
			$('#hotBar').css('z-index','1');
			$('#hotBar').css({'background':'white','opacity':'0.95'});
		}else{
			$('#hotBar').css('position','absolute');
			$('#hotBar').css('top','-40px');
			$('#hotBar').css('background','none');
			$('#hotBar').css('opacity','1');
		} 
	})
})
