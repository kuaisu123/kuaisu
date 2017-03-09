
var tabLi = $(".tab-li");
var tabUl = $(".tab-ul");

tabLi.each(function(v,i){
	var index = v;
	touch.on($(this),"tap",function(){
		var that = index;
		//触发选项卡效果
		tabLi.removeClass("active");
		tabLi.eq(that).addClass("active");
		tabUl.removeClass("active");
		tabUl.eq(that).addClass("active");

	})
})