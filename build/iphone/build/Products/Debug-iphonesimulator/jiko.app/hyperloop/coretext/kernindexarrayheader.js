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
function KernIndexArrayHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KernIndexArrayHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KernIndexArrayHeader=SCCCC[1s][1C][1C][1C]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	KernIndexArrayHeader._imports = $imports;

	// properties
	Object.defineProperties(KernIndexArrayHeader.prototype, {
	
		glyphCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_glyphCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_glyphCount, 0]);
			},
			enumerable: false
		},
	
		kernValueCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_kernValueCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_kernValueCount, 1]);
			},
			enumerable: false
		},
	
		leftClassCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_leftClassCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftClassCount, 2]);
			},
			enumerable: false
		},
	
		rightClassCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_rightClassCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightClassCount, 3]);
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
	
		kernValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_kernValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_kernValue, 5]);
			},
			enumerable: false
		},
	
		leftClass: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_leftClass) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftClass, 6]);
			},
			enumerable: false
		},
	
		rightClass: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_rightClass) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightClass, 7]);
			},
			enumerable: false
		},
	
		kernIndex: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_kernIndex) {
				$dispatch(this.$native, 'setValue:atIndex:', [_kernIndex, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KernIndexArrayHeader;
