

var html = $("html");

var HH = document.documentElement.clientHeight
// 热门游记事件
var more = $(".zyy-moreImg");
var zhezhao = $(".zhezhao");
var morebox = $(".zyy-more-bx");
var sic = $(".content-box");
var sic1=$(".header-box");
var sic2=$(".zyy-more");
var flag=false;
more.on('click',function(){
	if (flag){
		zhezhao.removeClass("zhezhao-active");
		morebox.removeClass("active");
		zhezhao.css({height:0})
		morebox.css({display:'none'});
		html.removeClass("over");
	}else{
		zhezhao.addClass("zhezhao-active");
		morebox.addClass("active");
		zhezhao.css({height:HH})
		morebox.css({display:'block'})
		html.addClass("over");
	}
	flag=!flag;
})



/*
	304        
	294     10
	280     14     14    4%   宽度
	267     13
	251     16
	233     18


	120
	99      21
	85      14     12   10%   高度
	89      -4        
	80      10
	62      18	
*/

// 热门游记 首页滑动效果
var sectionb = document.querySelector(".sectionsbox");
var content_box=document.querySelector(".content-box");
sectionb.addEventListener("touchstart",function (e){
	content_box.style.transition="";
	var ev = e||window.event;
	var tstart=ev.targetTouches[0];
	var dy= tstart.clientY;
	var my=0;
	sectionb.addEventListener("touchmove",tmove)
	function tmove(e){
		var ev = e||window.event;
		var tmove=ev.targetTouches[0];
		my=tmove.clientY;
		content_box.style.transtorm="translateY("+my-dy+"px)";
		console.log(my-dy)
	}
	sectionb.addEventListener("touchend",tend)
	function tend(e){
		var ev=e||window.event;
		var y = my-dy;
		sectionb.removeEventListener("touchmove",tmove)
		sectionb.removeEventListener("touchend",tend)
		// if(y<0){
			// 向上滑动
			if(Math.abs(y)>100){
				content_box.style.transition="all 1s";
				content_box.style.transtorm="translateY("+y+"px)";
			}else{
				content_box.style.transtorm="transform: translateY(0px)";
			}
		// }else if(y>0){
		// 	// 向下滑动
		// 	if(Math.abs(y)>100){
		// 		content_box.style.transition="transform 1s";
		// 		content_box.style.transtorm="translate3d(0,"+(my-dy)+",0)";
		// 	}else{
		// 		content_box.style.transtorm="translate3d(0,"+(0)+",0)";
		// 	}
		// }
		



	}
})



// // 个人中心引导页js
// //引号页效果
// var bootBox = $(".boot");
// // console.log(bootBox)
// var boot = $(".boot>div");
// var bNum = 0;
// var bLen = boot.length;

// boot.eq(0).show();

// $(document).click(function(){
// 	if(bNum<bLen){
// 		boot.eq(bNum).hide();
// 		bNum++;
// 		if(bNum!=bLen){
// 			boot.eq(bNum).show();
// 		}else{
// 			bootBox.hide()
// 		}
		
// 	}
// })


