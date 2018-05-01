module.exports = function () {
	var self = {};

	function onerror(params, e, error) {
		var message = { code: "unknown", type: "Error", message: e.error };
		if (error != undefined && error != null) {
			try {
				globals.console.error(error);
				message = JSON.parse(error);
			} catch (e) {}
		}
		globals.console.error("Error: " + e.error + ":" + e.code + ": " + JSON.stringify(message));


		if (params.onError) params.onError(message);
	};

	function onworm(params, json) {
		globals.console.warn(json.errorMessage);
		if (params.onError) params.onError(json.errorMessage);
	};

	function reorg(params) {
		globals.console.warn("Reorg occured...");
		if (params.onReorg) params.onReorg();
	};

	self.connectDELETE = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		if (params.chain == undefined) {
			xhr.open("DELETE", Alloy.CFG.api_uri + "/" + params.version + "/" + params.method);
		} else {
			xhr.open("DELETE", Alloy.CFG.api_uri + params.chain + "/" + params.version + "/" + params.method);
		}
		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		if (Alloy.CFG.isDevelopment) xhr.setRequestHeader("Authorization", "Basic " + Titanium.Utils.base64encode(Alloy.Globals.auth_id + ":" + Alloy.Globals.auth_pass));
		xhr.onload = function () {
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("DELETE Method: " + params.method);

			params.type = "DELETE";
			params.endpoint = Alloy.CFG.api_uri + "v1/" + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		xhr.send();
	};

	self.connectPUT = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X PUT -d \"" + JSON.stringify(params.post) + "\" " + Alloy.CFG.api_uri + params.chain + "/v1/" + params.method);
		if (params.chain == undefined) {
			xhr.open("PUT", Alloy.CFG.api_uri + "/" + params.version + "/" + params.method);
		} else {
			xhr.open("PUT", Alloy.CFG.api_uri + params.chain + "/" + params.version + "/" + params.method);
		}
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("charset", "utf-8");
		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		if (Alloy.CFG.isDevelopment) xhr.setRequestHeader("Authorization", "Basic " + Titanium.Utils.base64encode(Alloy.Globals.auth_id + ":" + Alloy.Globals.auth_pass));
		xhr.onload = function () {
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("PUT Method: " + params.method);
			globals.console.error(this.responseText);
			globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X PUT -d \"" + JSON.stringify(params.post) + "\" " + Alloy.CFG.api_uri + "v1/" + params.method);

			params.type = "PUT";
			params.endpoint = Alloy.CFG.api_uri + "/" + params.version + "/" + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		xhr.send(JSON.stringify(params.post));
	};

	self.connectPOST = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		console.log("url is:" + Alloy.CFG.api_uri);

		var url = Alloy.CFG.api_uri + "/" + params.version + "/" + params.method;

		if (params.chain != undefined) {

			url = Alloy.CFG.api_uri + params.chain + "/" + params.version + "/" + params.method;
		}

		if (params.url != undefined) {
			url = params.url;
		}

		globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X POST -d \"" + JSON.stringify(params.post) + "\" " + url);

		xhr.open("POST", url);

		xhr.setRequestHeader("Content-Type", "application/json");

		xhr.setRequestHeader("charset", "utf-8");
		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		if (Alloy.CFG.isDevelopment) xhr.setRequestHeader("Authorization", "Basic " + Titanium.Utils.base64encode(Alloy.Globals.auth_id + ":" + Alloy.Globals.auth_pass));

		xhr.onload = function () {
			console.log("POST Method: " + this.responseText);
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("POST Method: " + params.method);
			params.type = "POST";
			params.endpoint = Alloy.CFG.api_uri + "v1/" + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		xhr.send(JSON.stringify(params.post));

		return xhr;
	};

	self.connectGET = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });

		var url = Alloy.CFG.api_uri + "/" + params.version + "/" + params.method;

		if (params.chain != undefined) {

			url = Alloy.CFG.api_uri + params.chain + "/" + params.version + "/" + params.method;
		}

		globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X GET -d \"" + JSON.stringify(params.post) + "\" " + url);

		xhr.open("GET", url);

		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		if (Alloy.CFG.isDevelopment) xhr.setRequestHeader("Authorization", "Basic " + Titanium.Utils.base64encode(Alloy.Globals.auth_id + ":" + Alloy.Globals.auth_pass));
		xhr.onload = function () {
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("GET Method: " + params.method);
			params.type = "GET";
			params.endpoint = Alloy.CFG.api_uri + "v1/" + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		xhr.send();

		return xhr;
	};

	self.getjson = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });

		if (!params.uri.match(/^https?:\/\//)) params.uri = "https://" + params.uri;

		xhr.open("GET", params.uri);
		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		xhr.onload = function () {
			var json_data = "";
			try {
				json_data = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(json_data);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			if (params.onError) params.onError();
			if (params.always != null) params.always();
		};
		xhr.send();
	};

	self.connectPOSTtoIndieboard = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		xhr.open("POST", Alloy.CFG.dashboard_uri + params.method);

		xhr.setRequestHeader("charset", "utf-8");
		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		if (Alloy.CFG.isDevelopment) xhr.setRequestHeader("Authorization", "Basic " + Titanium.Utils.base64encode(Alloy.Globals.auth_id + ":" + Alloy.Globals.auth_pass));
		globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X POST -d \"" + JSON.stringify(params.post) + "\" " + Alloy.CFG.dashboard_uri + params.method);
		xhr.onload = function () {
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("POST Method: " + params.method);
			globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X POST -d \"" + JSON.stringify(params.post) + "\" " + Alloy.CFG.dashboard_uri + params.method);
			params.type = "POST";
			params.endpoint = Alloy.CFG.dashboard_uri + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		xhr.send(params.post);
	};

	self.connectGETtoConnects = function (params) {
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		globals.console.warn("curl -H \"Content-Type: application/json\" -H \"X-Api-Key:" + Alloy.Globals.api_key + "\" -X GET -d \"" + JSON.stringify(params.post) + "\" " + Alloy.CFG.api_uri + "connect/v1/" + params.method);
		xhr.open("GET", Alloy.CFG.api_uri + "connect/v1/" + params.method);
		xhr.setRequestHeader("X-Api-Key", Alloy.Globals.api_key);
		if (Alloy.CFG.isDevelopment) xhr.setRequestHeader("Authorization", "Basic " + Titanium.Utils.base64encode(Alloy.Globals.auth_id + ":" + Alloy.Globals.auth_pass));
		xhr.onload = function () {
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("GET Method: " + params.method);
			params.type = "GET";
			params.endpoint = Alloy.CFG.dashboard_uri + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		xhr.send();
	};

	self.getAccessToken = function (params) {
		var cache = require("requires/cache");
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		console.log("url is:" + Alloy.CFG.api_uri);

		var url = "https://ymaezono-eval-test.apigee.net/oauth2/token";

		xhr.open("POST", url);

		xhr.setRequestHeader("Authorization", "Basic dkIxZkVSZ1o5SUFXQ0xaVUduQ2lTa3lyU0ppeW1jSXA6cnp5OVNSWkVaQTQwaFE2Nw==");

		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.setRequestHeader("charset", "utf-8");

		xhr.onload = function () {
			console.log("POST Method: " + this.responseText);
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("POST Method: " + params.method);
			params.type = "POST";
			params.endpoint = Alloy.CFG.api_uri + "v1/" + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};
		var postParams = {
			"grant_type": "password",
			"username": cache.data.id,
			"password": cache.data.password

		};
		console.log(postParams);
		xhr.send(postParams);

		return xhr;
	};

	self.getUserAddresses = function (params) {
		var cache = require("requires/cache");
		var xhr = Ti.Network.createHTTPClient({ "validatesSecureCertificate": !Alloy.CFG.isLocal });
		console.log("url is:" + Alloy.CFG.api_uri);

		var url = "https://ymaezono-eval-test.apigee.net/btc/v1/users/" + cache.data.id + "/addresses";

		xhr.open("GET", url);

		xhr.setRequestHeader("Authorization", "Bearer " + cache.data.accessToken);

		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.setRequestHeader("charset", "utf-8");

		xhr.onload = function () {
			console.log("POST Method: " + this.responseText);
			var results = "";
			try {
				results = JSON.parse(this.responseText);
			} catch (e) {}
			params.callback(results);
			if (params.always != null) params.always();
		}, xhr.onerror = function (e) {
			globals.console.error("POST Method: " + params.method);
			params.type = "POST";
			params.endpoint = Alloy.CFG.api_uri + "v1/" + params.method;
			onerror(params, e, this.responseText);
			if (params.always != null) params.always();
		};

		xhr.send();

		return xhr;
	};

	return self;
}();