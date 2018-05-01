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
function sfntNameRecord (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof sfntNameRecord)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{sfntNameRecord=SSSSSS}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTTypes');
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


	sfntNameRecord._imports = $imports;

	// properties
	Object.defineProperties(sfntNameRecord.prototype, {
	
		platformID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_platformID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_platformID, 0]);
			},
			enumerable: false
		},
	
		scriptID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_scriptID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_scriptID, 1]);
			},
			enumerable: false
		},
	
		languageID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_languageID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_languageID, 2]);
			},
			enumerable: false
		},
	
		nameID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_nameID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nameID, 3]);
			},
			enumerable: false
		},
	
		length: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_length) {
				$dispatch(this.$native, 'setValue:atIndex:', [_length, 4]);
			},
			enumerable: false
		},
	
		offset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_offset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_offset, 5]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = sfntNameRecord;
