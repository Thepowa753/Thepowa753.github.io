var toggled = false;
function change_page(page){
	$("#pager").slideUp(400);
	$("#pager").load(page+".html");
	console.log(page);
	$("#pager").slideDown(800);
}
$("document").ready(function(){
	$("#dropper").click(function(){
		if(toggled){
			$(".w3-bar").stop().animate({height: "39px"});
			$("#pager").stop().animate({height: "93%"});
		}
		else{
			$(".w3-bar").stop().animate({height: "80px"});
			$("#pager").stop().animate({height: "88%"});
		}
		toggled = !toggled;
	});

});