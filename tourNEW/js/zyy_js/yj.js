


// 游记创建效果
var swiper = new Swiper('.center .swiper-container', {
    pagination: '.center .swiper-pagination',
    slidesPerView: 3,
    freeMode: true
});


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



var html = $("html");

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