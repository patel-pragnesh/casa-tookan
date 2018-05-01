/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports,
	$class;


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Headers/MPSCNNNeuron.h
 * @class
 */
function MPSNNNeuronDescriptor (pointer) {
	if (!(this instanceof MPSNNNeuronDescriptor)) {
		throw new TypeError('Cannot instantiate a class by calling it as a function');
	}

	if (!$init) {
		$initialize();
	}

	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer.$native ? pointer.$native : pointer);
		if (oldWrapper) {
			if (oldWrapper.__proto__ !== this.__proto__) {
				oldWrapper = Object.setPrototypeOf(oldWrapper, this.__proto__);
			}
			return oldWrapper;
		}
	}

	if (!pointer) {
		pointer = Hyperloop.createProxy({
			class: 'MPSNNNeuronDescriptor',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MPSNNNeuronDescriptor.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MPSNNNeuronDescriptor,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MPSNNNeuronDescriptor, NSObject);

Object.defineProperty(MPSNNNeuronDescriptor, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MPSNNNeuronDescriptor, 'className', {
	value: 'MPSNNNeuronDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNNeuronDescriptor.prototype, 'className', {
	value: 'MPSNNNeuronDescriptor',
	enumerable: false,
	writable: true
});

Object.defineProperty(MPSNNNeuronDescriptor.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MPSNNNeuronDescriptor, 'toString', {
	value: function () {
		return '[class MPSNNNeuronDescriptor]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSData = require('/hyperloop/foundation/nsdata');

	$class = Hyperloop.createProxy({
		class: 'MPSNNNeuronDescriptor',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MPSNNNeuronDescriptor, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MPSNNNeuronDescriptor, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(MPSNNNeuronDescriptor.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(MPSNNNeuronDescriptor.prototype, 'setData', {
		value: function (_data) {
			this.$private.setData = this.$private.setData || [];
			this.$private.setData.push(_data);
			var result = $dispatch(this.$native, 'setData:', [_data], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(MPSNNNeuronDescriptor.prototype, {
		a: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'a');
			},
		
			set: function (_a) {
				if (!$init) { $initialize(); }
				this.$private.a = _a;
				$dispatch(this.$native, 'setA:', _a);
			},
			enumerable: false
		},
		b: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'b');
			},
		
			set: function (_b) {
				if (!$init) { $initialize(); }
				this.$private.b = _b;
				$dispatch(this.$native, 'setB:', _b);
			},
			enumerable: false
		},
		c: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'c');
			},
		
			set: function (_c) {
				if (!$init) { $initialize(); }
				this.$private.c = _c;
				$dispatch(this.$native, 'setC:', _c);
			},
			enumerable: false
		},
		data: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSData($dispatch(this.$native, 'data'));
			},
		
			set: function (_data) {
				if (!$init) { $initialize(); }
				this.$private.data = _data;
				$dispatch(this.$native, 'setData:', _data);
			},
			enumerable: false
		}
	});

	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = MPSNNNeuronDescriptor;
