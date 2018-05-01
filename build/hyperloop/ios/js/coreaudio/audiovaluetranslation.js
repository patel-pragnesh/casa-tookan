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
function AudioValueTranslation (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioValueTranslation)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioValueTranslation=^vI^vI}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
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


	AudioValueTranslation._imports = $imports;

	// properties
	Object.defineProperties(AudioValueTranslation.prototype, {
	
		mInputData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mInputData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mInputData, 0]);
			},
			enumerable: false
		},
	
		mInputDataSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mInputDataSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mInputDataSize, 1]);
			},
			enumerable: false
		},
	
		mOutputData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mOutputData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mOutputData, 2]);
			},
			enumerable: false
		},
	
		mOutputDataSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mOutputDataSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mOutputDataSize, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioValueTranslation;
