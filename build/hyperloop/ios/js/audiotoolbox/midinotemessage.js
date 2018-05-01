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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer.h
 * @class
 */
function MIDINoteMessage (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MIDINoteMessage)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MIDINoteMessage=CCCCf}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer');
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


	MIDINoteMessage._imports = $imports;

	// properties
	Object.defineProperties(MIDINoteMessage.prototype, {
	
		channel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_channel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_channel, 0]);
			},
			enumerable: false
		},
	
		note: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_note) {
				$dispatch(this.$native, 'setValue:atIndex:', [_note, 1]);
			},
			enumerable: false
		},
	
		velocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_velocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_velocity, 2]);
			},
			enumerable: false
		},
	
		releaseVelocity: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_releaseVelocity) {
				$dispatch(this.$native, 'setValue:atIndex:', [_releaseVelocity, 3]);
			},
			enumerable: false
		},
	
		duration: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_duration) {
				$dispatch(this.$native, 'setValue:atIndex:', [_duration, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MIDINoteMessage;
