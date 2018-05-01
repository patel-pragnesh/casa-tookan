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
 * CoreMIDI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIServices.h
 * @class
 */
function MIDIIOErrorNotification (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDIIOErrorNotification)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDIIOErrorNotification=iIIi}', 'CoreMIDI', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIServices');
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


	MIDIIOErrorNotification._imports = $imports;

	// properties
	Object.defineProperties(MIDIIOErrorNotification.prototype, {
	
		messageID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_messageID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_messageID, 0]);
			},
			enumerable: false
		},
	
		messageSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_messageSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_messageSize, 1]);
			},
			enumerable: false
		},
	
		driverDevice: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_driverDevice) {
				$dispatch(this.$native, 'setValue:atIndex:', [_driverDevice, 2]);
			},
			enumerable: false
		},
	
		errorCode: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_errorCode) {
				$dispatch(this.$native, 'setValue:atIndex:', [_errorCode, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDIIOErrorNotification;
