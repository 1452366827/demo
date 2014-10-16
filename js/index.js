
$(function(){

	var $img = $('#footer li').find('img');
	var $liImg = $('#listBox li').find('.img-responsive');
	setTimeout(function(){	
		resPosition($img);
		resPosition($liImg);
	},30);
	

	$(window).resize(function(){
		resPosition($img);
		resPosition($liImg);
	});
});


/*图片自适应居中*/
var resPosition = function($item){
	var width = $(document).width();
	for(var i = 0; i < $item.length; i++){
		var width = $item.eq(i).parents('li').width();
		//alert(width);
		$item.eq(i).css("marginLeft",(width - $item.eq(i).width())/2);
	}
};