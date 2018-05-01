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
function KernVersion0SubtableHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KernVersion0SubtableHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KernVersion0SubtableHeader=SSS(KernFormatSpecificHeader={KernOrderedListHeader=SSSS[1S]}{KernStateHeader={STHeader=CCSSS}S[1C]}{KernSimpleArrayHeader=SSSS[1S]}{KernIndexArrayHeader=SCCCC[1s][1C][1C][1C]})}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	KernVersion0SubtableHeader._imports = $imports;

	// properties
	Object.defineProperties(KernVersion0SubtableHeader.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		length: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_length) {
				$dispatch(this.$native, 'setValue:atIndex:', [_length, 1]);
			},
			enumerable: false
		},
	
		stInfo: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_stInfo) {
				$dispatch(this.$native, 'setValue:atIndex:', [_stInfo, 2]);
			},
			enumerable: false
		},
	
		fsHeader: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_fsHeader) {
				$dispatch(this.$native, 'setValue:atIndex:', [_fsHeader, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KernVersion0SubtableHeader;
