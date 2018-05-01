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
 * CoreMedia//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMFormatDescription.h
 * @class
 */
function CMVideoDimensions (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMVideoDimensions)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMVideoDimensions=ii}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMFormatDescription');
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


	CMVideoDimensions._imports = $imports;

	// properties
	Object.defineProperties(CMVideoDimensions.prototype, {
	
		width: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_width) {
				$dispatch(this.$native, 'setValue:atIndex:', [_width, 0]);
			},
			enumerable: false
		},
	
		height: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_height) {
				$dispatch(this.$native, 'setValue:atIndex:', [_height, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMVideoDimensions;