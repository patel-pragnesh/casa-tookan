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
function KernStateHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KernStateHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$header = {};
	if (pointer) {
		this.$header.filler = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$header.nClasses = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$header.classTableOffset = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$header.stateArrayOffset = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$header.entryTableOffset = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KernStateHeader={STHeader=CCSSS}S[1C]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$header, 'filler', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$header, 'nClasses', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$header, 'classTableOffset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$header, 'stateArrayOffset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$header, 'entryTableOffset', {
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
	$imports.STHeader = require('/hyperloop/coretext/stheader');

	KernStateHeader._imports = $imports;

	// properties
	Object.defineProperties(KernStateHeader.prototype, {
	
		header: {
			get: function () {
				return this.$header;
			},
		
			set: function (_header) {
				this.$header.filler = _header.filler;
				this.$header.nClasses = _header.nClasses;
				this.$header.classTableOffset = _header.classTableOffset;
				this.$header.stateArrayOffset = _header.stateArrayOffset;
				this.$header.entryTableOffset = _header.entryTableOffset;
			},
			enumerable: false
		},
	
		valueTable: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_valueTable) {
				$dispatch(this.$native, 'setValue:atIndex:', [_valueTable, 1]);
			},
			enumerable: false
		},
	
		firstTable: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_firstTable) {
				$dispatch(this.$native, 'setValue:atIndex:', [_firstTable, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KernStateHeader;
