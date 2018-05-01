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
function CVTimeStamp (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CVTimeStamp)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$smpteTime = {};
	if (pointer) {
		this.$smpteTime.subframes = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$smpteTime.subframeDivisor = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$smpteTime.counter = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$smpteTime.type = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$smpteTime.flags = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$smpteTime.hours = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$smpteTime.minutes = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$smpteTime.seconds = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (pointer) {
		this.$smpteTime.frames = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CVTimeStamp=IiqQdq{CVSMPTETime=ssIIIssss}QQ}', 'CoreVideo', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVBase');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$smpteTime, 'subframes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$smpteTime, 'subframeDivisor', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$smpteTime, 'counter', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$smpteTime, 'type', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$smpteTime, 'flags', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$smpteTime, 'hours', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$smpteTime, 'minutes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$smpteTime, 'seconds', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$smpteTime, 'frames', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.CVSMPTETime = require('/hyperloop/corevideo/cvsmptetime');

	CVTimeStamp._imports = $imports;

	// properties
	Object.defineProperties(CVTimeStamp.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		videoTimeScale: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_videoTimeScale) {
				$dispatch(this.$native, 'setValue:atIndex:', [_videoTimeScale, 1]);
			},
			enumerable: false
		},
	
		videoTime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_videoTime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_videoTime, 2]);
			},
			enumerable: false
		},
	
		hostTime: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_hostTime) {
				$dispatch(this.$native, 'setValue:atIndex:', [_hostTime, 3]);
			},
			enumerable: false
		},
	
		rateScalar: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_rateScalar) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rateScalar, 4]);
			},
			enumerable: false
		},
	
		videoRefreshPeriod: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_videoRefreshPeriod) {
				$dispatch(this.$native, 'setValue:atIndex:', [_videoRefreshPeriod, 5]);
			},
			enumerable: false
		},
	
		smpteTime: {
			get: function () {
				return this.$smpteTime;
			},
		
			set: function (_smpteTime) {
				this.$smpteTime.subframes = _smpteTime.subframes;
				this.$smpteTime.subframeDivisor = _smpteTime.subframeDivisor;
				this.$smpteTime.counter = _smpteTime.counter;
				this.$smpteTime.type = _smpteTime.type;
				this.$smpteTime.flags = _smpteTime.flags;
				this.$smpteTime.hours = _smpteTime.hours;
				this.$smpteTime.minutes = _smpteTime.minutes;
				this.$smpteTime.seconds = _smpteTime.seconds;
				this.$smpteTime.frames = _smpteTime.frames;
			},
			enumerable: false
		},
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 7]);
			},
			enumerable: false
		},
	
		reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reserved, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CVTimeStamp;
