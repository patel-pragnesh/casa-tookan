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
function AUSamplerInstrumentData (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AUSamplerInstrumentData)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AUSamplerInstrumentData=r^{__CFURL=}CCCC}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	AUSamplerInstrumentData._imports = $imports;

	// properties
	Object.defineProperties(AUSamplerInstrumentData.prototype, {
	
		fileURL: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_fileURL) {
				$dispatch(this.$native, 'setValue:atIndex:', [_fileURL, 0]);
			},
			enumerable: false
		},
	
		instrumentType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_instrumentType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_instrumentType, 1]);
			},
			enumerable: false
		},
	
		bankMSB: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_bankMSB) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bankMSB, 2]);
			},
			enumerable: false
		},
	
		bankLSB: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_bankLSB) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bankLSB, 3]);
			},
			enumerable: false
		},
	
		presetID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_presetID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_presetID, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AUSamplerInstrumentData;
