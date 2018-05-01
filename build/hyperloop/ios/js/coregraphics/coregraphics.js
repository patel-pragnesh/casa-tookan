/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$class,
	$imports;

/**
 * CoreGraphics//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGAffineTransform.h
 * @class
 */
function CoreGraphics () {
	throw new TypeError('Cannot instantiate CoreGraphics');
}

CoreGraphics.toString = function() {
	return '[class CoreGraphics]';
};

// class methods

Object.defineProperty(CoreGraphics, 'CGRectMake', {
	value: function (_x, _y, _width, _height) {
		if (!$init) { $initialize(); }
			var result = $dispatch($class, 'CGRectMake:', [[_x, _y, _width, _height]], false);
			if (result === undefined || result === null) return result;
			result = new $imports.CGRect(result);
			return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.CGRect = require('/hyperloop/coregraphics/cgrect');

	$class = Hyperloop.createProxy({
		class: 'HyperloopCoreGraphics',
		alloc: false,
		init: 'class'
	});

	CoreGraphics._class = $class;
	CoreGraphics._imports = $imports;

	$init = true;
}



module.exports = CoreGraphics;
