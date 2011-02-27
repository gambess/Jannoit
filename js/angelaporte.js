<script>
		var titles=new Array();
		var iframeDoc;
		function loadTitles(){
//			alert($("span[gateid]", $($("#iframecontent").get(0).contentDocument)).length);
//			alert($("span[gateid]", $($("#iframecontent").get(0).contentDocument)).length);
		$("span[gateid]", $(iframeDoc)).each(function(){
			var title = $(this).attr("title");
			var gateID = $(this).attr("gateid");
		
		//if (!titles[title]) 
		//	titles[title] = new Array();
			titles[title]=true;
		//titles[title][titles[title].length] = gateID;
		});
}
		$("#iframecontent").ready(function() {
		$("#iframecontent").load(function() {
		//$(document).ready(function(){
			//alert("empiezo");
			var iframe=$("#iframecontent").get(0);
			iframeDoc=iframe.contentDocument;
				
			$("head", $(iframeDoc)).append("<style>.highlight1{background-color: blue;}</style>");
				
			loadTitles();
   			var idx;
			for(idx in titles) {
  				//$("#entidades ul").append("<li><a href='javascript: void(..)'" + idx + "</a></li>");
				$("span[title='" + idx + "']", $(iframeDoc)).css({
					'background-color': null
				});
				$("#opciones ul").append("<li><a href='javascript: void(toggleOpcion(\"" + idx + "\"))'>" + idx + "</a></li>");
			}
		});
		});
		
		function toggleOpcion(title) {
			$("span[title='" + title + "']", iframeDoc).toggleClass("highlight1");
		}
</script>