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
function JustPCDecompositionAction (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JustPCDecompositionAction)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JustPCDecompositionAction=iiSS[1S]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	JustPCDecompositionAction._imports = $imports;

	// properties
	Object.defineProperties(JustPCDecompositionAction.prototype, {
	
		lowerLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_lowerLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_lowerLimit, 0]);
			},
			enumerable: false
		},
	
		upperLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_upperLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_upperLimit, 1]);
			},
			enumerable: false
		},
	
		order: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_order) {
				$dispatch(this.$native, 'setValue:atIndex:', [_order, 2]);
			},
			enumerable: false
		},
	
		count: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_count) {
				$dispatch(this.$native, 'setValue:atIndex:', [_count, 3]);
			},
			enumerable: false
		},
	
		glyphs: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_glyphs) {
				$dispatch(this.$native, 'setValue:atIndex:', [_glyphs, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JustPCDecompositionAction;
