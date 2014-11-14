var ST = {};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "loading") {
  	ST.tab_id = tabId;
  }
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		ST.pubDate = request.pubDate;
		chrome.pageAction.show(ST.tab_id);
	}
);


function getPubDate() {
	return ST.pubDate;
}
