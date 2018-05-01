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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFormat.h
 * @class
 */
function AudioBalanceFade (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioBalanceFade)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioBalanceFade=ffIr^{AudioChannelLayout=III[1{AudioChannelDescription=II[3f]}]}}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFormat');
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


	AudioBalanceFade._imports = $imports;

	// properties
	Object.defineProperties(AudioBalanceFade.prototype, {
	
		mLeftRightBalance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mLeftRightBalance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mLeftRightBalance, 0]);
			},
			enumerable: false
		},
	
		mBackFrontFade: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mBackFrontFade) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mBackFrontFade, 1]);
			},
			enumerable: false
		},
	
		mType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mType, 2]);
			},
			enumerable: false
		},
	
		mChannelLayout: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mChannelLayout) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelLayout, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioBalanceFade;
