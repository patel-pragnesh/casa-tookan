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


var MSMessageLayout = require('/hyperloop/messages/msmessagelayout');


/**
 * Messages//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Messages.framework/Headers/MSMessageTemplateLayout.h
 * @class
 */
function MSMessageTemplateLayout (pointer) {
	if (!(this instanceof MSMessageTemplateLayout)) {
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
			class: 'MSMessageTemplateLayout',
			alloc: true,
			init: 'init'
		});
	}
	MSMessageLayout.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MSMessageTemplateLayout.prototype = Object.create(MSMessageLayout.prototype, {
	constructor: {
		value: MSMessageTemplateLayout,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MSMessageTemplateLayout, MSMessageLayout);

Object.defineProperty(MSMessageTemplateLayout, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MSMessageTemplateLayout, 'className', {
	value: 'MSMessageTemplateLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessageTemplateLayout.prototype, 'className', {
	value: 'MSMessageTemplateLayout',
	enumerable: false,
	writable: true
});

Object.defineProperty(MSMessageTemplateLayout.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MSMessageTemplateLayout, 'toString', {
	value: function () {
		return '[class MSMessageTemplateLayout]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIImage = require('/hyperloop/uikit/uiimage');

	$class = Hyperloop.createProxy({
		class: 'MSMessageTemplateLayout',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MSMessageTemplateLayout, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MSMessageTemplateLayout, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MSMessageTemplateLayout.prototype, {
		image: {
		
		
			set: function (_image) {
				if (!$init) { $initialize(); }
				this.$private.image = _image;
				$dispatch(this.$native, 'setImage:', _image);
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

module.exports = MSMessageTemplateLayout;
