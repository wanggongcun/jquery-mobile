(function($){
	$.fn.navigation=function(){
		var f=$(this).val();
		
		var c = '<div id="navigation" style="height:-webkit-calc(100% - 80px);width:5%;float:right;z-index:9999;position:fixed;top:120px; right:2px;">';
		
		var lis = $(this).find("li.ui-li-divider.ui-bar-inherit");
		$(this).find("li.ui-li-divider.ui-bar-inherit").each(function(){
			var divider = $(this).html();
			var p = $(this);
			var pos = $(this).offset().top;
			c += '<div style="height:4%" onclick="toPosition('+pos+')">' + divider.charAt(0) + '</div>';
		});
		c += '</div>';
		$(this).remove("#navigation");
		$(this).append(c);
	};
	
})(jQuery);
