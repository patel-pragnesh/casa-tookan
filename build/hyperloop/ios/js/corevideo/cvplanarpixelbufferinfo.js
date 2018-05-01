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
 * CoreVideo//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVPixelBuffer.h
 * @class
 */
function CVPlanarPixelBufferInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CVPlanarPixelBufferInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CVPlanarPixelBufferInfo=[1{CVPlanarComponentInfo=iI}]}', 'CoreVideo', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVPixelBuffer');
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


	CVPlanarPixelBufferInfo._imports = $imports;

	// properties
	Object.defineProperties(CVPlanarPixelBufferInfo.prototype, {
	
		componentInfo: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_componentInfo) {
				$dispatch(this.$native, 'setValue:atIndex:', [_componentInfo, 0]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CVPlanarPixelBufferInfo;
