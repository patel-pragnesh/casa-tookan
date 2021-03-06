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
function AudioOutputUnitMIDICallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioOutputUnitMIDICallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioOutputUnitMIDICallbacks=^v^?^?}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	AudioOutputUnitMIDICallbacks._imports = $imports;

	// properties
	Object.defineProperties(AudioOutputUnitMIDICallbacks.prototype, {
	
		userData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_userData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_userData, 0]);
			},
			enumerable: false
		},
	
		MIDIEventProc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_MIDIEventProc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_MIDIEventProc, 1]);
			},
			enumerable: false
		},
	
		MIDISysExProc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_MIDISysExProc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_MIDISysExProc, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioOutputUnitMIDICallbacks;
