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


var MDLLight = require('/hyperloop/modelio/mdllight');


/**
 * ModelIO//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/ModelIO.framework/Headers/MDLLight.h
 * @class
 */
function MDLPhysicallyPlausibleLight (pointer) {
	if (!(this instanceof MDLPhysicallyPlausibleLight)) {
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
			class: 'MDLPhysicallyPlausibleLight',
			alloc: true,
			init: 'init'
		});
	}
	MDLLight.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MDLPhysicallyPlausibleLight.prototype = Object.create(MDLLight.prototype, {
	constructor: {
		value: MDLPhysicallyPlausibleLight,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MDLPhysicallyPlausibleLight, MDLLight);

Object.defineProperty(MDLPhysicallyPlausibleLight, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MDLPhysicallyPlausibleLight, 'className', {
	value: 'MDLPhysicallyPlausibleLight',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLPhysicallyPlausibleLight.prototype, 'className', {
	value: 'MDLPhysicallyPlausibleLight',
	enumerable: false,
	writable: true
});

Object.defineProperty(MDLPhysicallyPlausibleLight.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MDLPhysicallyPlausibleLight, 'toString', {
	value: function () {
		return '[class MDLPhysicallyPlausibleLight]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'MDLPhysicallyPlausibleLight',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MDLPhysicallyPlausibleLight, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MDLPhysicallyPlausibleLight, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MDLPhysicallyPlausibleLight.prototype, {
		color: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'color');
			},
		
			set: function (_color) {
				if (!$init) { $initialize(); }
				this.$private.color = _color;
				$dispatch(this.$native, 'setColor:', _color);
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

module.exports = MDLPhysicallyPlausibleLight;
