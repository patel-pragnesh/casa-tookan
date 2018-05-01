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
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CATransform3D.h
 * @class
 */
function CATransform3D (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CATransform3D)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CATransform3D=dddddddddddddddd}', 'QuartzCore', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CATransform3D');
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


	CATransform3D._imports = $imports;

	// properties
	Object.defineProperties(CATransform3D.prototype, {
	
		m11: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_m11) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m11, 0]);
			},
			enumerable: false
		},
	
		m12: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_m12) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m12, 1]);
			},
			enumerable: false
		},
	
		m13: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_m13) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m13, 2]);
			},
			enumerable: false
		},
	
		m14: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_m14) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m14, 3]);
			},
			enumerable: false
		},
	
		m21: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_m21) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m21, 4]);
			},
			enumerable: false
		},
	
		m22: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_m22) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m22, 5]);
			},
			enumerable: false
		},
	
		m23: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_m23) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m23, 6]);
			},
			enumerable: false
		},
	
		m24: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_m24) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m24, 7]);
			},
			enumerable: false
		},
	
		m31: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_m31) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m31, 8]);
			},
			enumerable: false
		},
	
		m32: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_m32) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m32, 9]);
			},
			enumerable: false
		},
	
		m33: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 10);
			},
		
			set: function (_m33) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m33, 10]);
			},
			enumerable: false
		},
	
		m34: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 11);
			},
		
			set: function (_m34) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m34, 11]);
			},
			enumerable: false
		},
	
		m41: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 12);
			},
		
			set: function (_m41) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m41, 12]);
			},
			enumerable: false
		},
	
		m42: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 13);
			},
		
			set: function (_m42) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m42, 13]);
			},
			enumerable: false
		},
	
		m43: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 14);
			},
		
			set: function (_m43) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m43, 14]);
			},
			enumerable: false
		},
	
		m44: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 15);
			},
		
			set: function (_m44) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m44, 15]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CATransform3D;
