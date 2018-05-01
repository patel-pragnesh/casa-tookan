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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSState.h
 * @class
 */
function MPSStateTextureInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSStateTextureInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSStateTextureInfo=QQQQQQQ[4Q]}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSState');
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


	MPSStateTextureInfo._imports = $imports;

	// properties
	Object.defineProperties(MPSStateTextureInfo.prototype, {
	
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
		},
	
		depth: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_depth) {
				$dispatch(this.$native, 'setValue:atIndex:', [_depth, 2]);
			},
			enumerable: false
		},
	
		arrayLength: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_arrayLength) {
				$dispatch(this.$native, 'setValue:atIndex:', [_arrayLength, 3]);
			},
			enumerable: false
		},
	
		pixelFormat: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_pixelFormat) {
				$dispatch(this.$native, 'setValue:atIndex:', [_pixelFormat, 4]);
			},
			enumerable: false
		},
	
		textureType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_textureType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_textureType, 5]);
			},
			enumerable: false
		},
	
		usage: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_usage) {
				$dispatch(this.$native, 'setValue:atIndex:', [_usage, 6]);
			},
			enumerable: false
		},
	
		_reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (__reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [__reserved, 7]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSStateTextureInfo;
