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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile.h
 * @class
 */
function AudioFileRegion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioFileRegion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioFileRegion=Ir^{__CFString=}II[1{AudioFileMarker=d^{__CFString}i{AudioFile_SMPTE_Time=cCCCI}ISS}]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile');
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


	AudioFileRegion._imports = $imports;

	// properties
	Object.defineProperties(AudioFileRegion.prototype, {
	
		mRegionID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mRegionID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mRegionID, 0]);
			},
			enumerable: false
		},
	
		mName: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mName) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mName, 1]);
			},
			enumerable: false
		},
	
		mFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mFlags, 2]);
			},
			enumerable: false
		},
	
		mNumberMarkers: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mNumberMarkers) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberMarkers, 3]);
			},
			enumerable: false
		},
	
		mMarkers: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mMarkers) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMarkers, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioFileRegion;
