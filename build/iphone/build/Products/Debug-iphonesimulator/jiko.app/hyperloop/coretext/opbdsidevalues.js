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
function OpbdSideValues (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof OpbdSideValues)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{OpbdSideValues=ssss}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	OpbdSideValues._imports = $imports;

	// properties
	Object.defineProperties(OpbdSideValues.prototype, {
	
		leftSideShift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_leftSideShift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leftSideShift, 0]);
			},
			enumerable: false
		},
	
		topSideShift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_topSideShift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_topSideShift, 1]);
			},
			enumerable: false
		},
	
		rightSideShift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_rightSideShift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rightSideShift, 2]);
			},
			enumerable: false
		},
	
		bottomSideShift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_bottomSideShift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bottomSideShift, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = OpbdSideValues;
