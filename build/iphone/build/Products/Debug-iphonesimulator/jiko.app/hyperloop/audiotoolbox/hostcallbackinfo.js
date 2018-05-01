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
function HostCallbackInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof HostCallbackInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{HostCallbackInfo=^v^?^?^?^?}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioUnitProperties');
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


	HostCallbackInfo._imports = $imports;

	// properties
	Object.defineProperties(HostCallbackInfo.prototype, {
	
		hostUserData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_hostUserData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_hostUserData, 0]);
			},
			enumerable: false
		},
	
		beatAndTempoProc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_beatAndTempoProc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_beatAndTempoProc, 1]);
			},
			enumerable: false
		},
	
		musicalTimeLocationProc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_musicalTimeLocationProc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_musicalTimeLocationProc, 2]);
			},
			enumerable: false
		},
	
		transportStateProc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_transportStateProc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_transportStateProc, 3]);
			},
			enumerable: false
		},
	
		transportStateProc2: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_transportStateProc2) {
				$dispatch(this.$native, 'setValue:atIndex:', [_transportStateProc2, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = HostCallbackInfo;
