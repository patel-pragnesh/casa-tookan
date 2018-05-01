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
 * CoreMedia//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMSampleBuffer.h
 * @class
 */
function CMSampleTimingInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMSampleTimingInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$duration = {};
	if (pointer) {
		this.$duration.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$duration.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$duration.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$duration.f3 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	this.$presentationTimeStamp = {};
	if (pointer) {
		this.$presentationTimeStamp.f0 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$presentationTimeStamp.f1 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$presentationTimeStamp.f2 = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$presentationTimeStamp.f3 = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	this.$decodeTimeStamp = {};
	if (pointer) {
		this.$decodeTimeStamp.f0 = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (pointer) {
		this.$decodeTimeStamp.f1 = $dispatch(pointer, 'valueAtIndex:', 9);
	}
	if (pointer) {
		this.$decodeTimeStamp.f2 = $dispatch(pointer, 'valueAtIndex:', 10);
	}
	if (pointer) {
		this.$decodeTimeStamp.f3 = $dispatch(pointer, 'valueAtIndex:', 11);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMSampleTimingInfo={?=qiIq}{?=qiIq}{?=qiIq}}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMSampleBuffer');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$duration, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$duration, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$duration, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$duration, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$presentationTimeStamp, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$presentationTimeStamp, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$presentationTimeStamp, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$presentationTimeStamp, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$decodeTimeStamp, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
	Object.defineProperty(this.$decodeTimeStamp, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 9]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 9);
		},
	});
	Object.defineProperty(this.$decodeTimeStamp, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 10]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 10);
		},
	});
	Object.defineProperty(this.$decodeTimeStamp, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 11]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 11);
		},
	});
}

function $initialize () {
	$imports = {};


	CMSampleTimingInfo._imports = $imports;

	// properties
	Object.defineProperties(CMSampleTimingInfo.prototype, {
	
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
		},
	
		presentationTimeStamp: {
			get: function () {
				return this.$presentationTimeStamp;
			},
		
			set: function (_presentationTimeStamp) {
				this.$presentationTimeStamp.f0 = _presentationTimeStamp.f0;
				this.$presentationTimeStamp.f1 = _presentationTimeStamp.f1;
				this.$presentationTimeStamp.f2 = _presentationTimeStamp.f2;
				this.$presentationTimeStamp.f3 = _presentationTimeStamp.f3;
			},
			enumerable: false
		},
	
		decodeTimeStamp: {
			get: function () {
				return this.$decodeTimeStamp;
			},
		
			set: function (_decodeTimeStamp) {
				this.$decodeTimeStamp.f0 = _decodeTimeStamp.f0;
				this.$decodeTimeStamp.f1 = _decodeTimeStamp.f1;
				this.$decodeTimeStamp.f2 = _decodeTimeStamp.f2;
				this.$decodeTimeStamp.f3 = _decodeTimeStamp.f3;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMSampleTimingInfo;
