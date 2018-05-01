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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFOutline.h
 * @class
 */
function PDFOutline (pointer) {
	if (!(this instanceof PDFOutline)) {
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
			class: 'PDFOutline',
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
PDFOutline.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PDFOutline,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFOutline, NSObject);

Object.defineProperty(PDFOutline, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFOutline, 'className', {
	value: 'PDFOutline',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFOutline.prototype, 'className', {
	value: 'PDFOutline',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFOutline.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFOutline, 'toString', {
	value: function () {
		return '[class PDFOutline]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.PDFAction = require('/hyperloop/pdfkit/pdfaction');
	$imports.PDFDestination = require('/hyperloop/pdfkit/pdfdestination');
	$imports.PDFDocument = require('/hyperloop/pdfkit/pdfdocument');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'PDFOutline',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFOutline, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFOutline, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PDFOutline.prototype, 'init', {
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

	Object.defineProperty(PDFOutline.prototype, 'setLabel', {
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
	Object.defineProperties(PDFOutline.prototype, {
		action: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFAction($dispatch(this.$native, 'action'));
			},
		
			enumerable: false
		},
		destination: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFDestination($dispatch(this.$native, 'destination'));
			},
		
			set: function (_destination) {
				if (!$init) { $initialize(); }
				this.$private.destination = _destination;
				$dispatch(this.$native, 'setDestination:', _destination);
			},
			enumerable: false
		},
		document: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFDocument($dispatch(this.$native, 'document'));
			},
		
			enumerable: false
		},
		index: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'index');
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
		parent: {
			get: function () {
				if (!$init) { $initialize(); }
				return new this.constructor($dispatch(this.$native, 'parent'));
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

module.exports = PDFOutline;
