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
function CAFInstrumentChunk (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CAFInstrumentChunk)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CAFInstrumentChunk=fCCCCfIIII}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile');
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


	CAFInstrumentChunk._imports = $imports;

	// properties
	Object.defineProperties(CAFInstrumentChunk.prototype, {
	
		mBaseNote: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mBaseNote) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mBaseNote, 0]);
			},
			enumerable: false
		},
	
		mMIDILowNote: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mMIDILowNote) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMIDILowNote, 1]);
			},
			enumerable: false
		},
	
		mMIDIHighNote: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mMIDIHighNote) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMIDIHighNote, 2]);
			},
			enumerable: false
		},
	
		mMIDILowVelocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mMIDILowVelocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMIDILowVelocity, 3]);
			},
			enumerable: false
		},
	
		mMIDIHighVelocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mMIDIHighVelocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mMIDIHighVelocity, 4]);
			},
			enumerable: false
		},
	
		mdBGain: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_mdBGain) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mdBGain, 5]);
			},
			enumerable: false
		},
	
		mStartRegionID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_mStartRegionID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mStartRegionID, 6]);
			},
			enumerable: false
		},
	
		mSustainRegionID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_mSustainRegionID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mSustainRegionID, 7]);
			},
			enumerable: false
		},
	
		mReleaseRegionID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_mReleaseRegionID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mReleaseRegionID, 8]);
			},
			enumerable: false
		},
	
		mInstrumentID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_mInstrumentID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mInstrumentID, 9]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CAFInstrumentChunk;
