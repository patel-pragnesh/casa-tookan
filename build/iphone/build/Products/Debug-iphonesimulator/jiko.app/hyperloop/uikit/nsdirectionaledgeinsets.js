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
function NSDirectionalEdgeInsets (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof NSDirectionalEdgeInsets)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{NSDirectionalEdgeInsets=dddd}', 'UIKit', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIGeometry');
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


	NSDirectionalEdgeInsets._imports = $imports;

	// properties
	Object.defineProperties(NSDirectionalEdgeInsets.prototype, {
	
		top: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_top) {
				$dispatch(this.$native, 'setValue:atIndex:', [_top, 0]);
			},
			enumerable: false
		},
	
		leading: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_leading) {
				$dispatch(this.$native, 'setValue:atIndex:', [_leading, 1]);
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
	
		trailing: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_trailing) {
				$dispatch(this.$native, 'setValue:atIndex:', [_trailing, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = NSDirectionalEdgeInsets;
