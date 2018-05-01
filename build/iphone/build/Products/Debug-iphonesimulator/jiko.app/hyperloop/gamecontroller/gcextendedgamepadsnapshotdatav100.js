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
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCExtendedGamepadSnapshot.h
 * @class
 */
function GCExtendedGamepadSnapShotDataV100 (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof GCExtendedGamepadSnapShotDataV100)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{GCExtendedGamepadSnapShotDataV100=SSffffffffffffff}', 'GameController', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCExtendedGamepadSnapshot');
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


	GCExtendedGamepadSnapShotDataV100._imports = $imports;

	// properties
	Object.defineProperties(GCExtendedGamepadSnapShotDataV100.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		size: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_size) {
				$dispatch(this.$native, 'setValue:atIndex:', [_size, 1]);
			},
			enumerable: false
		},
	
		dpadX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_dpadX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_dpadX, 2]);
			},
			enumerable: false
		},
	
		dpadY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_dpadY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_dpadY, 3]);
			},
			enumerable: false
		},
	
		buttonA: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_buttonA) {
				$dispatch(this.$native, 'setValue:atIndex:', [_buttonA, 4]);
			},
			enumerable: false
		},
	
		buttonB: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_buttonB) {
				$dispatch(this.$native, 'setValue:atIndex:', [_buttonB, 5]);
			},
			enumerable: false
		},
	
		buttonX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_buttonX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_buttonX, 6]);
			},
			enumerable: false
		},
	
		buttonY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_buttonY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_buttonY, 7]);
			},
			enumerable: false
		},
	
		leftShoulder: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_leftShoulder) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftShoulder, 8]);
			},
			enumerable: false
		},
	
		rightShoulder: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_rightShoulder) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightShoulder, 9]);
			},
			enumerable: false
		},
	
		leftThumbstickX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 10);
			},
		
			set: function (_leftThumbstickX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftThumbstickX, 10]);
			},
			enumerable: false
		},
	
		leftThumbstickY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 11);
			},
		
			set: function (_leftThumbstickY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftThumbstickY, 11]);
			},
			enumerable: false
		},
	
		rightThumbstickX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 12);
			},
		
			set: function (_rightThumbstickX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightThumbstickX, 12]);
			},
			enumerable: false
		},
	
		rightThumbstickY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 13);
			},
		
			set: function (_rightThumbstickY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightThumbstickY, 13]);
			},
			enumerable: false
		},
	
		leftTrigger: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 14);
			},
		
			set: function (_leftTrigger) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftTrigger, 14]);
			},
			enumerable: false
		},
	
		rightTrigger: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 15);
			},
		
			set: function (_rightTrigger) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightTrigger, 15]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = GCExtendedGamepadSnapShotDataV100;
