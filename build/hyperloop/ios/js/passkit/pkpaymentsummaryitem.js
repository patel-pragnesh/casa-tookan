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
 * PassKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PassKit.framework/Headers/PKPaymentRequest.h
 * @class
 */
function PKPaymentSummaryItem (pointer) {
	if (!(this instanceof PKPaymentSummaryItem)) {
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
			class: 'PKPaymentSummaryItem',
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
PKPaymentSummaryItem.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PKPaymentSummaryItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PKPaymentSummaryItem, NSObject);

Object.defineProperty(PKPaymentSummaryItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PKPaymentSummaryItem, 'className', {
	value: 'PKPaymentSummaryItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentSummaryItem.prototype, 'className', {
	value: 'PKPaymentSummaryItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(PKPaymentSummaryItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PKPaymentSummaryItem, 'toString', {
	value: function () {
		return '[class PKPaymentSummaryItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSDecimalNumber = require('/hyperloop/foundation/nsdecimalnumber');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'PKPaymentSummaryItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PKPaymentSummaryItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PKPaymentSummaryItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PKPaymentSummaryItem.prototype, 'setLabel', {
		value: function (_label) {
			this.$private.setLabel = this.$private.setLabel || [];
			this.$private.setLabel.push(_label);
			var result = $dispatch(this.$native, 'setLabel:', [_label], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(PKPaymentSummaryItem.prototype, {
		amount: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDecimalNumber($dispatch(this.$native, 'amount'));
			},
		
			set: function (_amount) {
				if (!$init) { $initialize(); }
				this.$private.amount = _amount;
				$dispatch(this.$native, 'setAmount:', _amount);
			},
			enumerable: false
		},
		label: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'label'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'type');
			},
		
			set: function (_type) {
				if (!$init) { $initialize(); }
				this.$private.type = _type;
				$dispatch(this.$native, 'setType:', _type);
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

module.exports = PKPaymentSummaryItem;
