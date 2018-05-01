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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIGeometry.h
 * @class
 */
function UIEdgeInsets (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof UIEdgeInsets)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{UIEdgeInsets=dddd}', 'UIKit', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIGeometry');
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


	UIEdgeInsets._imports = $imports;

	// properties
	Object.defineProperties(UIEdgeInsets.prototype, {
	
		top: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_top) {
				$dispatch(this.$native, 'setValue:atIndex:', [_top, 0]);
			},
			enumerable: false
		},
	
		left: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_left) {
				$dispatch(this.$native, 'setValue:atIndex:', [_left, 1]);
			},
			enumerable: false
		},
	
		bottom: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_bottom) {
				$dispatch(this.$native, 'setValue:atIndex:', [_bottom, 2]);
			},
			enumerable: false
		},
	
		right: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_right) {
				$dispatch(this.$native, 'setValue:atIndex:', [_right, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = UIEdgeInsets;
