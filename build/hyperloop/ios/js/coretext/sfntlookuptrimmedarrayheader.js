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
function SFNTLookupTrimmedArrayHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SFNTLookupTrimmedArrayHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SFNTLookupTrimmedArrayHeader=SS[1S]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	SFNTLookupTrimmedArrayHeader._imports = $imports;

	// properties
	Object.defineProperties(SFNTLookupTrimmedArrayHeader.prototype, {
	
		firstGlyph: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_firstGlyph) {
				$dispatch(this.$native, 'setValue:atIndex:', [_firstGlyph, 0]);
			},
			enumerable: false
		},
	
		count: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_count) {
				$dispatch(this.$native, 'setValue:atIndex:', [_count, 1]);
			},
			enumerable: false
		},
	
		valueArray: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_valueArray) {
				$dispatch(this.$native, 'setValue:atIndex:', [_valueArray, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SFNTLookupTrimmedArrayHeader;
