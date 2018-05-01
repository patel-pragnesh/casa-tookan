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
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLVoxelArray.h
 * @class
 */
function MDLVoxelIndexExtent (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MDLVoxelIndexExtent)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MDLVoxelIndexExtent=}', 'ModelIO', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLVoxelArray');
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


	MDLVoxelIndexExtent._imports = $imports;

	// properties
	Object.defineProperties(MDLVoxelIndexExtent.prototype, {
	
		minimumExtent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_minimumExtent) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minimumExtent, 0]);
			},
			enumerable: false
		},
	
		maximumExtent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_maximumExtent) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maximumExtent, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MDLVoxelIndexExtent;
