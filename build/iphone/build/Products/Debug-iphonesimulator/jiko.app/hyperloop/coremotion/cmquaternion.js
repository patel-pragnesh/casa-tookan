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
function CMQuaternion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMQuaternion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMQuaternion=dddd}', 'CoreMotion', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMAttitude');
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


	CMQuaternion._imports = $imports;

	// properties
	Object.defineProperties(CMQuaternion.prototype, {
	
		x: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_x) {
				$dispatch(this.$native, 'setValue:atIndex:', [_x, 0]);
			},
			enumerable: false
		},
	
		y: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_y) {
				$dispatch(this.$native, 'setValue:atIndex:', [_y, 1]);
			},
			enumerable: false
		},
	
		z: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_z) {
				$dispatch(this.$native, 'setValue:atIndex:', [_z, 2]);
			},
			enumerable: false
		},
	
		w: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_w) {
				$dispatch(this.$native, 'setValue:atIndex:', [_w, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMQuaternion;
