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
function AUNodeInteraction (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof AUNodeInteraction)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{AUNodeInteraction=I(?={AudioUnitNodeConnection=iIiI}{AUNodeRenderCallback=iI{AURenderCallbackStruct=^?^v}})}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUGraph');
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


	AUNodeInteraction._imports = $imports;

	// properties
	Object.defineProperties(AUNodeInteraction.prototype, {
	
		nodeInteractionType: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_nodeInteractionType) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nodeInteractionType, 0]);
			},
			enumerable: false
		},
	
		nodeInteraction: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_nodeInteraction) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nodeInteraction, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = AUNodeInteraction;
