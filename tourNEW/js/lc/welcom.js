
//闪屏页的效果
//先查找session



var yindao = sessionStorage.getItem("yindao");

if(!yindao){

	sessionStorage.setItem("yindao",true);
	var yindaoBox=  $(".yindao-box");
	yindaoBox.show();
	var ydNum = 0;
	var ydLi = document.querySelectorAll(".yd-point li");

	var yindao = $(".yindao");

	var bStart = $(".b-start")

	var dump  =$(".dump");

	


	touch.on(document,"swipeleft",function(){
		console.log(1)
		if(ydNum<2){
			ydLi[ydNum].className = "";
			ydNum++;
			ydLi[ydNum].className = "active";
			yindao.css("transform","translateX("+(-33.3*ydNum)+"%)")
			if(ydNum == 2){
				bStart.show();
				dump.hide()
			}
		}
	})
	touch.on(document,"swiperight",function(){
		if(ydNum>0){
			ydLi[ydNum].className = "";
			ydNum--;
			ydLi[ydNum].className = "active";
			yindao.css("transform","translateX("+(-33.3*ydNum)+"%)")
			bStart.hide();
			dump.show()
		}
	})
	dump.click(function(){
		yindaoBox.hide();
	})
	bStart.click(function(){
		yindaoBox.hide();
	})

}