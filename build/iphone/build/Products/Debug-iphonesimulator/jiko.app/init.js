
globals = Alloy.Globals;
globals.isScrolling = false;
globals.Accelerometer = 0;
globals.reorgViews = {};

var network = require("requires/network");
var util = require("requires/util");
var pubsub = require("requires/pubsub");
var cache = require("requires/cache");
var auth = require("requires/auth");
var blockchain = require("requires/blockchain");
var bitcoin = require("requires/bitcoin");
var ethereum = require("requires/ethereum");

var FirebaseCore = require('firebase.core');
FirebaseCore.configure();

if (globals.network === "testnet") {
	if (Alloy.CFG.isLocal) Alloy.CFG.api_uri = "https://indietest:indie4936test@api.indiesquare.net/";
	Alloy.CFG.api_uri = Alloy.CFG.api_uri.replace(/api/, "apitestnet");
	globals.api_key = "a6db8ab60116e98d7920e5c65545835X";
}

globals.console = {
	"info": function (str) {
		if (Alloy.CFG.isDevelopment) Ti.API.info(str);
	},
	"error": function (str) {
		if (Alloy.CFG.isDevelopment) Ti.API.error(str);
	},
	"warn": function (str) {
		if (Alloy.CFG.isDevelopment) Ti.API.warn(str);
	}
};

globals.feeTexts = {
	"fastestFee": L("label_priority_high"),
	"halfHourFee": L("label_priority_med"),
	"lowFee": L("label_priority_low")
};

globals.display = {
	"height": util.getDisplayHeight(),
	"width": util.getDisplayWidth()
};

var touchPos;
var enabledButton = false;
globals.addButtonEvent = function (button, callback) {
	button.addEventListener("touchstart", function (e) {
		touchPos = { "x": e.x, "y": e.y };
		button.opacity = 0.2;
		enabledButton = true;
	});
	button.addEventListener("touchmove", function (e) {
		var a = Math.pow(touchPos.x - e.x, 2) + Math.pow(touchPos.y - e.y, 2);
		if (a > 50) {
			button.animate({ "opacity": 1.0, "duration": 200 });
			enabledButton = false;
		}
	});
	button.addEventListener("touchend", function (e) {
		button.animate({ "opacity": 1.0, "duration": 200 });
		if (enabledButton) {
			enabledButton = false;
			callback(e);
		}
	});
};

String.prototype.format = function (arg) {
	var rep_fn = null;
	if (typeof arg == "object") rep_fn = function (m, k) {
		return arg[k];
	};else {
		var args = arguments;rep_fn = function (m, k) {
			return args[parseInt(k)];
		};
	}
	return this.replace(/\{(\w+)\}/g, rep_fn);
};

String.prototype.rvew = function (bool) {

	if (bool == undefined || bool == null || !bool) {
		return this.toString();
	}
	return this.replace(/token/g, "coin");
};

String.prototype.rvew2 = function (bool) {

	if (bool == undefined || bool == null || !bool) {
		return this.toString();
	}
	return this.replace(/bitcoin\ and\ tokens/g, "coins");
};

Number.prototype.toFixed2 = function (digit) {
	if (digit == null) digit = 8;
	return this.toFixed(digit).replace(/0+$/, "").replace(/\.$/, "");
};

Math._getDecimalLength = function (value) {
	var list = value.toString().split("."),
	    result = 0;
	if (list[1] !== undefined && list[1].length > 0) result = list[1].length;
	return result;
};

Math.multiply = function (value1, value2) {
	var intValue1 = parseInt(value1.toString().replace(".", ""), 10);
	var intValue2 = parseInt(value2.toString().replace(".", ""), 10);
	var decimalLength = Math._getDecimalLength(value1) + Math._getDecimalLength(value2);
	return intValue1 * intValue2 / Math.pow(10, decimalLength);
};

Math.divide = function (value1, value2) {
	var intValue1 = parseInt(value1.toString().replace(".", ""), 10);
	var intValue2 = parseInt(value2.toString().replace(".", ""), 10);
	var len1 = Math._getDecimalLength(value1);
	var len2 = Math._getDecimalLength(value2);

	if (len1 > len2) intValue2 *= Math.pow(10, len1 - len2);else if (len1 < len2) intValue1 *= Math.pow(10, len2 - len1);

	if (len1 > 0 && len2 > 0) decimalLength = 0;else decimalLength = len1 + len2;
	if (len1 == 0 || len2 == 0) decimalLength = 0;

	return intValue1 / intValue2 * Math.pow(10, decimalLength);
};

Math.subtract = function (value1, value2) {
	var max = Math.max(Math._getDecimalLength(value1), Math._getDecimalLength(value2)),
	    k = Math.pow(10, max);
	return (Math.multiply(value1, k) - Math.multiply(value2, k)) / k;
};

function reorg_finish() {
	if (globals.isReorg) {
		globals.isReorg = false;
		globals.reorgViews["home"].removeSelf();
	}
};

var service = null;
globals.backgroundfetch = function (e) {
	network.connectGET({
		"chain": "btc",
		"version": "v1",
		"method": "status/reorg",
		"callback": function (result) {
			if (!result.isReorg) {
				reorg_finish();
				if (true) {
					Ti.App.iOS.removeEventListener("backgroundfetch", globals.backgroundfetch);
					var notification = Ti.App.iOS.scheduleLocalNotification({
						alertBody: L("text_finish_reorg"),
						date: new Date(new Date().getTime())
					});
				} else if (service != null) {
					service.stop();
					service = null;

					var intent = Ti.Android.createIntent({
						action: Ti.Android.ACTION_MAIN,
						className: "inc.lireneosoft.counterparty.IndiesquareWalletActivity",
						packageName: "inc.lireneosoft.counterparty"
					});
					intent.flags |= Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED | Ti.Android.FLAG_ACTIVITY_SINGLE_TOP;
					intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

					var notification = Ti.Android.createNotification({
						contentTitle: "IndieSquare Wallet",
						contentText: L("text_finish_reorg"),
						tickerText: L("text_finish_reorg"),
						contentIntent: Ti.Android.createPendingIntent({ "intent": intent }),
						defaults: Ti.Android.DEFAULT_ALL,
						flags: Ti.Android.FLAG_SHOW_LIGHTS,
						icon: Ti.App.Android.R.drawable.appicon,
						number: 1,
						when: new Date()
					});
					Ti.Android.NotificationManager.notify(1, notification);
				}
			} else if (true && e != null) Ti.App.iOS.endBackgroundHandler(e.handlerId);
		}
	});
};
globals.reorg_occured = function () {
	if (!globals.isReorg) {
		globals.isReorg = true;

		if (true) {
			globals.reorgViews["home"] = util.setReorg(Ti.API.home_win);
			globals.reorgViews["history"] = util.setReorg(Ti.API.history_win);
			globals.reorgViews["dex"] = util.setReorg(Ti.API.exchange_win);
			Ti.App.iOS.setMinimumBackgroundFetchInterval(Ti.App.iOS.BACKGROUNDFETCHINTERVAL_MIN);
			Ti.App.iOS.addEventListener("backgroundfetch", globals.backgroundfetch);
		} else {
			globals.reorgViews["home"] = util.setReorg(globals.main_window);
			var intent = Ti.Android.createServiceIntent({ url: "background/fetch.js" });
			intent.putExtra("interval", 15000);
			service = Ti.Android.createService(intent);
			service.start();
		}
	}
};

globals._parseCip2 = function (url) {
	if (url == null || !url.match(/^counterparty:/)) return null;
	var scheme = url.replace(/^counterparty:/, "").split("?");

	var data = null;
	try {
		var address = bitcoin.getAddressFromWIF(scheme[0]);
		data = { "address": address, "WIF": scheme[0] };
	} catch (e) {
		globals.console.info(e);
		data = { "address": scheme[0] };
	}

	if (scheme.length > 1) {
		scheme[1].split("&").forEach(function (val) {
			var v = val.split("=");
			try {
				data[v[0]] = decodeURIComponent(v[1]);
			} catch (e) {
				globals.console.info(e.error);
			}
		});
	}
	return data;
};
function urlToObject(url) {
	var returnObj = {};
	url = url.replace("URLSCHEME://?", "");
	var params = url.split("&");
	params.forEach(function (param) {
		var keyAndValue = param.split("=");
		returnObj[keyAndValue[0]] = decodeURI(keyAndValue[1]);
	});
	return obj;
}

function loadingFromInit() {
	if (true && Ti.API.home_win != null) {
		return util.showLoading(Ti.API.home_win, { width: Ti.UI.FILL, height: Ti.UI.FILL, message: L("label_linking") });
	} else if (globals.main_window != null) {
		return util.showLoading(globals.main_window, { width: Ti.UI.FILL, height: Ti.UI.FILL, message: L("label_linking") });
	}
	return null;
}

function signAndSendMessageTokenly(url) {
	var loading = loadingFromInit();

	var scheme = url.split("?");
	var msg = scheme[1];
	msg = msg.replace("msg=", "");

	var sig = bitcoin.signMessage(msg);
	var client = Ti.Network.createHTTPClient({
		onload: function (e) {
			if (loading != null) loading.removeSelf();
			util.createDialog({
				title: L("text_tokenly_sent"),
				message: L("text_tokenly_confirm"),
				buttonNames: [L("label_ok")]
			}).show();
		},

		onerror: function (e) {
			if (loading != null) loading.removeSelf();
			var arr_from_json = JSON.parse(this.responseText);
			if (arr_from_json["error"] != undefined) {
				alert(arr_from_json["error"]);
			} else {
				alert(this.responseText);
			}
		},
		timeout: 15000 });

	client.open("POST", url);

	client.send({
		"msg": msg,
		"address": cache.data.address,
		"sig": sig
	});
};

function publish(params, options, data) {
	globals.console.info(data);
	globals.console.info(params.channel);
	if (data != null && params.channel != null) {
		loading = loadingFromInit();
		pubsub.publish({
			"channel": params.channel,
			"message": JSON.stringify(data),
			"callback": function (m) {
				globals.console.info("complete!");
				if (loading != null) loading.removeSelf();
				if (params.vending_wait_id != null) {
					network.connectPUT({
						"chain": "btc",
						"version": "v1",
						"method": "tips/" + params.vending_wait_id + "/list/update",
						"post": {
							status: 2
						},
						"callback": function (result) {
							globals.console.info("success");
						},
						"onError": function (error) {
							globals.console.info("failed");
						}
					});
				}
				if (options.completemessage) {
					util.createDialog({
						message: L("text_linkage_success"),
						buttonNames: [L("label_close")]
					}).show();
				}
				if (!options.qrcode && params["x-success"] != null) {
					Ti.Platform.openURL(params["x-success"] + "://");
				}
			},
			"onError": function () {
				if (loading != null) loading.removeSelf();
				util.createDialog({
					message: L("text_linkage_failed"),
					buttonNames: [L("label_close")]
				}).show();
			}
		});
	}
}

function linkageVerifyUser(params, options) {
	if ("x-success" in params) {
		var dialog = util.createDialog({
			title: L("label_callback_verifyuser"),
			message: L("text_callback_verifyuser").format({ "name": params["x-success"] }),
			buttonNames: [L("label_cancel"), L("label_ok")]
		});
		dialog.addEventListener("click", function (e) {
			if (e.index != e.source.cancel) {
				auth.check({ title: L("text_authentication"), callback: function (e) {
						if (e.success) {
							try {
								if ("channel" in params) {
									var currentHD = bitcoin.getCurrentHD();
									var main_address = bitcoin.changeHD(0);
									var sig = bitcoin.signMessage(params["channel"]);
									bitcoin.changeHD(currentHD);
									var data = {
										"id": cache.data.id,
										"message": params["channel"],
										"signature": sig
									};
									publish(params, options, data);
								}
							} catch (e) {
								globals.console.info("error: " + e.error);
							}
						} else {
							publish(params, options, { "failed": true });
						}
					} });
			} else {
				publish(params, options, { "failed": true });
			}
		});
		dialog.show();
	}
}

function linkageSignMessage(params, options) {
	if ("x-success" in params) {
		var dialog = util.createDialog({
			title: L("label_callback_signmessage"),
			message: L("text_callback_signmessage").format({ "name": params["x-success"], "message": params["msg"] }),
			buttonNames: [L("label_cancel"), L("label_ok")]
		});
		dialog.addEventListener("click", function (e) {
			if (e.index != e.source.cancel) {
				auth.check({ title: L("text_authentication"), callback: function (e) {
						if (e.success) {
							try {
								if ("channel" in params) {
									var address = cache.data.address;
									var sig = bitcoin.signMessage(params["msg"]);
									var data = {
										"address": address,
										"message": params["msg"],
										"signature": sig
									};
									publish(params, options, data);
								}
							} catch (e) {
								globals.console.info("error: " + e.error);
							}
						} else {
							publish(params, options, { "failed": true });
						}
					} });
			} else {
				publish(params, options, { "failed": true });
			}
		});
		dialog.show();
	}
}

function linkageGetAddress(params, options) {
	if ("x-success" in params) {
		var address = cache.data.address;
		var address_eth = blockchain.getAddress();
		var dialog = util.createDialog({
			title: L("label_confirm"),
			message: L("text_callback_getaddress").format({ "address": address, "name": params["x-success"] }),
			buttonNames: [L("label_cancel"), L("label_confirm")]
		});
		dialog.addEventListener("click", function (e) {
			if (e.index != e.source.cancel) {
				auth.check({ title: L("text_authentication"), callback: function (e) {
						if (e.success) {
							if ("msg" in params) {
								try {
									var sig = blockchain.signMessage(params["msg"]);
									globals.lastUrl = null;
									if ("channel" in params) {
										var data = {
											"address": address,

											"message": params["msg"],
											"signature": sig
										};
										publish(params, options, data);
									} else {
										Ti.Platform.openURL(params["x-success"] + "://sendaddress?address=" + cache.data.address + "&msg=" + params["msg"] + "&sig=" + sig);
										if (false) globals.main_window.activity.finish();
									}
								} catch (e) {
									globals.console.info("error: " + e.error);
									if (false) globals.main_window.activity.finish();
								}
							} else {
								Ti.Platform.openURL(params["x-success"] + "://sendaddress?address=" + address);
								if (false) globals.main_window.activity.finish();
							}
						} else {
							publish(params, options, { "failed": true });
							if (false) globals.main_window.activity.finish();
						}
					} });
			} else {
				globals.lastUrl = null;
				publish(params, options, { "failed": true });
			}
		});
		dialog.show();
	}
}

function linkageQrcode(params, options) {
	if ("x-success" in params) {
		var dialog = util.createDialog({
			title: L("label_callback_qrcode"),
			message: L("text_callback_qrcode").format({ "name": params["x-success"] }),
			buttonNames: [L("label_cancel"), L("label_ok")]
		});
		dialog.addEventListener("click", function (e) {
			if (e.index != e.source.cancel) {
				util.openScanner({
					callback: function (e) {
						if ("channel" in params) {
							var signed = bitcoin.signMessageAnonymous(params["msg"]);
							var data = {
								"address": signed.address,
								"data": e.barcode,
								"message": params["msg"],
								"signature": signed.sig
							};
							publish(params, options, data);
						} else {
							Ti.Platform.openURL(params["x-success"] + "://qrcode?data=" + e.barcode);
						}
					}
				});
			} else {
				publish(params, options, { "failed": true });
			}
		});
		dialog.show();
	}
}

function linkageAddWebapp(params, options) {
	if ("x-success" in params) {
		globals.addWebapp({
			"id": params["x-success"]
		}, function (result) {
			if ("channel" in params) {
				var signed = bitcoin.signMessageAnonymous(params["msg"]);
				var data = {
					"address": signed.address,
					"data": result,
					"signature": signed.sig
				};
				publish(params, options, data);
			}
		});
	}
}

function screenToSend(params) {
	var s = setInterval(function () {
		if (globals.balances != null && globals.tiker != null) {
			clearInterval(s);

			function gotoScreen(data) {
				var asset = data.accept_token != null ? data.accept_token : data.asset != null ? data.asset : data.token;

				var send_token = null;
				for (var i = 0; i < globals.balances.length; i++) {
					if (globals.balances[i].token === asset) {
						send_token = globals.balances[i];
						break;
					}
				}
				if (send_token != null) {
					var data = {
						"asset": send_token.token,
						"balance": send_token.balance,
						"address": data.destination != null ? data.destination : data.address,
						"amount": params.amount,
						"channel": params.channel,
						"currency": data.currency,
						"regular_dust_size": params.regular_dust_size
					};
					globals.windows["send"].run(data);
					if (params.channel != null) {
						globals.publich = function (data) {
							pubsub.publish({
								"channel": params.channel,
								"message": JSON.stringify(data),
								"callback": function (m) {
									globals.console.info(JSON.stringify(m));
								}
							});
						};
					}
				} else {
					util.createDialog({
						message: L("label_errortokenfound").format({ token: asset }),
						buttonNames: [L("label_close")]
					}).show();
				}
			}

			if (params.id != null) {
				network.connectGET({
					"chain": "btc",
					"version": "v1",
					"method": "tips/" + params.id + "/info",
					"callback": function (info) {
						gotoScreen(info);
					},
					"onError": function (error) {
						util.createDialog({
							title: error.type,
							message: error.message,
							buttonNames: [L("label_close")]
						}).show();
					}
				});
			} else {
				gotoScreen(params);
			}
		}
	}, 100);
}

function screenToDex(params) {
	if (params.token == null) return;

	var s = setInterval(function () {
		if (globals.balances != null && globals.tiker != null) {
			clearInterval(s);

			globals.showExchange("none");
			globals.setOrderParameters(params.token.toUpperCase(), {
				"type": params.type || "buy",
				"amount": params.amount,
				"price": params.price,
				"currency": params.currency
			});
		}
	}, 100);
}

function screenToWeb(params) {
	if (params.id == null) return;

	network.connectGETtoConnects({
		"method": "services/" + params.id,
		"callback": function (result) {
			if (result.status < 2 && cache.data.id !== result.user_id) {
				var dialog = util.createDialog({
					"title": L("label_error_toweb_differenceaccount"),
					"message": L("text_error_toweb_differenceaccount"),
					"buttonNames": [L("label_close")]
				}).show();
				return;
			}
			if (true && result.ios.length > 0) {
				if (!/:\/\//.test(result.ios)) result.ios = result.ios + "://";
				Ti.Platform.openURL(result.ios);
			} else if (false && result.android.length > 0) {
				if (!/:\/\//.test(result.android)) result.android = result.android + "://";
				Ti.Platform.openURL(result.android);
			}
			globals.windows["weblink"].run({ "path": result.base_uri, barColor: result.barcolor || "#009688" });
		},
		"onError": function (error) {
			Ti.API.info(error);
		}
	});
}

function sweep(params, balances) {
	if (params.sweepbtc == null || params.sweepbtc.toLowerCase() !== "true") {
		params.isFullDust = false;
		if (params.sweepbtc == null) params.isFullDust = true;
		params.sweepbtc = false;
	} else params.sweepbtc = true;

	var btc = balances[0];
	btc.balance = Math.subtract(parseFloat(btc.balance), -parseFloat(btc.unconfirmed_balance));

	var tokens = new Array();
	if (!params.sweepbtc) {
		var isUnconfirmed = false;
		for (var i = 1; i < balances.length; i++) {
			if (params.asset != null && balances[i].token != params.asset) continue;

			var balance = parseFloat(balances[i].balance);
			var unconfirmed_balance = parseFloat(balances[i].unconfirmed_balance);

			if (unconfirmed_balance != 0) isUnconfirmed = true;

			if (unconfirmed_balance < 0) balance += unconfirmed_balance;

			if (params.amount != null && balance >= params.amount || balance > 0) {
				balance = params.amount || balance;
				tokens.push({ "amount": balance, "token": balances[i].token });
			}
		}
		if (params.asset != null && tokens.length <= 0) {
			util.createDialog({
				message: L("label_error_sweepinsufficient").format({ "token": params.asset }),
				buttonNames: [L("label_close")]
			}).show();
			return;
		}
	}

	var fee = parseFloat(params.fee) || 10000;
	var regular_dust_size = params.sweepbtc || tokens.length <= 0 ? 0 : 5430;

	var tokenlength = tokens.length > 0 ? tokens.length : 1;
	var total_token_fee = Math.divide((fee + regular_dust_size) * tokenlength, 1e8);
	var remaining_btc_value = Math.subtract(btc.balance, total_token_fee);

	if (tokens.length <= 0 && btc.balance <= 0) {
		util.createDialog({
			message: L("text_error_sweep_empty").format({ "address": params.address }),
			buttonNames: [L("label_close")]
		}).show();
		return;
	} else if (remaining_btc_value < 0) {
		util.createDialog({
			message: L("label_error_sweepinsufficientBTC").format({ "fee": total_token_fee }),
			buttonNames: [L("label_close")]
		}).show();
		return;
	}

	if (tokens.length > 0) {
		if (params.isFullDust) regular_dust_size += Math.divide(Math.multiply(remaining_btc_value, 1e8), tokens.length);
	} else {
		tokens.push({ "token": "BTC", "amount": remaining_btc_value });
	}

	var total_btc_as_dust = Math.divide(regular_dust_size * tokens.length, 1e8);
	var total_fee = Math.divide(fee * tokens.length, 1e8);

	var current = -1;
	var index = 0;
	var loading = null;
	function doSweep() {
		var postParams = {
			"source": params.address,
			"token": tokens[current].token,
			"destination": cache.data.address,
			"quantity": tokens[current].amount,
			"regular_dust_size": regular_dust_size,
			"fee": fee,
			"use_dust_inputs": true
		};
		network.connectPOST({
			"chain": "btc",
			"version": "v1",
			"method": "transactions/send",
			"post": postParams,
			"callback": function (result) {
				bitcoin.sign(result.unsigned_tx, {
					"check": {
						"source": params.address,
						"destination": cache.data.address,
						"WIF": params.WIF
					},
					"callback": function (signed_tx) {
						network.connectPOST({
							"chain": "btc",
							"version": "v1",
							"method": "transactions/broadcast",
							"post": {
								tx: signed_tx
							},
							"callback": function (result) {
								index++;
							},
							"onError": function (error) {
								index = -2;
								util.createDialog({
									"title": error.type,
									"message": error.message,
									"buttonNames": [L("label_close")]
								}).show();
							}
						});
					},
					"fail": function (error) {
						if (loading != null) loading.removeSelf();
						util.createDialog({
							"message": error,
							"buttonNames": [L("label_close")]
						}).show();
					}
				});
			},
			"onError": function (error) {
				if (loading != null) loading.removeSelf();
				var dialog = util.createDialog({
					"title": error.type,
					"message": error.message,
					"buttonNames": [L("label_close")]
				}).show();
			}
		});
	}

	var label = params.label || params.address;
	var feeInCurrency = tiker.to("BTC", total_fee, cache.data.currency);

	var message = null;
	var messageFee = "\n\n" + L("label_fee") + " " + total_fee + "BTC (" + feeInCurrency + ")";
	var messageBTC = "";
	if (total_btc_as_dust > 0) messageBTC = L("text_sweep_getbtc").format({ "value": total_btc_as_dust });

	if (params.asset != null || tokens.length == 1) message = L("text_getconfirmation").format({ "label": label, "amount": tokens[0].amount, "token": tokens[0].token }) + "\n" + messageBTC + messageFee;else message = L("text_sweepall").format({ "label": label, "count": tokens.length }) + messageFee;

	var dialog = util.createDialog({
		title: L("label_confirm"),
		message: message,
		buttonNames: [L("label_cancel"), L("label_ok")]
	});
	dialog.addEventListener("click", function (e) {
		if (e.index != e.source.cancel) {
			auth.check({ title: L("text_confirmsend"), callback: function (e) {
					if (e.success) {
						loading = loadingFromInit();
						var timer = setInterval(function () {
							if (index != current) {
								current = index;
								if (current == -2 || current > tokens.length - 1) {
									clearInterval(timer);
									if (loading != null) loading.removeSelf();
									if (params.channel != null) globals.publich({ "status": true });

									var dialog = util.createDialog({
										message: L("text_received"),
										buttonNames: [L("label_close")]
									});
									dialog.addEventListener("click", function (e) {
										globals.loadBalance(true);
									});
									dialog.show();
									return;
								}
								if (current > 0) {
									setTimeout(function () {
										doSweep();
									}, 2000);
								} else doSweep();
							}
						}, 500);
					}
				} });
		}
	});
	dialog.show();
}

function sweepTokens(params) {
	if (params.address === cache.data.address) {
		var dialog = util.createDialog({
			"message": L("text_error_sweep_sameaddress").format({ "address": params.address }),
			"buttonNames": [L("label_close")]
		}).show();
		return;
	}

	var loading = loadingFromInit();
	network.connectGET({
		"chain": "btc",
		"version": "v1",
		"method": "addresses/" + params.address + "/balances",
		"callback": function (result) {
			if (loading != null) loading.removeSelf();
			sweep(params, result);
		},
		"onError": function (error) {
			if (loading != null) loading.removeSelf();
			var dialog = util.createDialog({
				"title": error.type,
				"message": error.message,
				"buttonNames": [L("label_close")]
			}).show();
		}
	});
}

function deepLink(url) {
	globals.windows["weblink"].run({
		"path": url
	});
}

function authorization(unsigned_hex, func, params, options) {
	auth.check({ title: L("text_authentication"), callback: function (e) {
			if (e.success) {
				if (func === "signin") {
					var data = {
						"id": cache.data.id,
						"password": cache.data.password
					};
					publish(params, options, data);
				} else if (func === "new_address") {
					globals.addWallet(function (result) {
						globals.console.info("addwallet calback");
						globals.console.info(params);
						var data = null;
						if (result.status) {
							data = {
								"id": cache.data.id,
								"address": result.address
							};
						} else {
							data = {
								"id": cache.data.id,
								"address": result.action
							};
						}
						globals.console.info("publish!");
						publish(params, options, data);
					});
				} else if (func === "sign") {
					if (unsigned_hex != null && typeof unsigned_hex !== "object") {
						bitcoin.sign(unsigned_hex, {
							"check": unpacked,
							"callback": function (signed_tx, isFullySigned) {
								globals.console.info(signed_tx);
								globals.console.info("isFullySigned=" + isFullySigned);
								var data = {
									"signed_tx": signed_tx,
									"isFullySigned": isFullySigned
								};
								publish(params, options, data);
							},
							"fail": function (error) {
								util.createDialog({
									message: error,
									buttonNames: [L("label_close")]
								}).show();
							}
						});
					} else if (typeof unsigned_hex === "object") {
						var eth_serialized = ethereum.sign(unsigned_hex);
						var data = {
							"signed_tx": "0x" + eth_serialized
						};
						publish(params, options, data);
					}
				}
			} else {
				publish(params, options, { "failed": true });
			}
		} });
}

function showDialog(message, unsigned_hex, func, params, options) {
	var dialog = util.createDialog({
		title: L("label_linkage_auth"),
		message: message,
		buttonNames: [L("label_close"), L("label_ok")]
	});
	dialog.addEventListener("click", function (e) {
		if (e.index != e.source.cancel) {
			authorization(unsigned_hex, func, params, options);
		} else {
			publish(params, options, { "failed": true });
		}
	});
	dialog.show();
}

function unpack(unsigned_hex, func, params, options) {
	if (typeof unsigned_hex === "object") {
		var rawTx = unsigned_hex;
		var unpacked_message;

		var fee = ethereum.calculateFee(rawTx.gasPrice, rawTx.gasLimit);
		network.EthereumGET({
			"chain": "eth",
			"version": "v1",
			"method": "tokens/" + rawTx.to,
			"callback": function (info) {
				globals.console.info(info);

				var unpacked = ethereum.unpackData(rawTx.data, info.decimals);
				unpacked_message = L("text_history_send_will").format({ "quantity": Number(unpacked.amount), "asset": info.symbol, "destination": unpacked.to });
			},
			"onError": function (error) {
				globals.console.info(error);
				unpacked_message = L("text_history_send_will").format({ "quantity": Number(unpacked.amount), "asset": "Ether", "destination": unpacked.to });
			},
			"always": function () {
				if (loading != null) loading.removeSelf();
				showDialog(L("label_linkage_auth_sign") + "\n-----\n" + unpacked_message + "\n\nGas Price:" + fee.gasPrice + " Ether\nGas Limit:" + fee.gasLimit, unsigned_hex, func, params, options);
			}
		});
	} else {
		var unpacked_message = "";
		network.connectPOST({
			"chain": "eth",
			"version": "v1",
			"method": "transactions/unpack",
			"post": {
				tx: unsigned_hex
			},
			"callback": function (result) {
				unpacked = result;
				track_params = unpacked;
				var feeInBTC = (result.fee / 1e8).toFixed2(8);
				var dustInBTC = (result.dust / 1e8).toFixed2(8);
				var feeInCurrency = tiker.to("BTC", feeInBTC, cache.data.currency);
				var dustInCurrency = tiker.to("BTC", dustInBTC, cache.data.currency);
				unpacked_message = util.getTransactionWillStory(result) + "\n-----\n" + L("label_fee") + " " + feeInBTC + "BTC (" + feeInCurrency + ") \nDust:" + dustInBTC + "BTC (" + dustInCurrency + ")";
			},
			"onError": function (error) {
				unpacked_message = "unknown";
			},
			"always": function () {
				if (loading != null) loading.removeSelf();
				showDialog(L("label_linkage_auth_sign") + "\n-----\n" + unpacked_message, unsigned_hex, func, params, options);
			}
		});
	}
}

globals._parseArguments = function (url, options) {

	if (options == null) options = { qrcode: true, completemessage: true };
	if (url == null) {
		if (true) url = Ti.App.getArguments()["url"];else {
			var launchIntent = Ti.App.Android.launchIntent;
			if (launchIntent != null && launchIntent.hasExtra("source")) {
				url = launchIntent.getStringExtra("source");
				if (!url.match(new RegExp("^" + Alloy.CFG.walletapp_uri))) {
					url = "indiewallet://" + url;
				}
			}
		}
	}
	if (options == null) options = { qrcode: false, completemessage: false };
	if (url) {
		if (url.match(new RegExp("^" + Alloy.CFG.walletapp_uri))) {
			deepLink(url);
			return;
		}
	}
	globals.console.info(url);
	if (url && (options.qrcode || globals.lastUrl !== url)) {
		globals.lastUrl = url;

		if (url.indexOf("/instant-verify/") > -1) {

			var tag = Ti.App.Properties.getString(cache.data.address);
			if (tag == null || tag == "NULL") {
				tag = "";
			}
			var dialog = util.createDialog({
				message: L("text_tokenly_desc").format({ "address": "\n\n" + tag + "\n" + cache.data.address }),
				buttonNames: [L("label_cancel"), L("label_confirm")]
			});
			dialog.addEventListener("click", function (e) {
				if (e.index != e.source.cancel) {
					auth.check({ title: L("text_authentication"), callback: function (e) {
							if (e.success) {
								setTimeout(function () {
									signAndSendMessageTokenly(url);
								}, 1000);
							}
						} });
				}
			});
			dialog.show();
		} else if (url.match(/^indiewallet:\/\/x-callback-url/)) {
			var scheme = url.replace(/^indiewallet:\/\/x-callback-url\//, "").split("?");
			var func = scheme[0];
			var params = new Array();

			var p = scheme[1].split("&");
			for (var i = 0; i < p.length; i++) {
				var a = p[i].split("=");
				params[a[0]] = decodeURIComponent(a[1]);
			}

			var track_params = {};

			if (func === "verifyuser") {
				linkageVerifyUser(params, options);
			} else if (func === "getaddress") {
				linkageGetAddress(params, options);
			} else if (func === "signmessage") {
				linkageSignMessage(params, options);
			} else if (func === "qrcode") {
				linkageQrcode(params, options);
			} else if (func === "add_webapp") {
				track_params = params;
				linkageAddWebapp(params, options);
			}

			track_params["func"] = func;
		} else if (url.match(/^indiewallet:\/\//)) {
			var scheme = url.replace(/^indiewallet:\/\//, "").split("?");

			var func = scheme[0];
			var params = JSON.parse(decodeURIComponent(scheme[1].split("=")[1]));

			var track_params = {};

			if (func === "screen_to") {

				if (params.screen === "send") {
					screenToSend(params);
				} else if (params.screen === "dex") {
					screenToDex(params);
				} else if (params.screen === "web") {
					screenToWeb(params);
				}
				track_params["screen"] = params.screen;
			} else {
				var unsigned_hex = null;
				var unpacked = null;

				var s = setInterval(function () {
					clearInterval(s);
					var auth_message;

					if (func === "sign") {
						loading = loadingFromInit();
						if (params.unsigned_hex) {
							unsigned_hex = params.unsigned_hex;
							unpack(params.unsigned_hex, func, params, options);
						} else {
							pubsub.subscribe({
								channel: params.channel + "receive",
								connect: function () {},
								callback: function (result) {
									unsigned_hex = result.unsigned_hex;
									unpack(unsigned_hex, func, params, options);
								},
								onError: function (e) {
									if (loading != null) loading.removeSelf();
									util.createDialog({
										"message": L("text_linkage_failed"),
										"buttonNames": [L("label_close")]
									}).show();
								}
							});
						}
					} else {
						if (func === "signin") auth_message = L("label_linkage_auth_signin");else if (func === "new_address") auth_message = L("label_linkage_auth_new_address");
						showDialog(auth_message, unsigned_hex, func, params, options);
					}
				}, 100);
			}
			track_params["func"] = func;
		} else {
			var cips = globals._parseCip2(url);

			if (cips == null) {
				var uri = bitcoin.URI(url.indexOf("bitcoin:") >= 0 ? url : "bitcoin:" + url);
				if (uri != null) {
					uri.token = "BTC";
					screenToSend(uri);
					return;
				} else {
					url = url.replace(/^bitcoin:/, "counterparty:");
					if (url.indexOf("/counterparty:/") < 0) url = "counterparty:" + url;
					url += (url.indexOf("?") < 0 ? "?" : "&") + "sweepbtc=true";
				}
				cips = globals._parseCip2(url);
			}
			if (cips != null) {
				if (cips.WIF == null) {
					if (cips.token == null) cips["token"] = "BTC";
					screenToSend(cips);
				} else {
					sweepTokens(cips);
				}
			}
		}
	}
};