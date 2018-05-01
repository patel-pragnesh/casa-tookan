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
 * CoreMotion//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMAttitude.h
 * @class
 */
function CMRotationMatrix (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMRotationMatrix)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMRotationMatrix=ddddddddd}', 'CoreMotion', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMAttitude');
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


	CMRotationMatrix._imports = $imports;

	// properties
	Object.defineProperties(CMRotationMatrix.prototype, {
	
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
	
		m21: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_m21) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m21, 3]);
			},
			enumerable: false
		},
	
		m22: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_m22) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m22, 4]);
			},
			enumerable: false
		},
	
		m23: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_m23) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m23, 5]);
			},
			enumerable: false
		},
	
		m31: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_m31) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m31, 6]);
			},
			enumerable: false
		},
	
		m32: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_m32) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m32, 7]);
			},
			enumerable: false
		},
	
		m33: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_m33) {
				$dispatch(this.$native, 'setValue:atIndex:', [_m33, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMRotationMatrix;
