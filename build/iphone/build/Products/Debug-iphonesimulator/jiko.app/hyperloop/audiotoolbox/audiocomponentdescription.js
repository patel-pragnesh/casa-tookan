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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioComponent.h
 * @class
 */
function AudioComponentDescription (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioComponentDescription)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioComponentDescription=IIIII}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioComponent');
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


	AudioComponentDescription._imports = $imports;

	// properties
	Object.defineProperties(AudioComponentDescription.prototype, {
	
		componentType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_componentType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_componentType, 0]);
			},
			enumerable: false
		},
	
		componentSubType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_componentSubType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_componentSubType, 1]);
			},
			enumerable: false
		},
	
		componentManufacturer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_componentManufacturer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_componentManufacturer, 2]);
			},
			enumerable: false
		},
	
		componentFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_componentFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_componentFlags, 3]);
			},
			enumerable: false
		},
	
		componentFlagsMask: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_componentFlagsMask) {
				$dispatch(this.$native, 'setValue:atIndex:', [_componentFlagsMask, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioComponentDescription;
