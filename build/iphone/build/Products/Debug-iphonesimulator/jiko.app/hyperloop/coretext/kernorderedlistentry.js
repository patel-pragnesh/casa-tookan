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
function KernOrderedListEntry (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KernOrderedListEntry)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$pair = {};
	if (pointer) {
		this.$pair.left = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$pair.right = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KernOrderedListEntry={KernKerningPair=SS}s}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$pair, 'left', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$pair, 'right', {
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
	$imports.KernKerningPair = require('/hyperloop/coretext/kernkerningpair');

	KernOrderedListEntry._imports = $imports;

	// properties
	Object.defineProperties(KernOrderedListEntry.prototype, {
	
		pair: {
			get: function () {
				return this.$pair;
			},
		
			set: function (_pair) {
				this.$pair.left = _pair.left;
				this.$pair.right = _pair.right;
			},
			enumerable: false
		},
	
		value: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_value) {
				$dispatch(this.$native, 'setValue:atIndex:', [_value, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KernOrderedListEntry;
