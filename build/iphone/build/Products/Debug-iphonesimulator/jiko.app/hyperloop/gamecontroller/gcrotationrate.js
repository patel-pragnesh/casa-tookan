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
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCMotion.h
 * @class
 */
function GCRotationRate (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof GCRotationRate)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{GCRotationRate=ddd}', 'GameController', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCMotion');
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


	GCRotationRate._imports = $imports;

	// properties
	Object.defineProperties(GCRotationRate.prototype, {
	
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
		}
	
	});

	$init = true;
}

module.exports = GCRotationRate;