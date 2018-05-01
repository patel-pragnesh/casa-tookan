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
function sfntVariationHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof sfntVariationHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{sfntVariationHeader=iSSSSSS[1{sfntVariationAxis=Iiiiss}][1{sfntInstance=ss[1i]}]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTTypes');
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


	sfntVariationHeader._imports = $imports;

	// properties
	Object.defineProperties(sfntVariationHeader.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		offsetToData: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_offsetToData) {
				$dispatch(this.$native, 'setValue:atIndex:', [_offsetToData, 1]);
			},
			enumerable: false
		},
	
		countSizePairs: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_countSizePairs) {
				$dispatch(this.$native, 'setValue:atIndex:', [_countSizePairs, 2]);
			},
			enumerable: false
		},
	
		axisCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_axisCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_axisCount, 3]);
			},
			enumerable: false
		},
	
		axisSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_axisSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_axisSize, 4]);
			},
			enumerable: false
		},
	
		instanceCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_instanceCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_instanceCount, 5]);
			},
			enumerable: false
		},
	
		instanceSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_instanceSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_instanceSize, 6]);
			},
			enumerable: false
		},
	
		axis: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_axis) {
				$dispatch(this.$native, 'setValue:atIndex:', [_axis, 7]);
			},
			enumerable: false
		},
	
		instance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_instance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_instance, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = sfntVariationHeader;
