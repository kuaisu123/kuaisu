
var jian = $(".jian");
var num = $(".num");
var jia = $(".jia");

num.each(function(v,i){
	var v = v;
	jian.eq(v).click(function(){
		var sum = num.eq(v).html();
		sum--;
		if(sum<=0){
			sum=0;
		}
		num.eq(v).html(sum);
	})
	jia.eq(v).click(function(){
		var sum = num.eq(v).html();
		sum++;
		num.eq(v).html(sum);
	})
})