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
function STXHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof STXHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{STXHeader=IIII}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	STXHeader._imports = $imports;

	// properties
	Object.defineProperties(STXHeader.prototype, {
	
		nClasses: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_nClasses) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nClasses, 0]);
			},
			enumerable: false
		},
	
		classTableOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_classTableOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_classTableOffset, 1]);
			},
			enumerable: false
		},
	
		stateArrayOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_stateArrayOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_stateArrayOffset, 2]);
			},
			enumerable: false
		},
	
		entryTableOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_entryTableOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_entryTableOffset, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = STXHeader;
