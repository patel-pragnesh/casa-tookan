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
 * CFNetwork//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CFNetwork.framework/Headers/CFHost.h
 * @class
 */
function CFHostClientContext (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CFHostClientContext)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CFHostClientContext=q^v^?^?^?}', 'CFNetwork', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CFNetwork.framework/Headers/CFHost');
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


	CFHostClientContext._imports = $imports;

	// properties
	Object.defineProperties(CFHostClientContext.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		info: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_info) {
				$dispatch(this.$native, 'setValue:atIndex:', [_info, 1]);
			},
			enumerable: false
		},
	
		retain: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_retain) {
				$dispatch(this.$native, 'setValue:atIndex:', [_retain, 2]);
			},
			enumerable: false
		},
	
		release: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_release) {
				$dispatch(this.$native, 'setValue:atIndex:', [_release, 3]);
			},
			enumerable: false
		},
	
		copyDescription: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_copyDescription) {
				$dispatch(this.$native, 'setValue:atIndex:', [_copyDescription, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CFHostClientContext;
