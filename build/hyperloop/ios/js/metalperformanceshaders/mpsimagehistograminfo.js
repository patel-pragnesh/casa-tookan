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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageHistogram.h
 * @class
 */
function MPSImageHistogramInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSImageHistogramInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSImageHistogramInfo=QB}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Headers/MPSImageHistogram');
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


	MPSImageHistogramInfo._imports = $imports;

	// properties
	Object.defineProperties(MPSImageHistogramInfo.prototype, {
	
		numberOfHistogramEntries: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_numberOfHistogramEntries) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numberOfHistogramEntries, 0]);
			},
			enumerable: false
		},
	
		histogramForAlpha: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_histogramForAlpha) {
				$dispatch(this.$native, 'setValue:atIndex:', [_histogramForAlpha, 1]);
			},
			enumerable: false
		},
	
		minPixelValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_minPixelValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minPixelValue, 2]);
			},
			enumerable: false
		},
	
		maxPixelValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_maxPixelValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maxPixelValue, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSImageHistogramInfo;
