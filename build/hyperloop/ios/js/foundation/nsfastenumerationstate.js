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
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSEnumerator.h
 * @class
 */
function NSFastEnumerationState (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof NSFastEnumerationState)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{NSFastEnumerationState=Q^@^Q[5Q]}', 'Foundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSEnumerator');
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


	NSFastEnumerationState._imports = $imports;

	// properties
	Object.defineProperties(NSFastEnumerationState.prototype, {
	
		state: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_state) {
				$dispatch(this.$native, 'setValue:atIndex:', [_state, 0]);
			},
			enumerable: false
		},
	
		itemsPtr: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_itemsPtr) {
				$dispatch(this.$native, 'setValue:atIndex:', [_itemsPtr, 1]);
			},
			enumerable: false
		},
	
		mutationsPtr: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mutationsPtr) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mutationsPtr, 2]);
			},
			enumerable: false
		},
	
		extra: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_extra) {
				$dispatch(this.$native, 'setValue:atIndex:', [_extra, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = NSFastEnumerationState;
