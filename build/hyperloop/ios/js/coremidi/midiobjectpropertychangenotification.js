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
function MIDIObjectPropertyChangeNotification (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDIObjectPropertyChangeNotification)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDIObjectPropertyChangeNotification=iIIir^{__CFString=}}', 'CoreMIDI', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIServices');
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


	MIDIObjectPropertyChangeNotification._imports = $imports;

	// properties
	Object.defineProperties(MIDIObjectPropertyChangeNotification.prototype, {
	
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
	
		object: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_object) {
				$dispatch(this.$native, 'setValue:atIndex:', [_object, 2]);
			},
			enumerable: false
		},
	
		objectType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_objectType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_objectType, 3]);
			},
			enumerable: false
		},
	
		propertyName: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_propertyName) {
				$dispatch(this.$native, 'setValue:atIndex:', [_propertyName, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDIObjectPropertyChangeNotification;
