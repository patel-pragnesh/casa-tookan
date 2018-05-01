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
function ALMXGlyphEntry (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof ALMXGlyphEntry)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{ALMXGlyphEntry=sssss}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	ALMXGlyphEntry._imports = $imports;

	// properties
	Object.defineProperties(ALMXGlyphEntry.prototype, {
	
		GlyphIndexOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_GlyphIndexOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_GlyphIndexOffset, 0]);
			},
			enumerable: false
		},
	
		HorizontalAdvance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_HorizontalAdvance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_HorizontalAdvance, 1]);
			},
			enumerable: false
		},
	
		XOffsetToHOrigin: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_XOffsetToHOrigin) {
				$dispatch(this.$native, 'setValue:atIndex:', [_XOffsetToHOrigin, 2]);
			},
			enumerable: false
		},
	
		VerticalAdvance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_VerticalAdvance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_VerticalAdvance, 3]);
			},
			enumerable: false
		},
	
		YOffsetToVOrigin: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_YOffsetToVOrigin) {
				$dispatch(this.$native, 'setValue:atIndex:', [_YOffsetToVOrigin, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = ALMXGlyphEntry;
