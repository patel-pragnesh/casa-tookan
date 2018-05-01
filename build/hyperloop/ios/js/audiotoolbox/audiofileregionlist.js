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
function AudioFileRegionList (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioFileRegionList)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioFileRegionList=II[1{AudioFileRegion=I^{__CFString}II[1{AudioFileMarker=d^{__CFString}i{AudioFile_SMPTE_Time=cCCCI}ISS}]}]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AudioFile');
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


	AudioFileRegionList._imports = $imports;

	// properties
	Object.defineProperties(AudioFileRegionList.prototype, {
	
		mSMPTE_TimeType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mSMPTE_TimeType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSMPTE_TimeType, 0]);
			},
			enumerable: false
		},
	
		mNumberRegions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mNumberRegions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberRegions, 1]);
			},
			enumerable: false
		},
	
		mRegions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mRegions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mRegions, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioFileRegionList;
