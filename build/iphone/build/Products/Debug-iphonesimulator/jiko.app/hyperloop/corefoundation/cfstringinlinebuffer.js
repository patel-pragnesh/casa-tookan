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
 * CoreFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFString.h
 * @class
 */
function CFStringInlineBuffer (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CFStringInlineBuffer)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$rangeToBuffer = {};
	if (pointer) {
		this.$rangeToBuffer.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$rangeToBuffer.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CFStringInlineBuffer=[64S]^{__CFString=}r^Sr*{?=qq}qq}', 'CoreFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFString');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$rangeToBuffer, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$rangeToBuffer, 'f1', {
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


	CFStringInlineBuffer._imports = $imports;

	// properties
	Object.defineProperties(CFStringInlineBuffer.prototype, {
	
		buffer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_buffer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_buffer, 0]);
			},
			enumerable: false
		},
	
		theString: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_theString) {
				$dispatch(this.$native, 'setValue:atIndex:', [_theString, 1]);
			},
			enumerable: false
		},
	
		directUniCharBuffer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_directUniCharBuffer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_directUniCharBuffer, 2]);
			},
			enumerable: false
		},
	
		directCStringBuffer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_directCStringBuffer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_directCStringBuffer, 3]);
			},
			enumerable: false
		},
	
		rangeToBuffer: {
			get: function () {
				return this.$rangeToBuffer;
			},
		
			set: function (_rangeToBuffer) {
				this.$rangeToBuffer.f0 = _rangeToBuffer.f0;
				this.$rangeToBuffer.f1 = _rangeToBuffer.f1;
			},
			enumerable: false
		},
	
		bufferedRangeStart: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_bufferedRangeStart) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bufferedRangeStart, 5]);
			},
			enumerable: false
		},
	
		bufferedRangeEnd: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_bufferedRangeEnd) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bufferedRangeEnd, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CFStringInlineBuffer;
