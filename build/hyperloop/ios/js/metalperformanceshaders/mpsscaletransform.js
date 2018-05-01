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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSCoreTypes.h
 * @class
 */
function MPSScaleTransform (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSScaleTransform)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSScaleTransform=dddd}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSCoreTypes');
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


	MPSScaleTransform._imports = $imports;

	// properties
	Object.defineProperties(MPSScaleTransform.prototype, {
	
		scaleX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_scaleX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_scaleX, 0]);
			},
			enumerable: false
		},
	
		scaleY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_scaleY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_scaleY, 1]);
			},
			enumerable: false
		},
	
		translateX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_translateX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_translateX, 2]);
			},
			enumerable: false
		},
	
		translateY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_translateY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_translateY, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSScaleTransform;
