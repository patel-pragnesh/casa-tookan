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
function sfntFeatureName (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof sfntFeatureName)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{sfntFeatureName=SSiSs}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTTypes');
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


	sfntFeatureName._imports = $imports;

	// properties
	Object.defineProperties(sfntFeatureName.prototype, {
	
		featureType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_featureType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_featureType, 0]);
			},
			enumerable: false
		},
	
		settingCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_settingCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_settingCount, 1]);
			},
			enumerable: false
		},
	
		offsetToSettings: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_offsetToSettings) {
				$dispatch(this.$native, 'setValue:atIndex:', [_offsetToSettings, 2]);
			},
			enumerable: false
		},
	
		featureFlags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_featureFlags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_featureFlags, 3]);
			},
			enumerable: false
		},
	
		nameID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_nameID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nameID, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = sfntFeatureName;
