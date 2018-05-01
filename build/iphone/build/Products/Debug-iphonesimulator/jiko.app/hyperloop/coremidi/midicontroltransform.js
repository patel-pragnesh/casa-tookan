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
 * CoreMIDI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIThruConnection.h
 * @class
 */
function MIDIControlTransform (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDIControlTransform)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDIControlTransform=CCSSs}', 'CoreMIDI', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIThruConnection');
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


	MIDIControlTransform._imports = $imports;

	// properties
	Object.defineProperties(MIDIControlTransform.prototype, {
	
		controlType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_controlType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_controlType, 0]);
			},
			enumerable: false
		},
	
		remappedControlType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_remappedControlType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_remappedControlType, 1]);
			},
			enumerable: false
		},
	
		controlNumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_controlNumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_controlNumber, 2]);
			},
			enumerable: false
		},
	
		transform: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_transform) {
				$dispatch(this.$native, 'setValue:atIndex:', [_transform, 3]);
			},
			enumerable: false
		},
	
		param: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_param) {
				$dispatch(this.$native, 'setValue:atIndex:', [_param, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDIControlTransform;
