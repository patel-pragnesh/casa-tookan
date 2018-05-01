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
function CAF_UUID_ChunkHeader (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CAF_UUID_ChunkHeader)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$mHeader = {};
	if (pointer) {
		this.$mHeader.mChunkType = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$mHeader.mChunkSize = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CAF_UUID_ChunkHeader={CAFChunkHeader=Iq}[16C]}', 'AudioToolbox', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/CAFFile');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$mHeader, 'mChunkType', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$mHeader, 'mChunkSize', {
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
	$imports.CAFChunkHeader = require('/hyperloop/audiotoolbox/cafchunkheader');

	CAF_UUID_ChunkHeader._imports = $imports;

	// properties
	Object.defineProperties(CAF_UUID_ChunkHeader.prototype, {
	
		mHeader: {
			get: function () {
				return this.$mHeader;
			},
		
			set: function (_mHeader) {
				this.$mHeader.mChunkType = _mHeader.mChunkType;
				this.$mHeader.mChunkSize = _mHeader.mChunkSize;
			},
			enumerable: false
		},
	
		mUUID: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_mUUID) {
				$dispatch(this.$native, 'setValue:atIndex:', [_mUUID, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CAF_UUID_ChunkHeader;
