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
 * CoreFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFDictionary.h
 * @class
 */
function CFDictionaryKeyCallBacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CFDictionaryKeyCallBacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CFDictionaryKeyCallBacks=q^?^?^?^?^?}', 'CoreFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFDictionary');
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


	CFDictionaryKeyCallBacks._imports = $imports;

	// properties
	Object.defineProperties(CFDictionaryKeyCallBacks.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		retain: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_retain) {
				$dispatch(this.$native, 'setValue:atIndex:', [_retain, 1]);
			},
			enumerable: false
		},
	
		release: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_release) {
				$dispatch(this.$native, 'setValue:atIndex:', [_release, 2]);
			},
			enumerable: false
		},
	
		copyDescription: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_copyDescription) {
				$dispatch(this.$native, 'setValue:atIndex:', [_copyDescription, 3]);
			},
			enumerable: false
		},
	
		equal: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_equal) {
				$dispatch(this.$native, 'setValue:atIndex:', [_equal, 4]);
			},
			enumerable: false
		},
	
		hash: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_hash) {
				$dispatch(this.$native, 'setValue:atIndex:', [_hash, 5]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CFDictionaryKeyCallBacks;
