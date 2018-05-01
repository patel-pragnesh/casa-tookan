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
function gss_krb5_cfx_keydata (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof gss_krb5_cfx_keydata)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
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
	this.$acceptor_subkey = {};
	if (pointer) {
		this.$acceptor_subkey.type = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$acceptor_subkey.length = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$acceptor_subkey.data = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{gss_krb5_cfx_keydata=I{gss_krb5_lucid_key=II^v}{gss_krb5_lucid_key=II^v}}', 'GSS', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi_krb5');
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
	Object.defineProperty(this.$acceptor_subkey, 'type', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$acceptor_subkey, 'length', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$acceptor_subkey, 'data', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.gss_krb5_lucid_key = require('/hyperloop/gss/gss_krb5_lucid_key');

	gss_krb5_cfx_keydata._imports = $imports;

	// properties
	Object.defineProperties(gss_krb5_cfx_keydata.prototype, {
	
		have_acceptor_subkey: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_have_acceptor_subkey) {
				$dispatch(this.$native, 'setValue:atIndex:', [_have_acceptor_subkey, 0]);
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
		},
	
		acceptor_subkey: {
			get: function () {
				return this.$acceptor_subkey;
			},
		
			set: function (_acceptor_subkey) {
				this.$acceptor_subkey.type = _acceptor_subkey.type;
				this.$acceptor_subkey.length = _acceptor_subkey.length;
				this.$acceptor_subkey.data = _acceptor_subkey.data;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = gss_krb5_cfx_keydata;
