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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties.h
 * @class
 */
function AudioUnitExternalBuffer (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitExternalBuffer)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitExternalBuffer=*I}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	AudioUnitExternalBuffer._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitExternalBuffer.prototype, {
	
		buffer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_buffer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_buffer, 0]);
			},
			enumerable: false
		},
	
		size: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_size) {
				$dispatch(this.$native, 'setValue:atIndex:', [_size, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitExternalBuffer;
