
var ydNum = 0;
var ydLi = document.querySelectorAll(".yd-point li");
// var yindao = document.querySelector(".yd-point")

var yindao = $(".yindao");

var bStart = $(".b-start")

var dump  =$(".dump");


touch.on(document,"swipeleft",function(){
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