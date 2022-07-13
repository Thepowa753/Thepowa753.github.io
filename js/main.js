$(".w3-bar").click(function(){
	$(".w3-bar").animate({height: "10%"}, "slow");
});
function change_page(page){
	$("#pager").animate({height: "0%", opacity: "0"}, "1s");
	$("#pager").load(page+".html");
	$("#pager").animate({height: "93%", opacity: "1"}, "1s");
}