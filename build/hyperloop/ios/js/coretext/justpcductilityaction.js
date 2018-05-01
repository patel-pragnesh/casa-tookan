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
function JustPCDuctilityAction (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JustPCDuctilityAction)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JustPCDuctilityAction=Iiii}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	JustPCDuctilityAction._imports = $imports;

	// properties
	Object.defineProperties(JustPCDuctilityAction.prototype, {
	
		ductilityAxis: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_ductilityAxis) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ductilityAxis, 0]);
			},
			enumerable: false
		},
	
		minimumLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_minimumLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minimumLimit, 1]);
			},
			enumerable: false
		},
	
		noStretchValue: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_noStretchValue) {
				$dispatch(this.$native, 'setValue:atIndex:', [_noStretchValue, 2]);
			},
			enumerable: false
		},
	
		maximumLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_maximumLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maximumLimit, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JustPCDuctilityAction;
