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
function JustWidthDeltaEntry (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JustWidthDeltaEntry)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JustWidthDeltaEntry=IiiiiSS}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	JustWidthDeltaEntry._imports = $imports;

	// properties
	Object.defineProperties(JustWidthDeltaEntry.prototype, {
	
		justClass: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_justClass) {
				$dispatch(this.$native, 'setValue:atIndex:', [_justClass, 0]);
			},
			enumerable: false
		},
	
		beforeGrowLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_beforeGrowLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_beforeGrowLimit, 1]);
			},
			enumerable: false
		},
	
		beforeShrinkLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_beforeShrinkLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_beforeShrinkLimit, 2]);
			},
			enumerable: false
		},
	
		afterGrowLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_afterGrowLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_afterGrowLimit, 3]);
			},
			enumerable: false
		},
	
		afterShrinkLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_afterShrinkLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_afterShrinkLimit, 4]);
			},
			enumerable: false
		},
	
		growFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_growFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_growFlags, 5]);
			},
			enumerable: false
		},
	
		shrinkFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_shrinkFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_shrinkFlags, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JustWidthDeltaEntry;
