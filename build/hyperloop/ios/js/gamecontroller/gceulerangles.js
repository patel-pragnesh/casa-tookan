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
function GCEulerAngles (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof GCEulerAngles)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{GCEulerAngles=ddd}', 'GameController', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCMotion');
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


	GCEulerAngles._imports = $imports;

	// properties
	Object.defineProperties(GCEulerAngles.prototype, {
	
		pitch: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_pitch) {
				$dispatch(this.$native, 'setValue:atIndex:', [_pitch, 0]);
			},
			enumerable: false
		},
	
		yaw: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_yaw) {
				$dispatch(this.$native, 'setValue:atIndex:', [_yaw, 1]);
			},
			enumerable: false
		},
	
		roll: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_roll) {
				$dispatch(this.$native, 'setValue:atIndex:', [_roll, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = GCEulerAngles;
