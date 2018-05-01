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
function KerxCoordinateAction (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof KerxCoordinateAction)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{KerxCoordinateAction=SSSS}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	KerxCoordinateAction._imports = $imports;

	// properties
	Object.defineProperties(KerxCoordinateAction.prototype, {
	
		markX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_markX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_markX, 0]);
			},
			enumerable: false
		},
	
		markY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_markY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_markY, 1]);
			},
			enumerable: false
		},
	
		currX: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_currX) {
				$dispatch(this.$native, 'setValue:atIndex:', [_currX, 2]);
			},
			enumerable: false
		},
	
		currY: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_currY) {
				$dispatch(this.$native, 'setValue:atIndex:', [_currY, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = KerxCoordinateAction;
