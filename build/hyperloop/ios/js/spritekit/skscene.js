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


var SKEffectNode = require('/hyperloop/spritekit/skeffectnode');


/**
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKScene.h
 * @class
 */
function SKScene (pointer) {
	if (!(this instanceof SKScene)) {
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
			class: 'SKScene',
			alloc: true,
			init: 'init'
		});
	}
	SKEffectNode.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
SKScene.prototype = Object.create(SKEffectNode.prototype, {
	constructor: {
		value: SKScene,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKScene, SKEffectNode);

Object.defineProperty(SKScene, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKScene, 'className', {
	value: 'SKScene',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKScene.prototype, 'className', {
	value: 'SKScene',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKScene.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKScene, 'toString', {
	value: function () {
		return '[class SKScene]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.SKNode = require('/hyperloop/spritekit/sknode');
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');
	$imports.SKView = require('/hyperloop/spritekit/skview');
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');

	$class = Hyperloop.createProxy({
		class: 'SKScene',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKScene, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKScene, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(SKScene.prototype, 'convertPointToView', {
		value: function (_point) {
			this.$private.convertPointToView = this.$private.convertPointToView || [];
			this.$private.convertPointToView.push(_point);
			var result = $dispatch(this.$native, 'convertPointToView:', [_point], true);
			if (result === undefined || result === null) return result;
			result = new $imports.CGPoint(result);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SKScene.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SKScene.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(SKScene.prototype, 'self', {
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

	Object.defineProperty(SKScene.prototype, 'update', {
		value: function (_currentTime) {
			this.$private.update = this.$private.update || [];
			this.$private.update.push(_currentTime);
			var result = $dispatch(this.$native, 'update:', [_currentTime], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(SKScene.prototype, {
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
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
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		listener: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SKNode($dispatch(this.$native, 'listener'));
			},
		
			set: function (_listener) {
				if (!$init) { $initialize(); }
				this.$private.listener = _listener;
				$dispatch(this.$native, 'setListener:', _listener);
			},
			enumerable: false
		},
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGSize($dispatch(this.$native, 'size'));
			},
		
			set: function (_size) {
				if (!$init) { $initialize(); }
				this.$private.size = _size;
				$dispatch(this.$native, 'setSize:', _size);
			},
			enumerable: false
		},
		view: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.SKView($dispatch(this.$native, 'view'));
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

module.exports = SKScene;
