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


var SKNode = require('/hyperloop/spritekit/sknode');


/**
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKLabelNode.h
 * @class
 */
function SKLabelNode (pointer) {
	if (!(this instanceof SKLabelNode)) {
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
			class: 'SKLabelNode',
			alloc: true,
			init: 'init'
		});
	}
	SKNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SKLabelNode.prototype = Object.create(SKNode.prototype, {
	constructor: {
		value: SKLabelNode,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKLabelNode, SKNode);

Object.defineProperty(SKLabelNode, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKLabelNode, 'className', {
	value: 'SKLabelNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKLabelNode.prototype, 'className', {
	value: 'SKLabelNode',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKLabelNode.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKLabelNode, 'toString', {
	value: function () {
		return '[class SKLabelNode]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'SKLabelNode',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKLabelNode, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKLabelNode, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SKLabelNode.prototype, 'setText', {
		value: function (_text) {
			this.$private.setText = this.$private.setText || [];
			this.$private.setText.push(_text);
			var result = $dispatch(this.$native, 'setText:', [_text], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SKLabelNode.prototype, {
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
		fontSize: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'fontSize');
			},
		
			set: function (_fontSize) {
				if (!$init) { $initialize(); }
				this.$private.fontSize = _fontSize;
				$dispatch(this.$native, 'setFontSize:', _fontSize);
			},
			enumerable: false
		},
		numberOfLines: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'numberOfLines');
			},
		
			set: function (_numberOfLines) {
				if (!$init) { $initialize(); }
				this.$private.numberOfLines = _numberOfLines;
				$dispatch(this.$native, 'setNumberOfLines:', _numberOfLines);
			},
			enumerable: false
		},
		text: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'text'));
			},
		
			set: function (_text) {
				if (!$init) { $initialize(); }
				this.$private.text = _text;
				$dispatch(this.$native, 'setText:', _text);
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

module.exports = SKLabelNode;
