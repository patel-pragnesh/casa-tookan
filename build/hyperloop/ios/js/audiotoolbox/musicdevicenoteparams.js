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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicDevice.h
 * @class
 */
function MusicDeviceNoteParams (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MusicDeviceNoteParams)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MusicDeviceNoteParams=Iff[1{NoteParamsControlValue=If}]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicDevice');
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


	MusicDeviceNoteParams._imports = $imports;

	// properties
	Object.defineProperties(MusicDeviceNoteParams.prototype, {
	
		argCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_argCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_argCount, 0]);
			},
			enumerable: false
		},
	
		mPitch: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mPitch) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPitch, 1]);
			},
			enumerable: false
		},
	
		mVelocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mVelocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mVelocity, 2]);
			},
			enumerable: false
		},
	
		mControls: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mControls) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mControls, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MusicDeviceNoteParams;
