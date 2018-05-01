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
function ROTAGlyphEntry (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof ROTAGlyphEntry)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{ROTAGlyphEntry=sss}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	ROTAGlyphEntry._imports = $imports;

	// properties
	Object.defineProperties(ROTAGlyphEntry.prototype, {
	
		GlyphIndexOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_GlyphIndexOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_GlyphIndexOffset, 0]);
			},
			enumerable: false
		},
	
		HBaselineOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_HBaselineOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_HBaselineOffset, 1]);
			},
			enumerable: false
		},
	
		VBaselineOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_VBaselineOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_VBaselineOffset, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = ROTAGlyphEntry;
