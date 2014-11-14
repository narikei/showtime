var pubDate = chrome.extension.getBackgroundPage().getPubDate();

$(document).ready(function() {
	$("#js-date").text(pubDate);
});