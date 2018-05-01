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
 * CoreMedia//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMBufferQueue.h
 * @class
 */
function CMBufferCallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMBufferCallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMBufferCallbacks=I^v^?^?^?^?^?r^{__CFString=}^?}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMBufferQueue');
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


	CMBufferCallbacks._imports = $imports;

	// properties
	Object.defineProperties(CMBufferCallbacks.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		refcon: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_refcon) {
				$dispatch(this.$native, 'setValue:atIndex:', [_refcon, 1]);
			},
			enumerable: false
		},
	
		getDecodeTimeStamp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_getDecodeTimeStamp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getDecodeTimeStamp, 2]);
			},
			enumerable: false
		},
	
		getPresentationTimeStamp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_getPresentationTimeStamp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getPresentationTimeStamp, 3]);
			},
			enumerable: false
		},
	
		getDuration: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_getDuration) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getDuration, 4]);
			},
			enumerable: false
		},
	
		isDataReady: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_isDataReady) {
				$dispatch(this.$native, 'setValue:atIndex:', [_isDataReady, 5]);
			},
			enumerable: false
		},
	
		compare: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_compare) {
				$dispatch(this.$native, 'setValue:atIndex:', [_compare, 6]);
			},
			enumerable: false
		},
	
		dataBecameReadyNotification: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_dataBecameReadyNotification) {
				$dispatch(this.$native, 'setValue:atIndex:', [_dataBecameReadyNotification, 7]);
			},
			enumerable: false
		},
	
		getSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_getSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getSize, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMBufferCallbacks;
