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
function AudioUnitParameterInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitParameterInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitParameterInfo=[52c]r^{__CFString=}Ir^{__CFString=}IfffI}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	AudioUnitParameterInfo._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitParameterInfo.prototype, {
	
		name: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_name) {
				$dispatch(this.$native, 'setValue:atIndex:', [_name, 0]);
			},
			enumerable: false
		},
	
		unitName: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_unitName) {
				$dispatch(this.$native, 'setValue:atIndex:', [_unitName, 1]);
			},
			enumerable: false
		},
	
		clumpID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_clumpID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_clumpID, 2]);
			},
			enumerable: false
		},
	
		cfNameString: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_cfNameString) {
				$dispatch(this.$native, 'setValue:atIndex:', [_cfNameString, 3]);
			},
			enumerable: false
		},
	
		unit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_unit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_unit, 4]);
			},
			enumerable: false
		},
	
		minValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_minValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minValue, 5]);
			},
			enumerable: false
		},
	
		maxValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_maxValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maxValue, 6]);
			},
			enumerable: false
		},
	
		defaultValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_defaultValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_defaultValue, 7]);
			},
			enumerable: false
		},
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitParameterInfo;
