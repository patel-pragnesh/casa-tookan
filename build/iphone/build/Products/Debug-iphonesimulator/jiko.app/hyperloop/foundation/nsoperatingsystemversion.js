/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports;

/**
 * Foundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSProcessInfo.h
 * @class
 */
function NSOperatingSystemVersion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof NSOperatingSystemVersion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{NSOperatingSystemVersion=qqq}', 'Foundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Foundation.framework/Headers/NSProcessInfo');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	
}

function $initialize () {
	$imports = {};


	NSOperatingSystemVersion._imports = $imports;

	// properties
	Object.defineProperties(NSOperatingSystemVersion.prototype, {
	
		majorVersion: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_majorVersion) {
				$dispatch(this.$native, 'setValue:atIndex:', [_majorVersion, 0]);
			},
			enumerable: false
		},
	
		minorVersion: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_minorVersion) {
				$dispatch(this.$native, 'setValue:atIndex:', [_minorVersion, 1]);
			},
			enumerable: false
		},
	
		patchVersion: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_patchVersion) {
				$dispatch(this.$native, 'setValue:atIndex:', [_patchVersion, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = NSOperatingSystemVersion;
