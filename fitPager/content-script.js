$(function () {
	//简书
	if (location.host == "www.jianshu.com") {
		$(".post").css("width", "95%");
		$(".article").css("width", "100%");
		$("#note-fixed-ad-container").remove();//去广告
		$(".note .post .article .show-content .image-package").css("margin-left", "0px");
	}
	
	//微信
	if (location.host == "mp.weixin.qq.com") {
		$(".rich_media_area_primary_inner").css("max-width", "999999px").css("width", "95%");
		$(".qr_code_pc_inner").hide();
	}
});