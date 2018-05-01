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
function JustDirectionTable (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JustDirectionTable)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$lookup = {};
	if (pointer) {
		this.$lookup.format = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$lookup.fsHeader = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JustDirectionTable=SSS{SFNTLookupTable=S(SFNTLookupFormatSpecificHeader={SFNTLookupArrayHeader=[1S]}{SFNTLookupSegmentHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSegment=SS[1S]}]}{SFNTLookupSingleHeader={SFNTLookupBinarySearchHeader=SSSSS}[1{SFNTLookupSingle=S[1S]}]}{SFNTLookupTrimmedArrayHeader=SS[1S]}{SFNTLookupVectorHeader=SSS[1C]})}}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$lookup, 'format', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$lookup, 'fsHeader', {
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

	JustDirectionTable._imports = $imports;

	// properties
	Object.defineProperties(JustDirectionTable.prototype, {
	
		justClass: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_justClass) {
				$dispatch(this.$native, 'setValue:atIndex:', [_justClass, 0]);
			},
			enumerable: false
		},
	
		widthDeltaClusters: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_widthDeltaClusters) {
				$dispatch(this.$native, 'setValue:atIndex:', [_widthDeltaClusters, 1]);
			},
			enumerable: false
		},
	
		postcomp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_postcomp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_postcomp, 2]);
			},
			enumerable: false
		},
	
		lookup: {
			get: function () {
				return this.$lookup;
			},
		
			set: function (_lookup) {
				this.$lookup.format = _lookup.format;
				this.$lookup.fsHeader = _lookup.fsHeader;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JustDirectionTable;
