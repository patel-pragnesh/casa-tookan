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
function KernOrderedListHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KernOrderedListHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KernOrderedListHeader=SSSS[1S]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	KernOrderedListHeader._imports = $imports;

	// properties
	Object.defineProperties(KernOrderedListHeader.prototype, {
	
		nPairs: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_nPairs) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nPairs, 0]);
			},
			enumerable: false
		},
	
		searchRange: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_searchRange) {
				$dispatch(this.$native, 'setValue:atIndex:', [_searchRange, 1]);
			},
			enumerable: false
		},
	
		entrySelector: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_entrySelector) {
				$dispatch(this.$native, 'setValue:atIndex:', [_entrySelector, 2]);
			},
			enumerable: false
		},
	
		rangeShift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_rangeShift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rangeShift, 3]);
			},
			enumerable: false
		},
	
		table: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_table) {
				$dispatch(this.$native, 'setValue:atIndex:', [_table, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KernOrderedListHeader;
