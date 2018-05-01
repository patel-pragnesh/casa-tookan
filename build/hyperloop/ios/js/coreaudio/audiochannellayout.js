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
function AudioChannelLayout (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioChannelLayout)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioChannelLayout=III[1{AudioChannelDescription=II[3f]}]}', 'CoreAudio', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreAudio.framework/Headers/CoreAudioTypes');
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


	AudioChannelLayout._imports = $imports;

	// properties
	Object.defineProperties(AudioChannelLayout.prototype, {
	
		mChannelLayoutTag: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mChannelLayoutTag) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelLayoutTag, 0]);
			},
			enumerable: false
		},
	
		mChannelBitmap: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mChannelBitmap) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelBitmap, 1]);
			},
			enumerable: false
		},
	
		mNumberChannelDescriptions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mNumberChannelDescriptions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberChannelDescriptions, 2]);
			},
			enumerable: false
		},
	
		mChannelDescriptions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mChannelDescriptions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelDescriptions, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioChannelLayout;
