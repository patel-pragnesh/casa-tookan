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
function JSClassDefinition (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof JSClassDefinition)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{JSClassDefinition=iIr*^{OpaqueJSClass=}r^{?=*^?^?I}r^{?=*^?I}^?^?^?^?^?^?^?^?^?^?^?}', 'JavaScriptCore', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/JavaScriptCore.framework/Headers/JSObjectRef');
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


	JSClassDefinition._imports = $imports;

	// properties
	Object.defineProperties(JSClassDefinition.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		attributes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_attributes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_attributes, 1]);
			},
			enumerable: false
		},
	
		className: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_className) {
				$dispatch(this.$native, 'setValue:atIndex:', [_className, 2]);
			},
			enumerable: false
		},
	
		parentClass: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_parentClass) {
				$dispatch(this.$native, 'setValue:atIndex:', [_parentClass, 3]);
			},
			enumerable: false
		},
	
		staticValues: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_staticValues) {
				$dispatch(this.$native, 'setValue:atIndex:', [_staticValues, 4]);
			},
			enumerable: false
		},
	
		staticFunctions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_staticFunctions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_staticFunctions, 5]);
			},
			enumerable: false
		},
	
		initialize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_initialize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_initialize, 6]);
			},
			enumerable: false
		},
	
		finalize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_finalize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_finalize, 7]);
			},
			enumerable: false
		},
	
		hasProperty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_hasProperty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_hasProperty, 8]);
			},
			enumerable: false
		},
	
		getProperty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_getProperty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getProperty, 9]);
			},
			enumerable: false
		},
	
		setProperty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 10);
			},
		
			set: function (_setProperty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_setProperty, 10]);
			},
			enumerable: false
		},
	
		deleteProperty: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 11);
			},
		
			set: function (_deleteProperty) {
				$dispatch(this.$native, 'setValue:atIndex:', [_deleteProperty, 11]);
			},
			enumerable: false
		},
	
		getPropertyNames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 12);
			},
		
			set: function (_getPropertyNames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getPropertyNames, 12]);
			},
			enumerable: false
		},
	
		callAsFunction: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 13);
			},
		
			set: function (_callAsFunction) {
				$dispatch(this.$native, 'setValue:atIndex:', [_callAsFunction, 13]);
			},
			enumerable: false
		},
	
		callAsConstructor: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 14);
			},
		
			set: function (_callAsConstructor) {
				$dispatch(this.$native, 'setValue:atIndex:', [_callAsConstructor, 14]);
			},
			enumerable: false
		},
	
		hasInstance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 15);
			},
		
			set: function (_hasInstance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_hasInstance, 15]);
			},
			enumerable: false
		},
	
		convertToType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 16);
			},
		
			set: function (_convertToType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_convertToType, 16]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = JSClassDefinition;
