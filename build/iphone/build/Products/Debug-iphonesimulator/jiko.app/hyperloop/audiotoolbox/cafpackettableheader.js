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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile.h
 * @class
 */
function CAFPacketTableHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CAFPacketTableHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CAFPacketTableHeader=qqii[1C]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile');
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


	CAFPacketTableHeader._imports = $imports;

	// properties
	Object.defineProperties(CAFPacketTableHeader.prototype, {
	
		mNumberPackets: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_mNumberPackets) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberPackets, 0]);
			},
			enumerable: false
		},
	
		mNumberValidFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mNumberValidFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mNumberValidFrames, 1]);
			},
			enumerable: false
		},
	
		mPrimingFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_mPrimingFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPrimingFrames, 2]);
			},
			enumerable: false
		},
	
		mRemainderFrames: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_mRemainderFrames) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mRemainderFrames, 3]);
			},
			enumerable: false
		},
	
		mPacketDescriptions: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_mPacketDescriptions) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mPacketDescriptions, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CAFPacketTableHeader;
