
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