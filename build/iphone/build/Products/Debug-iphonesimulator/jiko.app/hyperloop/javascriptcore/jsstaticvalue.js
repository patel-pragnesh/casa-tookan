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
 * JavaScriptCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/JavaScriptCore.framework/Headers/JSObjectRef.h
 * @class
 */
function JSStaticValue (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JSStaticValue)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JSStaticValue=r*^?^?I}', 'JavaScriptCore', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/JavaScriptCore.framework/Headers/JSObjectRef');
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


	JSStaticValue._imports = $imports;

	// properties
	Object.defineProperties(JSStaticValue.prototype, {
	
		name: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_name) {
				$dispatch(this.$native, 'setValue:atIndex:', [_name, 0]);
			},
			enumerable: false
		},
	
		getProperty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_getProperty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getProperty, 1]);
			},
			enumerable: false
		},
	
		setProperty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_setProperty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_setProperty, 2]);
			},
			enumerable: false
		},
	
		attributes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_attributes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_attributes, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JSStaticValue;
