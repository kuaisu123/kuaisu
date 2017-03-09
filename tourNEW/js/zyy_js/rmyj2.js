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

// 个人游记分享事件
var enjoy_mask=$(".zyy-enjoy-mask");
var enjoy_box=$(".zyy-enjoy-box");
var onjoyclc=$(".header-enjoy");
var boxs=$(".sectionsb");
var close = $(".zyy-close");
var Hh=boxs.height()+88;
// console.log(Hh)
var flagg=false;
onjoyclc.on('click',function(){
	enjoy_mask.addClass("zyy-enjoy-mask-active");
	enjoy_box.addClass("zyy-enjoy-box-active");
	html.addClass("over");
	enjoy_mask.css({height:Hh})
})
close.on('click',function(){
	enjoy_mask.removeClass("zyy-enjoy-mask-active");
	enjoy_box.removeClass("zyy-enjoy-box-active");
	html.removeClass("over");
	enjoy_mask.css({height:0})
})



// 个人中心引导页js
//引号页效果

var yindaoOne = sessionStorage.getItem("yindaoOne");

if(!yindaoOne){
	var bootBox = $(".boot");
	bootBox.show();
	sessionStorage.setItem("yindaoOne",true);
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

}
