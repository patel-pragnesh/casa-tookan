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
 * CoreFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFSocket.h
 * @class
 */
function CFSocketSignature (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CFSocketSignature)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CFSocketSignature=iii^{__CFData=}}', 'CoreFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFSocket');
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


	CFSocketSignature._imports = $imports;

	// properties
	Object.defineProperties(CFSocketSignature.prototype, {
	
		protocolFamily: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_protocolFamily) {
				$dispatch(this.$native, 'setValue:atIndex:', [_protocolFamily, 0]);
			},
			enumerable: false
		},
	
		socketType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_socketType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_socketType, 1]);
			},
			enumerable: false
		},
	
		protocol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_protocol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_protocol, 2]);
			},
			enumerable: false
		},
	
		address: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_address) {
				$dispatch(this.$native, 'setValue:atIndex:', [_address, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CFSocketSignature;
