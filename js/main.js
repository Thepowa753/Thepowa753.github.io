var toggled = false;
function change_page(page){
	$("#pager").slideUp(400);
	$("#pager").load(page+".html");
	$("#pager").attr('src',page+".html");
	console.log(page);
	$("#pager").slideDown(800);
	// Update selected state for navigation items
	$(".project").removeClass("selected");
	$("a[onclick=\"change_page('"+page+"');\"]").addClass("selected");
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