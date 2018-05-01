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
function CMTimeMapping (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CMTimeMapping)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$source = {};
	if (pointer) {
		this.$source.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$source.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$source.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$source.f3 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$source.f4 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$source.f5 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$source.f6 = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$source.f7 = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	this.$target = {};
	if (pointer) {
		this.$target.f0 = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (pointer) {
		this.$target.f1 = $dispatch(pointer, 'valueAtIndex:', 9);
	}
	if (pointer) {
		this.$target.f2 = $dispatch(pointer, 'valueAtIndex:', 10);
	}
	if (pointer) {
		this.$target.f3 = $dispatch(pointer, 'valueAtIndex:', 11);
	}
	if (pointer) {
		this.$target.f4 = $dispatch(pointer, 'valueAtIndex:', 12);
	}
	if (pointer) {
		this.$target.f5 = $dispatch(pointer, 'valueAtIndex:', 13);
	}
	if (pointer) {
		this.$target.f6 = $dispatch(pointer, 'valueAtIndex:', 14);
	}
	if (pointer) {
		this.$target.f7 = $dispatch(pointer, 'valueAtIndex:', 15);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CMTimeMapping={?={?=qiIq}{?=qiIq}}{?={?=qiIq}{?=qiIq}}}', 'CoreMedia', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreMedia.framework/Headers/CMTimeRange');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$source, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$source, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$source, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$source, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$source, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$source, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$source, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$source, 'f7', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$target, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
	Object.defineProperty(this.$target, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 9]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 9);
		},
	});
	Object.defineProperty(this.$target, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 10]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 10);
		},
	});
	Object.defineProperty(this.$target, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 11]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 11);
		},
	});
	Object.defineProperty(this.$target, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 12]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 12);
		},
	});
	Object.defineProperty(this.$target, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 13]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 13);
		},
	});
	Object.defineProperty(this.$target, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 14]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 14);
		},
	});
	Object.defineProperty(this.$target, 'f7', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 15]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 15);
		},
	});
}

function $initialize () {
	$imports = {};


	CMTimeMapping._imports = $imports;

	// properties
	Object.defineProperties(CMTimeMapping.prototype, {
	
		source: {
			get: function () {
				return this.$source;
			},
		
			set: function (_source) {
				this.$source.f0 = _source.f0;
				this.$source.f1 = _source.f1;
				this.$source.f2 = _source.f2;
				this.$source.f3 = _source.f3;
				this.$source.f4 = _source.f4;
				this.$source.f5 = _source.f5;
				this.$source.f6 = _source.f6;
				this.$source.f7 = _source.f7;
			},
			enumerable: false
		},
	
		target: {
			get: function () {
				return this.$target;
			},
		
			set: function (_target) {
				this.$target.f0 = _target.f0;
				this.$target.f1 = _target.f1;
				this.$target.f2 = _target.f2;
				this.$target.f3 = _target.f3;
				this.$target.f4 = _target.f4;
				this.$target.f5 = _target.f5;
				this.$target.f6 = _target.f6;
				this.$target.f7 = _target.f7;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CMTimeMapping;
