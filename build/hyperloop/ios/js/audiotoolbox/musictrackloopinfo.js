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
function MusicTrackLoopInfo (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MusicTrackLoopInfo)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MusicTrackLoopInfo=di}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/MusicPlayer');
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


	MusicTrackLoopInfo._imports = $imports;

	// properties
	Object.defineProperties(MusicTrackLoopInfo.prototype, {
	
		loopDuration: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_loopDuration) {
				$dispatch(this.$native, 'setValue:atIndex:', [_loopDuration, 0]);
			},
			enumerable: false
		},
	
		numberOfLoops: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_numberOfLoops) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numberOfLoops, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MusicTrackLoopInfo;
