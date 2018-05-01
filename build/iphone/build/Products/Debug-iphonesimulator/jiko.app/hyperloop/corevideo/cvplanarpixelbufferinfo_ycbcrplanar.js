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
function CVPlanarPixelBufferInfo_YCbCrPlanar (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CVPlanarPixelBufferInfo_YCbCrPlanar)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
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
	this.$componentInfoCb = {};
	if (pointer) {
		this.$componentInfoCb.offset = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$componentInfoCb.rowBytes = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	this.$componentInfoCr = {};
	if (pointer) {
		this.$componentInfoCr.offset = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$componentInfoCr.rowBytes = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CVPlanarPixelBufferInfo_YCbCrPlanar={CVPlanarComponentInfo=iI}{CVPlanarComponentInfo=iI}{CVPlanarComponentInfo=iI}}', 'CoreVideo', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreVideo.framework/Headers/CVPixelBuffer');
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
	Object.defineProperty(this.$componentInfoCb, 'offset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$componentInfoCb, 'rowBytes', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$componentInfoCr, 'offset', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$componentInfoCr, 'rowBytes', {
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
	$imports.CVPlanarComponentInfo = require('/hyperloop/corevideo/cvplanarcomponentinfo');

	CVPlanarPixelBufferInfo_YCbCrPlanar._imports = $imports;

	// properties
	Object.defineProperties(CVPlanarPixelBufferInfo_YCbCrPlanar.prototype, {
	
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
	
		componentInfoCb: {
			get: function () {
				return this.$componentInfoCb;
			},
		
			set: function (_componentInfoCb) {
				this.$componentInfoCb.offset = _componentInfoCb.offset;
				this.$componentInfoCb.rowBytes = _componentInfoCb.rowBytes;
			},
			enumerable: false
		},
	
		componentInfoCr: {
			get: function () {
				return this.$componentInfoCr;
			},
		
			set: function (_componentInfoCr) {
				this.$componentInfoCr.offset = _componentInfoCr.offset;
				this.$componentInfoCr.rowBytes = _componentInfoCr.rowBytes;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CVPlanarPixelBufferInfo_YCbCrPlanar;
