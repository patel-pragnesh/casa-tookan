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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioQueue.h
 * @class
 */
function AudioQueueBuffer (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioQueueBuffer)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioQueueBuffer=I^vI^vI^{AudioStreamPacketDescription=qII}I}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioQueue');
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


	AudioQueueBuffer._imports = $imports;

	// properties
	Object.defineProperties(AudioQueueBuffer.prototype, {
	
		mAudioDataBytesCapacity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mAudioDataBytesCapacity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mAudioDataBytesCapacity, 0]);
			},
			enumerable: false
		},
	
		mAudioData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mAudioData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mAudioData, 1]);
			},
			enumerable: false
		},
	
		mAudioDataByteSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mAudioDataByteSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mAudioDataByteSize, 2]);
			},
			enumerable: false
		},
	
		mUserData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mUserData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mUserData, 3]);
			},
			enumerable: false
		},
	
		mPacketDescriptionCapacity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mPacketDescriptionCapacity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPacketDescriptionCapacity, 4]);
			},
			enumerable: false
		},
	
		mPacketDescriptions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mPacketDescriptions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPacketDescriptions, 5]);
			},
			enumerable: false
		},
	
		mPacketDescriptionCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mPacketDescriptionCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPacketDescriptionCount, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioQueueBuffer;
