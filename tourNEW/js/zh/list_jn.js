
//向左滑动显示可操作的按钮效果

var mask = $(".mask");
var jnShow = $(".jn_show");

mask.each(function(v,i){
	//左滑事件
	touch.on(i,"swipeleft",function(){
		mask.eq(v).addClass("active");
		jnShow.eq(v).addClass("active");
	})
	//右滑事件
	touch.on(i,"swiperight",function(){
		mask.eq(v).removeClass("active");
		jnShow.eq(v).removeClass("active");
	})
})