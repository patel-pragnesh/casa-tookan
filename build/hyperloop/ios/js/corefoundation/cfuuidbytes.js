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
 * CoreFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFUUID.h
 * @class
 */
function CFUUIDBytes (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CFUUIDBytes)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CFUUIDBytes=CCCCCCCCCCCCCCCC}', 'CoreFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFUUID');
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


	CFUUIDBytes._imports = $imports;

	// properties
	Object.defineProperties(CFUUIDBytes.prototype, {
	
		byte0: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_byte0) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte0, 0]);
			},
			enumerable: false
		},
	
		byte1: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_byte1) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte1, 1]);
			},
			enumerable: false
		},
	
		byte2: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_byte2) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte2, 2]);
			},
			enumerable: false
		},
	
		byte3: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_byte3) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte3, 3]);
			},
			enumerable: false
		},
	
		byte4: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_byte4) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte4, 4]);
			},
			enumerable: false
		},
	
		byte5: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_byte5) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte5, 5]);
			},
			enumerable: false
		},
	
		byte6: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_byte6) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte6, 6]);
			},
			enumerable: false
		},
	
		byte7: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_byte7) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte7, 7]);
			},
			enumerable: false
		},
	
		byte8: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_byte8) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte8, 8]);
			},
			enumerable: false
		},
	
		byte9: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_byte9) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte9, 9]);
			},
			enumerable: false
		},
	
		byte10: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 10);
			},
		
			set: function (_byte10) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte10, 10]);
			},
			enumerable: false
		},
	
		byte11: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 11);
			},
		
			set: function (_byte11) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte11, 11]);
			},
			enumerable: false
		},
	
		byte12: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 12);
			},
		
			set: function (_byte12) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte12, 12]);
			},
			enumerable: false
		},
	
		byte13: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 13);
			},
		
			set: function (_byte13) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte13, 13]);
			},
			enumerable: false
		},
	
		byte14: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 14);
			},
		
			set: function (_byte14) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte14, 14]);
			},
			enumerable: false
		},
	
		byte15: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 15);
			},
		
			set: function (_byte15) {
				$dispatch(this.$native, 'setValue:atIndex:', [_byte15, 15]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CFUUIDBytes;
