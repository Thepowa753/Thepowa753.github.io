$(".w3-bar").click(function(){
	$(".w3-bar").animate({height: "10%"}, "slow");
});
function change_page(page){
	$("#pager").slideUp(300);
	$("#pager").load(page+".html");
	$("#pager").slideDown(800);
}