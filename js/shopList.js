$(function(){
	//倒计时定时器（天/时/分/秒）
	var timer = setInterval(function(){
		//秒
		var s = Number($('#s').text());
		var m = Number($('#m').text());
		var h = $('#h').text();
		var d = $('#d').text();
		s--;
		if(s==0 && m==0 && h==0 && d==0){
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
				//如果时<=0，判断天
				if(h<=0){
					if(d>0){
						h=23;
						d--;
					}					
					if(d<10){
						h = '0'+h;
					}
					if(d>=0){
						$('#d').html(d);
					}					
				}
				if(h<10){
					h = '0'+h;
				}
				if(h>=0){
					$('#h').html(h);
				}
			}
			if(m<10){
				m = '0'+m;
			}
			if(m>=0){
				$('#m').html(m);
			}
		}			
		if(s<10){
			s = '0'+s;
		}
		if(s>=0){
			$('#s').html(s);
		}				
	},1000)
	//0
	setInterval(function(){
		var zero = Math.floor(Math.random()*10);
		$('#zero').text(zero);
	},10)
	//综合
	$('.cBox').click(function(){
		var a = $('.cBox').index(this);
		$('.cBox').eq(a).css('border','1px solid #f10180');
		$('.cBox a').eq(a).css('color','#f10180');
		$('.cBox').each(function(index,element){
			console.log(index);
			if(index!=a){
				$('.cBox').eq(index).css('border-right','1px solid #dfdfdf');
				$('.cBox').eq(index).css('border-top','none');
				$('.cBox').eq(index).css('border-left','none');
				$('.cBox').eq(index).css('border-bottom','none');
				$('.cBox a').eq(index).css('color','black');
			}
		})
	})
	//分类
	$('.listBtn').click(function(){
		var a = $('.listBtn').index(this);
		$('.listBtn').eq(a).css('border','1px solid #f10180');
		$('.listBtn a').eq(a).css('color','#f10180');
		$('.listBtn').each(function(index,element){
			console.log(index);
			if(index!=a){
				$('.listBtn').eq(index).css('border','1px solid white');
				$('.listBtn a').eq(index).css('color','black');
			}
		})
	})
	//尺码
	$('.sizeBtn').click(function(){
		var a = $('.sizeBtn').index(this);
		$('.sizeBtn').eq(a).css('border','1px solid #f10180');
		$('.sizeBtn a').eq(a).css('color','#f10180');
		$('.sizeBtn').each(function(index,element){
			console.log(index);
			if(index!=a){
				$('.sizeBtn').eq(index).css('border','1px solid white');
				$('.sizeBtn a').eq(index).css('color','black');
			}
		})
	})
	//动态创建
	$.each(cloth,function(index,data){
		console.log(data)
		var str = `<div class="cloth l">
						<a href"#"><img src="${data.src}" /></a>
						<div class="clothPrice">
							<span class="afterP">折后价￥</span>			
							<span class="specialPrice">${data.specialPrice}</span>
						</div>
						<p class="pNum">
							<span class="vipPrice">唯品价</span>
							<span  class="vipPrice">${data.vipPrice}</span>
							<del class="marketPrice">${data.marketPrice}</del>
							<span class="clothDis">${data.clothDis}</span>
						</p>
						<p>
							 ${data.clothName}
						</p>
						<img src="img/shopListPic/hot.png" class="hot"/>
						<i class="iconStation"></i>
					</div>`
		$('#goodsList').append(str);
		if(index==0 || index==3 || index==5 || index==9){
			$('.hot').eq(index).css('display','block');
			$('.cloth a').eq(index).attr('href','detail.html');			
		}
		if(index==2 || index==10 || index==14 || index==18){
			$('.iconStation').eq(index).css('display','block');
		}
	})
	//分页
	$('.aBox').click(function(){
		var a = $('.aBox').index(this);
		$('#page .aBox').eq(a).css('backgroundColor','#f10180');
		$('.aBox').eq(a).css('border','1px solid #f10180');
		$('.aBox').eq(a).css('color','white');
		$('.aBox').each(function(index,element){
			console.log(index);
			if(index!=a){
				$('.aBox').eq(index).css('border','1px solid  #b8b8b8');
				$('.aBox').eq(index).css('color','#848585');
				$('.aBox').eq(index).css('backgroundColor','white');
			}
		})
	})
	//回到顶部
	$('body').on('click','#returnTop',function(){
		$(document).scrollTop(0);
//		$('body,html').animate({scrollTop:0},1000);
	})
})
