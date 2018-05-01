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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioTypes.h
 * @class
 */
function AVAudio3DAngularOrientation (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AVAudio3DAngularOrientation)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AVAudio3DAngularOrientation=fff}', 'AVFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioTypes');
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


	AVAudio3DAngularOrientation._imports = $imports;

	// properties
	Object.defineProperties(AVAudio3DAngularOrientation.prototype, {
	
		yaw: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_yaw) {
				$dispatch(this.$native, 'setValue:atIndex:', [_yaw, 0]);
			},
			enumerable: false
		},
	
		pitch: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_pitch) {
				$dispatch(this.$native, 'setValue:atIndex:', [_pitch, 1]);
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

module.exports = AVAudio3DAngularOrientation;
