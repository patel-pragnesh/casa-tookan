/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports;

/**
 * GSS//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi_krb5.h
 * @class
 */
function gss_krb5_rfc1964_keydata (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof gss_krb5_rfc1964_keydata)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$ctx_key = {};
	if (pointer) {
		this.$ctx_key.type = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$ctx_key.length = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$ctx_key.data = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{gss_krb5_rfc1964_keydata=II{gss_krb5_lucid_key=II^v}}', 'GSS', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi_krb5');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$ctx_key, 'type', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$ctx_key, 'length', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$ctx_key, 'data', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.gss_krb5_lucid_key = require('/hyperloop/gss/gss_krb5_lucid_key');

	gss_krb5_rfc1964_keydata._imports = $imports;

	// properties
	Object.defineProperties(gss_krb5_rfc1964_keydata.prototype, {
	
		sign_alg: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_sign_alg) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sign_alg, 0]);
			},
			enumerable: false
		},
	
		seal_alg: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_seal_alg) {
				$dispatch(this.$native, 'setValue:atIndex:', [_seal_alg, 1]);
			},
			enumerable: false
		},
	
		ctx_key: {
			get: function () {
				return this.$ctx_key;
			},
		
			set: function (_ctx_key) {
				this.$ctx_key.type = _ctx_key.type;
				this.$ctx_key.length = _ctx_key.length;
				this.$ctx_key.data = _ctx_key.data;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = gss_krb5_rfc1964_keydata;
