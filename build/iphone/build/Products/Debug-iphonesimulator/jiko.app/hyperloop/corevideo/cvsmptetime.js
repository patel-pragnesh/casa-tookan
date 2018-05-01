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
 * CoreVideo//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVBase.h
 * @class
 */
function CVSMPTETime (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CVSMPTETime)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CVSMPTETime=ssIIIssss}', 'CoreVideo', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVBase');
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


	CVSMPTETime._imports = $imports;

	// properties
	Object.defineProperties(CVSMPTETime.prototype, {
	
		subframes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_subframes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_subframes, 0]);
			},
			enumerable: false
		},
	
		subframeDivisor: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_subframeDivisor) {
				$dispatch(this.$native, 'setValue:atIndex:', [_subframeDivisor, 1]);
			},
			enumerable: false
		},
	
		counter: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_counter) {
				$dispatch(this.$native, 'setValue:atIndex:', [_counter, 2]);
			},
			enumerable: false
		},
	
		type: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_type) {
				$dispatch(this.$native, 'setValue:atIndex:', [_type, 3]);
			},
			enumerable: false
		},
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 4]);
			},
			enumerable: false
		},
	
		hours: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_hours) {
				$dispatch(this.$native, 'setValue:atIndex:', [_hours, 5]);
			},
			enumerable: false
		},
	
		minutes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_minutes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minutes, 6]);
			},
			enumerable: false
		},
	
		seconds: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_seconds) {
				$dispatch(this.$native, 'setValue:atIndex:', [_seconds, 7]);
			},
			enumerable: false
		},
	
		frames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_frames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_frames, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CVSMPTETime;
