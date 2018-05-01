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
 * CoreFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFPlugInCOM.h
 * @class
 */
function IUnknownVTbl (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof IUnknownVTbl)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{IUnknownVTbl=^v^?^?^?}', 'CoreFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreFoundation.framework/Headers/CFPlugInCOM');
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


	IUnknownVTbl._imports = $imports;

	// properties
	Object.defineProperties(IUnknownVTbl.prototype, {
	
		_reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (__reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [__reserved, 0]);
			},
			enumerable: false
		},
	
		QueryInterface: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_QueryInterface) {
				$dispatch(this.$native, 'setValue:atIndex:', [_QueryInterface, 1]);
			},
			enumerable: false
		},
	
		AddRef: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_AddRef) {
				$dispatch(this.$native, 'setValue:atIndex:', [_AddRef, 2]);
			},
			enumerable: false
		},
	
		Release: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_Release) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Release, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = IUnknownVTbl;
