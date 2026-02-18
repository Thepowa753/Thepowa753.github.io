var toggled = false;
function change_page(page){
	// First, collapse the iframe
	$("#pager").slideUp(400, function(){
		// After collapse is complete, load the new content
		$("#pager").attr('src',page+".html");
		// Wait a bit for the content to load, then expand
		setTimeout(function(){
			$("#pager").slideDown(800);
		}, 100);
	});
	// Update selected state for navigation items
	$(".project").removeClass("selected");
	// Also handle Home button selection
	if(page === 'home'){
		$(".w3-button.centered").not("#dropper").addClass("selected");
	} else {
		$(".w3-button.centered").not("#dropper").removeClass("selected");
		$("a[onclick=\"change_page('"+page+"');\"]").addClass("selected");
	}
}
$("document").ready(function(){
	$("#dropper").click(function(){
		if(toggled){
			$(".w3-bar").stop().animate({height: "50px"});
			$("#pager").stop().animate({height: "90%"});
		}
		else{
			$(".w3-bar").stop().animate({height: "100px"});
			$("#pager").stop().animate({height: "84%"});
		}
		toggled = !toggled;
	});

});