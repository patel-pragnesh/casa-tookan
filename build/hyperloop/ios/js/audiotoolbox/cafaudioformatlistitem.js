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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile.h
 * @class
 */
function CAFAudioFormatListItem (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CAFAudioFormatListItem)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mFormat = {};
	if (pointer) {
		this.$mFormat.mSampleRate = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mFormat.mFormatID = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$mFormat.mFormatFlags = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$mFormat.mBytesPerPacket = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$mFormat.mFramesPerPacket = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$mFormat.mChannelsPerFrame = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$mFormat.mBitsPerChannel = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CAFAudioFormatListItem={CAFAudioDescription=dIIIIII}I}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mFormat, 'mSampleRate', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mFormat, 'mFormatID', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$mFormat, 'mFormatFlags', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$mFormat, 'mBytesPerPacket', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$mFormat, 'mFramesPerPacket', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$mFormat, 'mChannelsPerFrame', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$mFormat, 'mBitsPerChannel', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.CAFAudioDescription = require('/hyperloop/audiotoolbox/cafaudiodescription');

	CAFAudioFormatListItem._imports = $imports;

	// properties
	Object.defineProperties(CAFAudioFormatListItem.prototype, {
	
		mFormat: {
			get: function () {
				return this.$mFormat;
			},
		
			set: function (_mFormat) {
				this.$mFormat.mSampleRate = _mFormat.mSampleRate;
				this.$mFormat.mFormatID = _mFormat.mFormatID;
				this.$mFormat.mFormatFlags = _mFormat.mFormatFlags;
				this.$mFormat.mBytesPerPacket = _mFormat.mBytesPerPacket;
				this.$mFormat.mFramesPerPacket = _mFormat.mFramesPerPacket;
				this.$mFormat.mChannelsPerFrame = _mFormat.mChannelsPerFrame;
				this.$mFormat.mBitsPerChannel = _mFormat.mBitsPerChannel;
			},
			enumerable: false
		},
	
		mChannelLayoutTag: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mChannelLayoutTag) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mChannelLayoutTag, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CAFAudioFormatListItem;
