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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSImage.h
 * @class
 */
function MPSImageReadWriteParams (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSImageReadWriteParams)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSImageReadWriteParams=QQ}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSImage');
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


	MPSImageReadWriteParams._imports = $imports;

	// properties
	Object.defineProperties(MPSImageReadWriteParams.prototype, {
	
		featureChannelOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_featureChannelOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_featureChannelOffset, 0]);
			},
			enumerable: false
		},
	
		numberOfFeatureChannelsToReadWrite: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_numberOfFeatureChannelsToReadWrite) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numberOfFeatureChannelsToReadWrite, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSImageReadWriteParams;
