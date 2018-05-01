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
 * VideoToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/VideoToolbox.framework/Headers/VTDecompressionSession.h
 * @class
 */
function VTDecompressionOutputCallbackRecord (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof VTDecompressionOutputCallbackRecord)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{VTDecompressionOutputCallbackRecord=^?^v}', 'VideoToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/VideoToolbox.framework/Headers/VTDecompressionSession');
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


	VTDecompressionOutputCallbackRecord._imports = $imports;

	// properties
	Object.defineProperties(VTDecompressionOutputCallbackRecord.prototype, {
	
		decompressionOutputCallback: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_decompressionOutputCallback) {
				$dispatch(this.$native, 'setValue:atIndex:', [_decompressionOutputCallback, 0]);
			},
			enumerable: false
		},
	
		decompressionOutputRefCon: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_decompressionOutputRefCon) {
				$dispatch(this.$native, 'setValue:atIndex:', [_decompressionOutputRefCon, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = VTDecompressionOutputCallbackRecord;
