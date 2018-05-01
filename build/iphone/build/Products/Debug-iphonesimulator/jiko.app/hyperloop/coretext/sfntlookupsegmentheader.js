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
function SFNTLookupSegmentHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SFNTLookupSegmentHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$binSearch = {};
	if (pointer) {
		this.$binSearch.unitSize = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$binSearch.nUnits = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$binSearch.searchRange = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$binSearch.entrySelector = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$binSearch.rangeShift = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SFNTLookupSegmentHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSegment=SS[1S]}]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$binSearch, 'unitSize', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$binSearch, 'nUnits', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$binSearch, 'searchRange', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$binSearch, 'entrySelector', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$binSearch, 'rangeShift', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.SFNTLookupBinarySearchHeader = require('/hyperloop/coretext/sfntlookupbinarysearchheader');

	SFNTLookupSegmentHeader._imports = $imports;

	// properties
	Object.defineProperties(SFNTLookupSegmentHeader.prototype, {
	
		binSearch: {
			get: function () {
				return this.$binSearch;
			},
		
			set: function (_binSearch) {
				this.$binSearch.unitSize = _binSearch.unitSize;
				this.$binSearch.nUnits = _binSearch.nUnits;
				this.$binSearch.searchRange = _binSearch.searchRange;
				this.$binSearch.entrySelector = _binSearch.entrySelector;
				this.$binSearch.rangeShift = _binSearch.rangeShift;
			},
			enumerable: false
		},
	
		segments: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_segments) {
				$dispatch(this.$native, 'setValue:atIndex:', [_segments, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SFNTLookupSegmentHeader;
