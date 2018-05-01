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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFView.h
 * @class
 */
function PDFView (pointer) {
	if (!(this instanceof PDFView)) {
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
			class: 'PDFView',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PDFView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: PDFView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFView, UIView);

Object.defineProperty(PDFView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFView, 'className', {
	value: 'PDFView',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFView.prototype, 'className', {
	value: 'PDFView',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFView, 'toString', {
	value: function () {
		return '[class PDFView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.PDFDocument = require('/hyperloop/pdfkit/pdfdocument');

	$class = Hyperloop.createProxy({
		class: 'PDFView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PDFView.prototype, 'copy', {
		value: function (_sender) {
			this.$private.copy = this.$private.copy || [];
			this.$private.copy.push(_sender);
			var result = $dispatch(this.$native, 'copy:', [_sender], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PDFView.prototype, 'goBack', {
		value: function (_sender) {
			this.$private.goBack = this.$private.goBack || [];
			this.$private.goBack.push(_sender);
			var result = $dispatch(this.$native, 'goBack:', [_sender], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PDFView.prototype, 'goForward', {
		value: function (_sender) {
			this.$private.goForward = this.$private.goForward || [];
			this.$private.goForward.push(_sender);
			var result = $dispatch(this.$native, 'goForward:', [_sender], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PDFView.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PDFView.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PDFView.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(PDFView.prototype, {
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
			},
			enumerable: false
		},
		canGoBack: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'canGoBack');
			},
		
			enumerable: false
		},
		canGoForward: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'canGoForward');
			},
		
			enumerable: false
		},
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = PDFView;
