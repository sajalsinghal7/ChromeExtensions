chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	//sender holds information about the tab that is sending the response
	alert(response);
	
});