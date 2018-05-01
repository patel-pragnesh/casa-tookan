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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Utilities.h
 * @class
 */
function vImage_CGImageFormat (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImage_CGImageFormat)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImage_CGImageFormat=II^{CGColorSpace=}IIr^di}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Utilities');
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


	vImage_CGImageFormat._imports = $imports;

	// properties
	Object.defineProperties(vImage_CGImageFormat.prototype, {
	
		bitsPerComponent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_bitsPerComponent) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bitsPerComponent, 0]);
			},
			enumerable: false
		},
	
		bitsPerPixel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_bitsPerPixel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bitsPerPixel, 1]);
			},
			enumerable: false
		},
	
		colorSpace: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_colorSpace) {
				$dispatch(this.$native, 'setValue:atIndex:', [_colorSpace, 2]);
			},
			enumerable: false
		},
	
		bitmapInfo: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_bitmapInfo) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bitmapInfo, 3]);
			},
			enumerable: false
		},
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 4]);
			},
			enumerable: false
		},
	
		decode: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_decode) {
				$dispatch(this.$native, 'setValue:atIndex:', [_decode, 5]);
			},
			enumerable: false
		},
	
		renderingIntent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_renderingIntent) {
				$dispatch(this.$native, 'setValue:atIndex:', [_renderingIntent, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImage_CGImageFormat;
