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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Types.h
 * @class
 */
function vImage_AffineTransform (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImage_AffineTransform)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImage_AffineTransform=ffffff}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Types');
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


	vImage_AffineTransform._imports = $imports;

	// properties
	Object.defineProperties(vImage_AffineTransform.prototype, {
	
		a: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_a) {
				$dispatch(this.$native, 'setValue:atIndex:', [_a, 0]);
			},
			enumerable: false
		},
	
		b: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_b) {
				$dispatch(this.$native, 'setValue:atIndex:', [_b, 1]);
			},
			enumerable: false
		},
	
		c: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_c) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c, 2]);
			},
			enumerable: false
		},
	
		d: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_d) {
				$dispatch(this.$native, 'setValue:atIndex:', [_d, 3]);
			},
			enumerable: false
		},
	
		tx: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_tx) {
				$dispatch(this.$native, 'setValue:atIndex:', [_tx, 4]);
			},
			enumerable: false
		},
	
		ty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_ty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ty, 5]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImage_AffineTransform;
