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
 * CoreMIDI//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIDriver.h
 * @class
 */
function MIDIDriverInterface (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDIDriverInterface)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDIDriverInterface=^v^?^?^?^?^?^?^?^?^?^?^?}', 'CoreMIDI', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMIDI.framework/Headers/MIDIDriver');
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


	MIDIDriverInterface._imports = $imports;

	// properties
	Object.defineProperties(MIDIDriverInterface.prototype, {
	
		_reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (__reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [__reserved, 0]);
			},
			enumerable: false
		},
	
		QueryInterface: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_QueryInterface) {
				$dispatch(this.$native, 'setValue:atIndex:', [_QueryInterface, 1]);
			},
			enumerable: false
		},
	
		AddRef: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_AddRef) {
				$dispatch(this.$native, 'setValue:atIndex:', [_AddRef, 2]);
			},
			enumerable: false
		},
	
		Release: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_Release) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Release, 3]);
			},
			enumerable: false
		},
	
		FindDevices: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_FindDevices) {
				$dispatch(this.$native, 'setValue:atIndex:', [_FindDevices, 4]);
			},
			enumerable: false
		},
	
		Start: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_Start) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Start, 5]);
			},
			enumerable: false
		},
	
		Stop: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_Stop) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Stop, 6]);
			},
			enumerable: false
		},
	
		Configure: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_Configure) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Configure, 7]);
			},
			enumerable: false
		},
	
		Send: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_Send) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Send, 8]);
			},
			enumerable: false
		},
	
		EnableSource: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_EnableSource) {
				$dispatch(this.$native, 'setValue:atIndex:', [_EnableSource, 9]);
			},
			enumerable: false
		},
	
		Flush: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 10);
			},
		
			set: function (_Flush) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Flush, 10]);
			},
			enumerable: false
		},
	
		Monitor: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 11);
			},
		
			set: function (_Monitor) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Monitor, 11]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDIDriverInterface;
