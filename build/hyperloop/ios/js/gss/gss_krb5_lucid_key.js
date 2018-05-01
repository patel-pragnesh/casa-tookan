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
function gss_krb5_lucid_key (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof gss_krb5_lucid_key)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{gss_krb5_lucid_key=II^v}', 'GSS', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi_krb5');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	
}

function $initialize () {
	$imports = {};


	gss_krb5_lucid_key._imports = $imports;

	// properties
	Object.defineProperties(gss_krb5_lucid_key.prototype, {
	
		type: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_type) {
				$dispatch(this.$native, 'setValue:atIndex:', [_type, 0]);
			},
			enumerable: false
		},
	
		length: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_length) {
				$dispatch(this.$native, 'setValue:atIndex:', [_length, 1]);
			},
			enumerable: false
		},
	
		data: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_data) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = gss_krb5_lucid_key;
