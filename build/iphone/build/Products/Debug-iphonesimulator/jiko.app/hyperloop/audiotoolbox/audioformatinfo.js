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
function AudioFormatInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioFormatInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mASBD = {};
	if (pointer) {
		this.$mASBD.mSampleRate = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mASBD.mFormatID = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$mASBD.mFormatFlags = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$mASBD.mBytesPerPacket = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$mASBD.mFramesPerPacket = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$mASBD.mBytesPerFrame = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$mASBD.mChannelsPerFrame = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$mASBD.mBitsPerChannel = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (pointer) {
		this.$mASBD.mReserved = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioFormatInfo={AudioStreamBasicDescription=dIIIIIIII}r^vI}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFormat');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mASBD, 'mSampleRate', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mASBD, 'mFormatID', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$mASBD, 'mFormatFlags', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$mASBD, 'mBytesPerPacket', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$mASBD, 'mFramesPerPacket', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$mASBD, 'mBytesPerFrame', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$mASBD, 'mChannelsPerFrame', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$mASBD, 'mBitsPerChannel', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$mASBD, 'mReserved', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.AudioStreamBasicDescription = require('/hyperloop/coreaudio/audiostreambasicdescription');

	AudioFormatInfo._imports = $imports;

	// properties
	Object.defineProperties(AudioFormatInfo.prototype, {
	
		mASBD: {
			get: function () {
				return this.$mASBD;
			},
		
			set: function (_mASBD) {
				this.$mASBD.mSampleRate = _mASBD.mSampleRate;
				this.$mASBD.mFormatID = _mASBD.mFormatID;
				this.$mASBD.mFormatFlags = _mASBD.mFormatFlags;
				this.$mASBD.mBytesPerPacket = _mASBD.mBytesPerPacket;
				this.$mASBD.mFramesPerPacket = _mASBD.mFramesPerPacket;
				this.$mASBD.mBytesPerFrame = _mASBD.mBytesPerFrame;
				this.$mASBD.mChannelsPerFrame = _mASBD.mChannelsPerFrame;
				this.$mASBD.mBitsPerChannel = _mASBD.mBitsPerChannel;
				this.$mASBD.mReserved = _mASBD.mReserved;
			},
			enumerable: false
		},
	
		mMagicCookie: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mMagicCookie) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMagicCookie, 1]);
			},
			enumerable: false
		},
	
		mMagicCookieSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mMagicCookieSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMagicCookieSize, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioFormatInfo;
