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
function AudioValueRange (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioValueRange)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioValueRange=dd}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
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


	AudioValueRange._imports = $imports;

	// properties
	Object.defineProperties(AudioValueRange.prototype, {
	
		mMinimum: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mMinimum) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMinimum, 0]);
			},
			enumerable: false
		},
	
		mMaximum: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mMaximum) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMaximum, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioValueRange;
