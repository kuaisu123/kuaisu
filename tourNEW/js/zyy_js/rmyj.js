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

// 热门游记 首页滑动效果

// var content_box=$(".content-box");
// content_box.on("mousedown",function (e){
// 	var ev = e||window.event;
// 	var dy= ev.clientY;
// 	var y;
// 	content_box.on("mousemove",function (e){
// 		var ev = e||window.event;
// 		var my = ev.clientY;
// 		y=my-dy;
// 	})
// 	content_box.on("mouseup",function (e){
		
// 	})

// })



// 个人中心引导页js
//引号页效果
var bootBox = $(".boot");
// console.log(bootBox)
var boot = $(".boot>div");
var bNum = 0;
var bLen = boot.length;

boot.eq(0).show();

$(document).click(function(){
	if(bNum<bLen){
		boot.eq(bNum).hide();
		bNum++;
		if(bNum!=bLen){
			boot.eq(bNum).show();
		}else{
			bootBox.hide()
		}
		
	}
})


