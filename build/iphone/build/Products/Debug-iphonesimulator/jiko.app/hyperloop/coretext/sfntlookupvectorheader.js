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
function SFNTLookupVectorHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SFNTLookupVectorHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SFNTLookupVectorHeader=SSS[1C]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	SFNTLookupVectorHeader._imports = $imports;

	// properties
	Object.defineProperties(SFNTLookupVectorHeader.prototype, {
	
		valueSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_valueSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_valueSize, 0]);
			},
			enumerable: false
		},
	
		firstGlyph: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_firstGlyph) {
				$dispatch(this.$native, 'setValue:atIndex:', [_firstGlyph, 1]);
			},
			enumerable: false
		},
	
		count: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_count) {
				$dispatch(this.$native, 'setValue:atIndex:', [_count, 2]);
			},
			enumerable: false
		},
	
		values: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_values) {
				$dispatch(this.$native, 'setValue:atIndex:', [_values, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SFNTLookupVectorHeader;
