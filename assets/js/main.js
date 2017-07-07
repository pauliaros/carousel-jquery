$(function(){
	setInterval(function(){

		$("#carousel ul").animate({marginLeft:"-800px"},800,function(){
			
		$("#carousel ul li:last").after($("#carousel ul li:first"));
		$(this).css("margin-left","0");
		
		
	});
},5000);
});