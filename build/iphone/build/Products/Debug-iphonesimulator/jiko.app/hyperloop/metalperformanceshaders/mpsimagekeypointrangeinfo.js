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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageKeypoint.h
 * @class
 */
function MPSImageKeypointRangeInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSImageKeypointRangeInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSImageKeypointRangeInfo=Qf}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageKeypoint');
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


	MPSImageKeypointRangeInfo._imports = $imports;

	// properties
	Object.defineProperties(MPSImageKeypointRangeInfo.prototype, {
	
		maximumKeypoints: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_maximumKeypoints) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maximumKeypoints, 0]);
			},
			enumerable: false
		},
	
		minimumThresholdValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_minimumThresholdValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minimumThresholdValue, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSImageKeypointRangeInfo;
