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
 * CoreAudio//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes.h
 * @class
 */
function AudioChannelDescription (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioChannelDescription)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioChannelDescription=II[3f]}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
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


	AudioChannelDescription._imports = $imports;

	// properties
	Object.defineProperties(AudioChannelDescription.prototype, {
	
		mChannelLabel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mChannelLabel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelLabel, 0]);
			},
			enumerable: false
		},
	
		mChannelFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mChannelFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelFlags, 1]);
			},
			enumerable: false
		},
	
		mCoordinates: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mCoordinates) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mCoordinates, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioChannelDescription;
