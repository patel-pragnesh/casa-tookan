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
 * CoreText//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTTypes.h
 * @class
 */
function sfntVariationAxis (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof sfntVariationAxis)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{sfntVariationAxis=Iiiiss}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTTypes');
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


	sfntVariationAxis._imports = $imports;

	// properties
	Object.defineProperties(sfntVariationAxis.prototype, {
	
		axisTag: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_axisTag) {
				$dispatch(this.$native, 'setValue:atIndex:', [_axisTag, 0]);
			},
			enumerable: false
		},
	
		minValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_minValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minValue, 1]);
			},
			enumerable: false
		},
	
		defaultValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_defaultValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_defaultValue, 2]);
			},
			enumerable: false
		},
	
		maxValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_maxValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maxValue, 3]);
			},
			enumerable: false
		},
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 4]);
			},
			enumerable: false
		},
	
		nameID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_nameID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nameID, 5]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = sfntVariationAxis;
