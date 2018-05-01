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
function gss_channel_bindings_struct (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof gss_channel_bindings_struct)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$initiator_address = {};
	if (pointer) {
		this.$initiator_address.length = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$initiator_address.value = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	this.$acceptor_address = {};
	if (pointer) {
		this.$acceptor_address.length = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$acceptor_address.value = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	this.$application_data = {};
	if (pointer) {
		this.$application_data.length = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$application_data.value = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{gss_channel_bindings_struct=I{gss_buffer_desc_struct=Q^v}I{gss_buffer_desc_struct=Q^v}{gss_buffer_desc_struct=Q^v}}', 'GSS', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GSS.framework/Headers/gssapi');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$initiator_address, 'length', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$initiator_address, 'value', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$acceptor_address, 'length', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$acceptor_address, 'value', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$application_data, 'length', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$application_data, 'value', {
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
	$imports.gss_buffer_desc_struct = require('/hyperloop/gss/gss_buffer_desc_struct');

	gss_channel_bindings_struct._imports = $imports;

	// properties
	Object.defineProperties(gss_channel_bindings_struct.prototype, {
	
		initiator_addrtype: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_initiator_addrtype) {
				$dispatch(this.$native, 'setValue:atIndex:', [_initiator_addrtype, 0]);
			},
			enumerable: false
		},
	
		initiator_address: {
			get: function () {
				return this.$initiator_address;
			},
		
			set: function (_initiator_address) {
				this.$initiator_address.length = _initiator_address.length;
				this.$initiator_address.value = _initiator_address.value;
			},
			enumerable: false
		},
	
		acceptor_addrtype: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_acceptor_addrtype) {
				$dispatch(this.$native, 'setValue:atIndex:', [_acceptor_addrtype, 2]);
			},
			enumerable: false
		},
	
		acceptor_address: {
			get: function () {
				return this.$acceptor_address;
			},
		
			set: function (_acceptor_address) {
				this.$acceptor_address.length = _acceptor_address.length;
				this.$acceptor_address.value = _acceptor_address.value;
			},
			enumerable: false
		},
	
		application_data: {
			get: function () {
				return this.$application_data;
			},
		
			set: function (_application_data) {
				this.$application_data.length = _application_data.length;
				this.$application_data.value = _application_data.value;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = gss_channel_bindings_struct;
