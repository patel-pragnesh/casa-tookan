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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile.h
 * @class
 */
function CAFMarkerChunk (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CAFMarkerChunk)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CAFMarkerChunk=II[1{CAFMarker=IdI{CAF_SMPTE_Time=ccccI}I}]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile');
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


	CAFMarkerChunk._imports = $imports;

	// properties
	Object.defineProperties(CAFMarkerChunk.prototype, {
	
		mSMPTE_TimeType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mSMPTE_TimeType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSMPTE_TimeType, 0]);
			},
			enumerable: false
		},
	
		mNumberMarkers: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mNumberMarkers) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberMarkers, 1]);
			},
			enumerable: false
		},
	
		mMarkers: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mMarkers) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMarkers, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CAFMarkerChunk;
