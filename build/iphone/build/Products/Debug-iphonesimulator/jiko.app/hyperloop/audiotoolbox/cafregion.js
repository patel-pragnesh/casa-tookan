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
function CAFRegion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CAFRegion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CAFRegion=III[1{CAFMarker=IdI{CAF_SMPTE_Time=ccccI}I}]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile');
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


	CAFRegion._imports = $imports;

	// properties
	Object.defineProperties(CAFRegion.prototype, {
	
		mRegionID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mRegionID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mRegionID, 0]);
			},
			enumerable: false
		},
	
		mFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFlags, 1]);
			},
			enumerable: false
		},
	
		mNumberMarkers: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mNumberMarkers) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberMarkers, 2]);
			},
			enumerable: false
		},
	
		mMarkers: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mMarkers) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMarkers, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CAFRegion;
