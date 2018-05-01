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
function JustPostcompTable (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JustPostcompTable)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$lookupTable = {};
	if (pointer) {
		this.$lookupTable.format = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$lookupTable.fsHeader = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JustPostcompTable={SFNTLookupTable=S(SFNTLookupFormatSpecificHeader={SFNTLookupArrayHeader=[1S]}{SFNTLookupSegmentHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSegment=SS[1S]}]}{SFNTLookupSingleHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSingle=S[1S]}]}{SFNTLookupTrimmedArrayHeader=SS[1S]}{SFNTLookupVectorHeader=SSS[1C]})}}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$lookupTable, 'format', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$lookupTable, 'fsHeader', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.SFNTLookupTable = require('/hyperloop/coretext/sfntlookuptable');

	JustPostcompTable._imports = $imports;

	// properties
	Object.defineProperties(JustPostcompTable.prototype, {
	
		lookupTable: {
			get: function () {
				return this.$lookupTable;
			},
		
			set: function (_lookupTable) {
				this.$lookupTable.format = _lookupTable.format;
				this.$lookupTable.fsHeader = _lookupTable.fsHeader;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JustPostcompTable;
