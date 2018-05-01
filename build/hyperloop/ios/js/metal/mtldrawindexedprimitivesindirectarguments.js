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
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLRenderCommandEncoder.h
 * @class
 */
function MTLDrawIndexedPrimitivesIndirectArguments (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MTLDrawIndexedPrimitivesIndirectArguments)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MTLDrawIndexedPrimitivesIndirectArguments=IIIiI}', 'Metal', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLRenderCommandEncoder');
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


	MTLDrawIndexedPrimitivesIndirectArguments._imports = $imports;

	// properties
	Object.defineProperties(MTLDrawIndexedPrimitivesIndirectArguments.prototype, {
	
		indexCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_indexCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_indexCount, 0]);
			},
			enumerable: false
		},
	
		instanceCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_instanceCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_instanceCount, 1]);
			},
			enumerable: false
		},
	
		indexStart: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_indexStart) {
				$dispatch(this.$native, 'setValue:atIndex:', [_indexStart, 2]);
			},
			enumerable: false
		},
	
		baseVertex: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_baseVertex) {
				$dispatch(this.$native, 'setValue:atIndex:', [_baseVertex, 3]);
			},
			enumerable: false
		},
	
		baseInstance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_baseInstance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_baseInstance, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MTLDrawIndexedPrimitivesIndirectArguments;
