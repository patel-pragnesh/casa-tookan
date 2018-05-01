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
function sfntDirectory (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof sfntDirectory)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{sfntDirectory=ISSSS[1{sfntDirectoryEntry=IIII}]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTTypes');
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


	sfntDirectory._imports = $imports;

	// properties
	Object.defineProperties(sfntDirectory.prototype, {
	
		format: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_format) {
				$dispatch(this.$native, 'setValue:atIndex:', [_format, 0]);
			},
			enumerable: false
		},
	
		numOffsets: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_numOffsets) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numOffsets, 1]);
			},
			enumerable: false
		},
	
		searchRange: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_searchRange) {
				$dispatch(this.$native, 'setValue:atIndex:', [_searchRange, 2]);
			},
			enumerable: false
		},
	
		entrySelector: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_entrySelector) {
				$dispatch(this.$native, 'setValue:atIndex:', [_entrySelector, 3]);
			},
			enumerable: false
		},
	
		rangeShift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_rangeShift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rangeShift, 4]);
			},
			enumerable: false
		},
	
		table: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_table) {
				$dispatch(this.$native, 'setValue:atIndex:', [_table, 5]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = sfntDirectory;
