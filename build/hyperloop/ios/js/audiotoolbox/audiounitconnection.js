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
function AudioUnitConnection (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitConnection)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitConnection=^{OpaqueAudioComponentInstance=}II}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	AudioUnitConnection._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitConnection.prototype, {
	
		sourceAudioUnit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_sourceAudioUnit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sourceAudioUnit, 0]);
			},
			enumerable: false
		},
	
		sourceOutputNumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_sourceOutputNumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sourceOutputNumber, 1]);
			},
			enumerable: false
		},
	
		destInputNumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_destInputNumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destInputNumber, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitConnection;
