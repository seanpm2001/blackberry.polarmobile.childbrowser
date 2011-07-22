(function () {

	var API_URL = "blackberry/polarmobile/childbrowser";
	var URL_PARAM_NAME = "url"
	
	function ChildBrowser() {
	};

	function loadURL(url){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/loadURL");
		remoteCall.addParam(URL_PARAM_NAME, url); 
		return remoteCall.makeSyncCall();
	}

	function getLocation(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/getLocation");
		return remoteCall.makeSyncCall();
	}

	function back(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/back");
		return remoteCall.makeSyncCall();
	}

	function forward(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/forward");
		return remoteCall.makeSyncCall();
	}

	function refresh(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/refresh");
		return remoteCall.makeSyncCall();
	}

	function close(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/close");
		return remoteCall.makeSyncCall();
	}
	
	ChildBrowser.prototype.loadURL = function(url) {
		return loadURL(url);
	};

	ChildBrowser.prototype.getLocation = function() {
		return getLocation();
	};

	ChildBrowser.prototype.back = function() {
		return back();
	};

	ChildBrowser.prototype.forward = function() {
		return forward();
	};

	ChildBrowser.prototype.refresh = function() {
		return refresh();
	};

	ChildBrowser.prototype.close = function() {
		return close();
	};

	blackberry.Loader.javascriptLoaded("blackberry.polarmobile.childbrowser", ChildBrowser);
})();