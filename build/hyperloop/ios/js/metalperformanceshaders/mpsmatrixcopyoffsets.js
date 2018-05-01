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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixCombination.h
 * @class
 */
function MPSMatrixCopyOffsets (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSMatrixCopyOffsets)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSMatrixCopyOffsets=IIII}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixCombination');
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


	MPSMatrixCopyOffsets._imports = $imports;

	// properties
	Object.defineProperties(MPSMatrixCopyOffsets.prototype, {
	
		sourceRowOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_sourceRowOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sourceRowOffset, 0]);
			},
			enumerable: false
		},
	
		sourceColumnOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_sourceColumnOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sourceColumnOffset, 1]);
			},
			enumerable: false
		},
	
		destinationRowOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_destinationRowOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destinationRowOffset, 2]);
			},
			enumerable: false
		},
	
		destinationColumnOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_destinationColumnOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destinationColumnOffset, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSMatrixCopyOffsets;
