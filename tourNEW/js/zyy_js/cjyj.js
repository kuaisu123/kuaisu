


// 创建游记的开关事件

var open = $(".spanon");
var openY= $(".zyy-zero");
var lflag=true;
open.on("click",function(){
	if (lflag){
		openY.css({left:"0.56rem"});
	}else{
		openY.css({left:"0.02rem"});
	}
	lflag=!lflag;
})
