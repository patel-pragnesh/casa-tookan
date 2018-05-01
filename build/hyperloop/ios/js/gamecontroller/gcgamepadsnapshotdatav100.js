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
 * GameController//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCGamepadSnapshot.h
 * @class
 */
function GCGamepadSnapShotDataV100 (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof GCGamepadSnapShotDataV100)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{GCGamepadSnapShotDataV100=SSffffffff}', 'GameController', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameController.framework/Headers/GCGamepadSnapshot');
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


	GCGamepadSnapShotDataV100._imports = $imports;

	// properties
	Object.defineProperties(GCGamepadSnapShotDataV100.prototype, {
	
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
		}
	
	});

	$init = true;
}

module.exports = GCGamepadSnapShotDataV100;
