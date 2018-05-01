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
 * AVFoundation//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioTypes.h
 * @class
 */
function AVAudio3DVectorOrientation (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AVAudio3DVectorOrientation)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$forward = {};
	if (pointer) {
		this.$forward.x = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$forward.y = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$forward.z = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	this.$up = {};
	if (pointer) {
		this.$up.x = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$up.y = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$up.z = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AVAudio3DVectorOrientation={AVAudio3DPoint=fff}{AVAudio3DPoint=fff}}', 'AVFoundation', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/Headers/AVAudioTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$forward, 'x', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$forward, 'y', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$forward, 'z', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$up, 'x', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$up, 'y', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$up, 'z', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.AVAudio3DPoint = require('/hyperloop/avfoundation/avaudio3dpoint');

	AVAudio3DVectorOrientation._imports = $imports;

	// properties
	Object.defineProperties(AVAudio3DVectorOrientation.prototype, {
	
		forward: {
			get: function () {
				return this.$forward;
			},
		
			set: function (_forward) {
				this.$forward.x = _forward.x;
				this.$forward.y = _forward.y;
				this.$forward.z = _forward.z;
			},
			enumerable: false
		},
	
		up: {
			get: function () {
				return this.$up;
			},
		
			set: function (_up) {
				this.$up.x = _up.x;
				this.$up.y = _up.y;
				this.$up.z = _up.z;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AVAudio3DVectorOrientation;
