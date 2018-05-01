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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSDecimal.h
 * @class
 */
function NSDecimal (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof NSDecimal)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{NSDecimal=iIIII[8S]}', 'Foundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSDecimal');
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


	NSDecimal._imports = $imports;

	// properties
	Object.defineProperties(NSDecimal.prototype, {
	
		_exponent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (__exponent) {
				$dispatch(this.$native, 'setValue:atIndex:', [__exponent, 0]);
			},
			enumerable: false
		},
	
		_length: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (__length) {
				$dispatch(this.$native, 'setValue:atIndex:', [__length, 1]);
			},
			enumerable: false
		},
	
		_isNegative: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (__isNegative) {
				$dispatch(this.$native, 'setValue:atIndex:', [__isNegative, 2]);
			},
			enumerable: false
		},
	
		_isCompact: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (__isCompact) {
				$dispatch(this.$native, 'setValue:atIndex:', [__isCompact, 3]);
			},
			enumerable: false
		},
	
		_reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (__reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [__reserved, 4]);
			},
			enumerable: false
		},
	
		_mantissa: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (__mantissa) {
				$dispatch(this.$native, 'setValue:atIndex:', [__mantissa, 5]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = NSDecimal;
