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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFAnnotation.h
 * @class
 */
function PDFAnnotation (pointer) {
	if (!(this instanceof PDFAnnotation)) {
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
			class: 'PDFAnnotation',
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
PDFAnnotation.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PDFAnnotation,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFAnnotation, NSObject);

Object.defineProperty(PDFAnnotation, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFAnnotation, 'className', {
	value: 'PDFAnnotation',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFAnnotation.prototype, 'className', {
	value: 'PDFAnnotation',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFAnnotation.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFAnnotation, 'toString', {
	value: function () {
		return '[class PDFAnnotation]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.PDFAction = require('/hyperloop/pdfkit/pdfaction');
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.PDFDestination = require('/hyperloop/pdfkit/pdfdestination');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.UIFont = require('/hyperloop/uikit/uifont');
	$imports.PDFPage = require('/hyperloop/pdfkit/pdfpage');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');

	$class = Hyperloop.createProxy({
		class: 'PDFAnnotation',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFAnnotation, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFAnnotation, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PDFAnnotation.prototype, 'setPage', {
		value: function (_page) {
			this.$private.setPage = this.$private.setPage || [];
			this.$private.setPage.push(_page);
			var result = $dispatch(this.$native, 'setPage:', [_page], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(PDFAnnotation.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		action: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFAction($dispatch(this.$native, 'action'));
			},
		
			enumerable: false
		},
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
			},
			enumerable: false
		},
		color: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIColor($dispatch(this.$native, 'color'));
			},
		
			set: function (_color) {
				if (!$init) { $initialize(); }
				this.$private.color = _color;
				$dispatch(this.$native, 'setColor:', _color);
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
		fieldName: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'fieldName'));
			},
		
			enumerable: false
		},
		font: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIFont($dispatch(this.$native, 'font'));
			},
		
			set: function (_font) {
				if (!$init) { $initialize(); }
				this.$private.font = _font;
				$dispatch(this.$native, 'setFont:', _font);
			},
			enumerable: false
		},
		multiline: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'multiline');
			},
		
			enumerable: false
		},
		open: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'open');
			},
		
			set: function (_open) {
				if (!$init) { $initialize(); }
				this.$private.open = _open;
				$dispatch(this.$native, 'setOpen:', _open);
			},
			enumerable: false
		},
		page: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFPage($dispatch(this.$native, 'page'));
			},
		
			enumerable: false
		},
		paths: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'paths'));
			},
		
			enumerable: false
		},
		type: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'type'));
			},
		
			set: function (_type) {
				if (!$init) { $initialize(); }
				this.$private.type = _type;
				$dispatch(this.$native, 'setType:', _type);
			},
			enumerable: false
		},
		values: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSArray($dispatch(this.$native, 'values'));
			},
		
			set: function (_values) {
				if (!$init) { $initialize(); }
				this.$private.values = _values;
				$dispatch(this.$native, 'setValues:', _values);
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

module.exports = PDFAnnotation;
