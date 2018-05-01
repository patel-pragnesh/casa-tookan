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
 * CoreText//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes.h
 * @class
 */
function BslnTable (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof BslnTable)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{BslnTable=iSS(BslnFormatUnion={BslnFormat0Part=[32s]}{BslnFormat1Part=[32s]{SFNTLookupTable=S(SFNTLookupFormatSpecificHeader={SFNTLookupArrayHeader=[1S]}{SFNTLookupSegmentHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSegment=SS[1S]}]}{SFNTLookupSingleHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSingle=S[1S]}]}{SFNTLookupTrimmedArrayHeader=SS[1S]}{SFNTLookupVectorHeader=SSS[1C]})}}{BslnFormat2Part=S[32s]}{BslnFormat3Part=S[32s]{SFNTLookupTable=S(SFNTLookupFormatSpecificHeader={SFNTLookupArrayHeader=[1S]}{SFNTLookupSegmentHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSegment=SS[1S]}]}{SFNTLookupSingleHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSingle=S[1S]}]}{SFNTLookupTrimmedArrayHeader=SS[1S]}{SFNTLookupVectorHeader=SSS[1C]})}})}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	BslnTable._imports = $imports;

	// properties
	Object.defineProperties(BslnTable.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		format: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_format) {
				$dispatch(this.$native, 'setValue:atIndex:', [_format, 1]);
			},
			enumerable: false
		},
	
		defaultBaseline: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_defaultBaseline) {
				$dispatch(this.$native, 'setValue:atIndex:', [_defaultBaseline, 2]);
			},
			enumerable: false
		},
	
		parts: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_parts) {
				$dispatch(this.$native, 'setValue:atIndex:', [_parts, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = BslnTable;
