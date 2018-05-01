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
 * CoreMotion//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMDeviceMotion.h
 * @class
 */
function CMCalibratedMagneticField (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMCalibratedMagneticField)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$field = {};
	if (pointer) {
		this.$field.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$field.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$field.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMCalibratedMagneticField={?=ddd}i}', 'CoreMotion', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMotion.framework/Headers/CMDeviceMotion');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$field, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$field, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$field, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
}

function $initialize () {
	$imports = {};


	CMCalibratedMagneticField._imports = $imports;

	// properties
	Object.defineProperties(CMCalibratedMagneticField.prototype, {
	
		field: {
			get: function () {
				return this.$field;
			},
		
			set: function (_field) {
				this.$field.f0 = _field.f0;
				this.$field.f1 = _field.f1;
				this.$field.f2 = _field.f2;
			},
			enumerable: false
		},
	
		accuracy: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_accuracy) {
				$dispatch(this.$native, 'setValue:atIndex:', [_accuracy, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMCalibratedMagneticField;
