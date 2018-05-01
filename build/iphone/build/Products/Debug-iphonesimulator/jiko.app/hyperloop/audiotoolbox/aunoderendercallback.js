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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUGraph.h
 * @class
 */
function AUNodeRenderCallback (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AUNodeRenderCallback)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$cback = {};
	if (pointer) {
		this.$cback.inputProc = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$cback.inputProcRefCon = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AUNodeRenderCallback=iI{AURenderCallbackStruct=^?^v}}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUGraph');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$cback, 'inputProc', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$cback, 'inputProcRefCon', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.AURenderCallbackStruct = require('/hyperloop/audiotoolbox/aurendercallbackstruct');

	AUNodeRenderCallback._imports = $imports;

	// properties
	Object.defineProperties(AUNodeRenderCallback.prototype, {
	
		destNode: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_destNode) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destNode, 0]);
			},
			enumerable: false
		},
	
		destInputNumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_destInputNumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destInputNumber, 1]);
			},
			enumerable: false
		},
	
		cback: {
			get: function () {
				return this.$cback;
			},
		
			set: function (_cback) {
				this.$cback.inputProc = _cback.inputProc;
				this.$cback.inputProcRefCon = _cback.inputProcRefCon;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AUNodeRenderCallback;
