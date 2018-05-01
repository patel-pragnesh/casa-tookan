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
 * CoreSpotlight//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreSpotlight.framework/Headers/CSSearchableItemAttributeSet.h
 * @class
 */
function CSSearchableItemAttributeSet (pointer) {
	if (!(this instanceof CSSearchableItemAttributeSet)) {
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
			class: 'CSSearchableItemAttributeSet',
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
CSSearchableItemAttributeSet.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CSSearchableItemAttributeSet,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CSSearchableItemAttributeSet, NSObject);

Object.defineProperty(CSSearchableItemAttributeSet, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CSSearchableItemAttributeSet, 'className', {
	value: 'CSSearchableItemAttributeSet',
	enumerable: false,
	writable: true
});

Object.defineProperty(CSSearchableItemAttributeSet.prototype, 'className', {
	value: 'CSSearchableItemAttributeSet',
	enumerable: false,
	writable: true
});

Object.defineProperty(CSSearchableItemAttributeSet.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CSSearchableItemAttributeSet, 'toString', {
	value: function () {
		return '[class CSSearchableItemAttributeSet]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSArray = require('/hyperloop/foundation/nsarray');
	$imports.NSNumber = require('/hyperloop/foundation/nsnumber');
	$imports.NSDate = require('/hyperloop/foundation/nsdate');

	$class = Hyperloop.createProxy({
		class: 'CSSearchableItemAttributeSet',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CSSearchableItemAttributeSet, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CSSearchableItemAttributeSet, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(CSSearchableItemAttributeSet.prototype, 'isLocal', {
		value: function () {
			var result = $dispatch(this.$native, 'isLocal', null, true);
			if (result === undefined || result === null) return result;
			result = new $imports.NSNumber(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(CSSearchableItemAttributeSet.prototype, 'setVersion', {
		value: function (_version) {
			this.$private.setVersion = this.$private.setVersion || [];
			this.$private.setVersion.push(_version);
			var result = $dispatch(this.$native, 'setVersion:', [_version], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(CSSearchableItemAttributeSet.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		contentType: {
		
		
			set: function (_contentType) {
				if (!$init) { $initialize(); }
				this.$private.contentType = _contentType;
				$dispatch(this.$native, 'setContentType:', _contentType);
			},
			enumerable: false
		},
		coverage: {
		
		
			set: function (_coverage) {
				if (!$init) { $initialize(); }
				this.$private.coverage = _coverage;
				$dispatch(this.$native, 'setCoverage:', _coverage);
			},
			enumerable: false
		},
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'duration'));
			},
		
			set: function (_duration) {
				if (!$init) { $initialize(); }
				this.$private.duration = _duration;
				$dispatch(this.$native, 'setDuration:', _duration);
			},
			enumerable: false
		},
		identifier: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'identifier'));
			},
		
			enumerable: false
		},
		path: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'path'));
			},
		
			set: function (_path) {
				if (!$init) { $initialize(); }
				this.$private.path = _path;
				$dispatch(this.$native, 'setPath:', _path);
			},
			enumerable: false
		},
		speed: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSNumber($dispatch(this.$native, 'speed'));
			},
		
			set: function (_speed) {
				if (!$init) { $initialize(); }
				this.$private.speed = _speed;
				$dispatch(this.$native, 'setSpeed:', _speed);
			},
			enumerable: false
		},
		textContent: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'textContent'));
			},
		
			set: function (_textContent) {
				if (!$init) { $initialize(); }
				this.$private.textContent = _textContent;
				$dispatch(this.$native, 'setTextContent:', _textContent);
			},
			enumerable: false
		},
		timestamp: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDate($dispatch(this.$native, 'timestamp'));
			},
		
			set: function (_timestamp) {
				if (!$init) { $initialize(); }
				this.$private.timestamp = _timestamp;
				$dispatch(this.$native, 'setTimestamp:', _timestamp);
			},
			enumerable: false
		},
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
			},
		
			set: function (_title) {
				if (!$init) { $initialize(); }
				this.$private.title = _title;
				$dispatch(this.$native, 'setTitle:', _title);
			},
			enumerable: false
		},
		version: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'version'));
			},
		
			set: function (_version) {
				if (!$init) { $initialize(); }
				this.$private.version = _version;
				$dispatch(this.$native, 'setVersion:', _version);
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

module.exports = CSSearchableItemAttributeSet;
