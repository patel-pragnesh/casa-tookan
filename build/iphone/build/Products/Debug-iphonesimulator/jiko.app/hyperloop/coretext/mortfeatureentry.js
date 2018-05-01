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
function MortFeatureEntry (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MortFeatureEntry)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MortFeatureEntry=SSII}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	MortFeatureEntry._imports = $imports;

	// properties
	Object.defineProperties(MortFeatureEntry.prototype, {
	
		featureType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_featureType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_featureType, 0]);
			},
			enumerable: false
		},
	
		featureSelector: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_featureSelector) {
				$dispatch(this.$native, 'setValue:atIndex:', [_featureSelector, 1]);
			},
			enumerable: false
		},
	
		enableFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_enableFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_enableFlags, 2]);
			},
			enumerable: false
		},
	
		disableFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_disableFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_disableFlags, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MortFeatureEntry;
