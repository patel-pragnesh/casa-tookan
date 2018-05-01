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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer.h
 * @class
 */
function MIDIChannelMessage (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDIChannelMessage)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDIChannelMessage=CCCC}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer');
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


	MIDIChannelMessage._imports = $imports;

	// properties
	Object.defineProperties(MIDIChannelMessage.prototype, {
	
		status: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_status) {
				$dispatch(this.$native, 'setValue:atIndex:', [_status, 0]);
			},
			enumerable: false
		},
	
		data1: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_data1) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data1, 1]);
			},
			enumerable: false
		},
	
		data2: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_data2) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data2, 2]);
			},
			enumerable: false
		},
	
		reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reserved, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDIChannelMessage;
