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
 * CoreGraphics//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGDataConsumer.h
 * @class
 */
function CGDataConsumerCallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CGDataConsumerCallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CGDataConsumerCallbacks=^?^?}', 'CoreGraphics', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGDataConsumer');
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


	CGDataConsumerCallbacks._imports = $imports;

	// properties
	Object.defineProperties(CGDataConsumerCallbacks.prototype, {
	
		putBytes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_putBytes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_putBytes, 0]);
			},
			enumerable: false
		},
	
		releaseConsumer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_releaseConsumer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_releaseConsumer, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CGDataConsumerCallbacks;
