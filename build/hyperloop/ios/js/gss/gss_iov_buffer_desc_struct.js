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
 * GSS//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi.h
 * @class
 */
function gss_iov_buffer_desc_struct (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof gss_iov_buffer_desc_struct)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$buffer = {};
	if (pointer) {
		this.$buffer.length = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$buffer.value = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{gss_iov_buffer_desc_struct=I{gss_buffer_desc_struct=Q^v}}', 'GSS', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$buffer, 'length', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$buffer, 'value', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.gss_buffer_desc_struct = require('/hyperloop/gss/gss_buffer_desc_struct');

	gss_iov_buffer_desc_struct._imports = $imports;

	// properties
	Object.defineProperties(gss_iov_buffer_desc_struct.prototype, {
	
		type: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_type) {
				$dispatch(this.$native, 'setValue:atIndex:', [_type, 0]);
			},
			enumerable: false
		},
	
		buffer: {
			get: function () {
				return this.$buffer;
			},
		
			set: function (_buffer) {
				this.$buffer.length = _buffer.length;
				this.$buffer.value = _buffer.value;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = gss_iov_buffer_desc_struct;
