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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUAudioUnitImplementation.h
 * @class
 */
function AURenderEventHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AURenderEventHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AURenderEventHeader=^(AURenderEvent={AURenderEventHeader=^(AURenderEvent)qCC}{AUParameterEvent=^(AURenderEvent)qC[3C]IQf}{AUMIDIEvent=^(AURenderEvent)qCCSC[3C]})qCC}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUAudioUnitImplementation');
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


	AURenderEventHeader._imports = $imports;

	// properties
	Object.defineProperties(AURenderEventHeader.prototype, {
	
		next: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_next) {
				$dispatch(this.$native, 'setValue:atIndex:', [_next, 0]);
			},
			enumerable: false
		},
	
		eventSampleTime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_eventSampleTime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_eventSampleTime, 1]);
			},
			enumerable: false
		},
	
		eventType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_eventType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_eventType, 2]);
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

module.exports = AURenderEventHeader;
