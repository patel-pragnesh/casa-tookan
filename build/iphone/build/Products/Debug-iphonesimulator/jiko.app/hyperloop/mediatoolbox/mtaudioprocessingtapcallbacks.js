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
 * MediaToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaToolbox.framework/Headers/MTAudioProcessingTap.h
 * @class
 */
function MTAudioProcessingTapCallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MTAudioProcessingTapCallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MTAudioProcessingTapCallbacks=i^v^?^?^?^?^?}', 'MediaToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MediaToolbox.framework/Headers/MTAudioProcessingTap');
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


	MTAudioProcessingTapCallbacks._imports = $imports;

	// properties
	Object.defineProperties(MTAudioProcessingTapCallbacks.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		clientInfo: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_clientInfo) {
				$dispatch(this.$native, 'setValue:atIndex:', [_clientInfo, 1]);
			},
			enumerable: false
		},
	
		init: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_init) {
				$dispatch(this.$native, 'setValue:atIndex:', [_init, 2]);
			},
			enumerable: false
		},
	
		finalize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_finalize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_finalize, 3]);
			},
			enumerable: false
		},
	
		prepare: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_prepare) {
				$dispatch(this.$native, 'setValue:atIndex:', [_prepare, 4]);
			},
			enumerable: false
		},
	
		unprepare: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_unprepare) {
				$dispatch(this.$native, 'setValue:atIndex:', [_unprepare, 5]);
			},
			enumerable: false
		},
	
		process: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_process) {
				$dispatch(this.$native, 'setValue:atIndex:', [_process, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MTAudioProcessingTapCallbacks;
