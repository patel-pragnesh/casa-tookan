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
function LtagTable (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof LtagTable)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{LtagTable=III[1{LtagStringRange=SS}]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	LtagTable._imports = $imports;

	// properties
	Object.defineProperties(LtagTable.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 1]);
			},
			enumerable: false
		},
	
		numTags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_numTags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numTags, 2]);
			},
			enumerable: false
		},
	
		tagRange: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_tagRange) {
				$dispatch(this.$native, 'setValue:atIndex:', [_tagRange, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = LtagTable;
