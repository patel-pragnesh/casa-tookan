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
 * CoreVideo//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVPixelBuffer.h
 * @class
 */
function CVPlanarPixelBufferInfo_YCbCrBiPlanar (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CVPlanarPixelBufferInfo_YCbCrBiPlanar)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$componentInfoY = {};
	if (pointer) {
		this.$componentInfoY.offset = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$componentInfoY.rowBytes = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	this.$componentInfoCbCr = {};
	if (pointer) {
		this.$componentInfoCbCr.offset = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$componentInfoCbCr.rowBytes = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CVPlanarPixelBufferInfo_YCbCrBiPlanar={CVPlanarComponentInfo=iI}{CVPlanarComponentInfo=iI}}', 'CoreVideo', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVPixelBuffer');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$componentInfoY, 'offset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$componentInfoY, 'rowBytes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$componentInfoCbCr, 'offset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$componentInfoCbCr, 'rowBytes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.CVPlanarComponentInfo = require('/hyperloop/corevideo/cvplanarcomponentinfo');

	CVPlanarPixelBufferInfo_YCbCrBiPlanar._imports = $imports;

	// properties
	Object.defineProperties(CVPlanarPixelBufferInfo_YCbCrBiPlanar.prototype, {
	
		componentInfoY: {
			get: function () {
				return this.$componentInfoY;
			},
		
			set: function (_componentInfoY) {
				this.$componentInfoY.offset = _componentInfoY.offset;
				this.$componentInfoY.rowBytes = _componentInfoY.rowBytes;
			},
			enumerable: false
		},
	
		componentInfoCbCr: {
			get: function () {
				return this.$componentInfoCbCr;
			},
		
			set: function (_componentInfoCbCr) {
				this.$componentInfoCbCr.offset = _componentInfoCbCr.offset;
				this.$componentInfoCbCr.rowBytes = _componentInfoCbCr.rowBytes;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CVPlanarPixelBufferInfo_YCbCrBiPlanar;
