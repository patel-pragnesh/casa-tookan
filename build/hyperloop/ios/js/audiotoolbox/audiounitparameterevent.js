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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUComponent.h
 * @class
 */
function AudioUnitParameterEvent (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitParameterEvent)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitParameterEvent=IIII(?={?=iIff}{?=If})}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUComponent');
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


	AudioUnitParameterEvent._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitParameterEvent.prototype, {
	
		scope: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_scope) {
				$dispatch(this.$native, 'setValue:atIndex:', [_scope, 0]);
			},
			enumerable: false
		},
	
		element: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_element) {
				$dispatch(this.$native, 'setValue:atIndex:', [_element, 1]);
			},
			enumerable: false
		},
	
		parameter: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_parameter) {
				$dispatch(this.$native, 'setValue:atIndex:', [_parameter, 2]);
			},
			enumerable: false
		},
	
		eventType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_eventType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_eventType, 3]);
			},
			enumerable: false
		},
	
		eventValues: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_eventValues) {
				$dispatch(this.$native, 'setValue:atIndex:', [_eventValues, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitParameterEvent;
