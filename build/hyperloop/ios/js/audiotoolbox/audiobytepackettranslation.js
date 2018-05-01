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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile.h
 * @class
 */
function AudioBytePacketTranslation (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioBytePacketTranslation)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioBytePacketTranslation=qqII}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile');
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


	AudioBytePacketTranslation._imports = $imports;

	// properties
	Object.defineProperties(AudioBytePacketTranslation.prototype, {
	
		mByte: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mByte) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mByte, 0]);
			},
			enumerable: false
		},
	
		mPacket: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mPacket) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPacket, 1]);
			},
			enumerable: false
		},
	
		mByteOffsetInPacket: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mByteOffsetInPacket) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mByteOffsetInPacket, 2]);
			},
			enumerable: false
		},
	
		mFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFlags, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioBytePacketTranslation;
