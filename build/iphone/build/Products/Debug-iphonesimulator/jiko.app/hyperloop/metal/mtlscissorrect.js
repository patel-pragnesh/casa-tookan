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
function MTLScissorRect (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MTLScissorRect)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MTLScissorRect=QQQQ}', 'Metal', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLRenderCommandEncoder');
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


	MTLScissorRect._imports = $imports;

	// properties
	Object.defineProperties(MTLScissorRect.prototype, {
	
		x: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_x) {
				$dispatch(this.$native, 'setValue:atIndex:', [_x, 0]);
			},
			enumerable: false
		},
	
		y: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_y) {
				$dispatch(this.$native, 'setValue:atIndex:', [_y, 1]);
			},
			enumerable: false
		},
	
		width: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_width) {
				$dispatch(this.$native, 'setValue:atIndex:', [_width, 2]);
			},
			enumerable: false
		},
	
		height: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_height) {
				$dispatch(this.$native, 'setValue:atIndex:', [_height, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MTLScissorRect;
