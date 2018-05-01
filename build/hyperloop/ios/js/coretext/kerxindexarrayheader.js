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
function KerxIndexArrayHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KerxIndexArrayHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KerxIndexArrayHeader=ISSIIII}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	KerxIndexArrayHeader._imports = $imports;

	// properties
	Object.defineProperties(KerxIndexArrayHeader.prototype, {
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 0]);
			},
			enumerable: false
		},
	
		rowCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_rowCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rowCount, 1]);
			},
			enumerable: false
		},
	
		columnCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_columnCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_columnCount, 2]);
			},
			enumerable: false
		},
	
		rowIndexTableOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_rowIndexTableOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rowIndexTableOffset, 3]);
			},
			enumerable: false
		},
	
		columnIndexTableOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_columnIndexTableOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_columnIndexTableOffset, 4]);
			},
			enumerable: false
		},
	
		kerningArrayOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_kerningArrayOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_kerningArrayOffset, 5]);
			},
			enumerable: false
		},
	
		kerningVectorOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_kerningVectorOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_kerningVectorOffset, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KerxIndexArrayHeader;
