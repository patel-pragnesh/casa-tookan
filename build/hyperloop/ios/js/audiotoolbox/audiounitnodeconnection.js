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
function AudioUnitNodeConnection (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AudioUnitNodeConnection)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AudioUnitNodeConnection=iIiI}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUGraph');
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


	AudioUnitNodeConnection._imports = $imports;

	// properties
	Object.defineProperties(AudioUnitNodeConnection.prototype, {
	
		sourceNode: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_sourceNode) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sourceNode, 0]);
			},
			enumerable: false
		},
	
		sourceOutputNumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_sourceOutputNumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sourceOutputNumber, 1]);
			},
			enumerable: false
		},
	
		destNode: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_destNode) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destNode, 2]);
			},
			enumerable: false
		},
	
		destInputNumber: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_destInputNumber) {
				$dispatch(this.$native, 'setValue:atIndex:', [_destInputNumber, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AudioUnitNodeConnection;
