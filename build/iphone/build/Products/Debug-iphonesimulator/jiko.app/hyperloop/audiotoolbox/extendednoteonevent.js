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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer.h
 * @class
 */
function ExtendedNoteOnEvent (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof ExtendedNoteOnEvent)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$extendedParams = {};
	if (pointer) {
		this.$extendedParams.argCount = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$extendedParams.mPitch = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$extendedParams.mVelocity = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$extendedParams.mControls = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{ExtendedNoteOnEvent=IIf{MusicDeviceNoteParams=Iff[1{NoteParamsControlValue=If}]}}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$extendedParams, 'argCount', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$extendedParams, 'mPitch', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$extendedParams, 'mVelocity', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$extendedParams, 'mControls', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.MusicDeviceNoteParams = require('/hyperloop/audiotoolbox/musicdevicenoteparams');

	ExtendedNoteOnEvent._imports = $imports;

	// properties
	Object.defineProperties(ExtendedNoteOnEvent.prototype, {
	
		instrumentID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_instrumentID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_instrumentID, 0]);
			},
			enumerable: false
		},
	
		groupID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_groupID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_groupID, 1]);
			},
			enumerable: false
		},
	
		duration: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_duration) {
				$dispatch(this.$native, 'setValue:atIndex:', [_duration, 2]);
			},
			enumerable: false
		},
	
		extendedParams: {
			get: function () {
				return this.$extendedParams;
			},
		
			set: function (_extendedParams) {
				this.$extendedParams.argCount = _extendedParams.argCount;
				this.$extendedParams.mPitch = _extendedParams.mPitch;
				this.$extendedParams.mVelocity = _extendedParams.mVelocity;
				this.$extendedParams.mControls = _extendedParams.mControls;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = ExtendedNoteOnEvent;
