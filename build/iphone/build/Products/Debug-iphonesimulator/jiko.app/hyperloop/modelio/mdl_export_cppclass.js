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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLTypes.h
 * @class
 */
function MDL_EXPORT_CPPCLASS (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MDL_EXPORT_CPPCLASS)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MDL_EXPORT_CPPCLASS=}', 'ModelIO', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLTypes');
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


	MDL_EXPORT_CPPCLASS._imports = $imports;

	// properties
	Object.defineProperties(MDL_EXPORT_CPPCLASS.prototype, {
	
		maxBounds: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_maxBounds) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maxBounds, 0]);
			},
			enumerable: false
		},
	
		minBounds: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_minBounds) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minBounds, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MDL_EXPORT_CPPCLASS;
