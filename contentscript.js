if ($item = $("*[itemprop=datePublished]")) {
	if (pubDateTime = $item.attr("datetime")) {
		var pubDate = new Date(pubDateTime).toLocaleDateString();
		chrome.runtime.sendMessage(
			{"pubDate": pubDate},
			function(response) {
			}
        );

		dispShowTime(pubDate);
	}
}

function dispShowTime(pubDate) {
	$(document).ready(function() {
		var style = "position: fixed;"
				  + "z-index: 99999;"
				  + "top: 5px;"
				  + "left: 5px;"
				  + "padding: 8px 14px;"
				  + "border-radius: 5px;"
				  + "font-size: 18px;"
				  + "font-weight: bold;"
				  + "background: #fff;"
				  + "color: #212121;"
				  + "opacity: 0.9;"
				  + "cursor: pointer;"
				  + "display: none;";

		var $el = $('<div id="js-showtime-pubtime" style="' + style + '">');
		$el.text("Published : " + pubDate);
        $("body").append($el);

        $("#js-showtime-pubtime")
        	.fadeIn()
        	.on("click", function(){
        		$(this).fadeOut();
        	}
        );
        window.setTimeout(function(){
        	$("#js-showtime-pubtime").fadeOut();
        }, 3500);
    });
}