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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLComputeCommandEncoder.h
 * @class
 */
function MTLDispatchThreadgroupsIndirectArguments (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MTLDispatchThreadgroupsIndirectArguments)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MTLDispatchThreadgroupsIndirectArguments=[3I]}', 'Metal', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLComputeCommandEncoder');
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


	MTLDispatchThreadgroupsIndirectArguments._imports = $imports;

	// properties
	Object.defineProperties(MTLDispatchThreadgroupsIndirectArguments.prototype, {
	
		threadgroupsPerGrid: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_threadgroupsPerGrid) {
				$dispatch(this.$native, 'setValue:atIndex:', [_threadgroupsPerGrid, 0]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MTLDispatchThreadgroupsIndirectArguments;
