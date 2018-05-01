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
 * CoreText//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes.h
 * @class
 */
function TrakTableData (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof TrakTableData)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{TrakTableData=SSI[1{TrakTableEntry=iSS}]}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/SFNTLayoutTypes');
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


	TrakTableData._imports = $imports;

	// properties
	Object.defineProperties(TrakTableData.prototype, {
	
		nTracks: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_nTracks) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nTracks, 0]);
			},
			enumerable: false
		},
	
		nSizes: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_nSizes) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nSizes, 1]);
			},
			enumerable: false
		},
	
		sizeTableOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_sizeTableOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_sizeTableOffset, 2]);
			},
			enumerable: false
		},
	
		trakTable: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_trakTable) {
				$dispatch(this.$native, 'setValue:atIndex:', [_trakTable, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = TrakTableData;
