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
 * CoreMedia//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMTimeRange.h
 * @class
 */
function CMTimeRange (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMTimeRange)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$start = {};
	if (pointer) {
		this.$start.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$start.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$start.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$start.f3 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	this.$duration = {};
	if (pointer) {
		this.$duration.f0 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$duration.f1 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$duration.f2 = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$duration.f3 = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMTimeRange={?=qiIq}{?=qiIq}}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMTimeRange');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$start, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$start, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$start, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$start, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$duration, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$duration, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$duration, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$duration, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
}

function $initialize () {
	$imports = {};


	CMTimeRange._imports = $imports;

	// properties
	Object.defineProperties(CMTimeRange.prototype, {
	
		start: {
			get: function () {
				return this.$start;
			},
		
			set: function (_start) {
				this.$start.f0 = _start.f0;
				this.$start.f1 = _start.f1;
				this.$start.f2 = _start.f2;
				this.$start.f3 = _start.f3;
			},
			enumerable: false
		},
	
		duration: {
			get: function () {
				return this.$duration;
			},
		
			set: function (_duration) {
				this.$duration.f0 = _duration.f0;
				this.$duration.f1 = _duration.f1;
				this.$duration.f2 = _duration.f2;
				this.$duration.f3 = _duration.f3;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMTimeRange;
