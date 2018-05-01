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
function KernSimpleArrayHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KernSimpleArrayHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KernSimpleArrayHeader=SSSS[1S]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	KernSimpleArrayHeader._imports = $imports;

	// properties
	Object.defineProperties(KernSimpleArrayHeader.prototype, {
	
		rowWidth: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_rowWidth) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rowWidth, 0]);
			},
			enumerable: false
		},
	
		leftOffsetTable: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_leftOffsetTable) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftOffsetTable, 1]);
			},
			enumerable: false
		},
	
		rightOffsetTable: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_rightOffsetTable) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightOffsetTable, 2]);
			},
			enumerable: false
		},
	
		theArray: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_theArray) {
				$dispatch(this.$native, 'setValue:atIndex:', [_theArray, 3]);
			},
			enumerable: false
		},
	
		firstTable: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_firstTable) {
				$dispatch(this.$native, 'setValue:atIndex:', [_firstTable, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KernSimpleArrayHeader;
