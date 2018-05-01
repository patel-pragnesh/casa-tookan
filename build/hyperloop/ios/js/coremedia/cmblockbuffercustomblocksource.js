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
 * CoreMedia//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMBlockBuffer.h
 * @class
 */
function CMBlockBufferCustomBlockSource (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMBlockBufferCustomBlockSource)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMBlockBufferCustomBlockSource=I^?^?^v}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMBlockBuffer');
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


	CMBlockBufferCustomBlockSource._imports = $imports;

	// properties
	Object.defineProperties(CMBlockBufferCustomBlockSource.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		AllocateBlock: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_AllocateBlock) {
				$dispatch(this.$native, 'setValue:atIndex:', [_AllocateBlock, 1]);
			},
			enumerable: false
		},
	
		FreeBlock: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_FreeBlock) {
				$dispatch(this.$native, 'setValue:atIndex:', [_FreeBlock, 2]);
			},
			enumerable: false
		},
	
		refCon: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_refCon) {
				$dispatch(this.$native, 'setValue:atIndex:', [_refCon, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMBlockBufferCustomBlockSource;
