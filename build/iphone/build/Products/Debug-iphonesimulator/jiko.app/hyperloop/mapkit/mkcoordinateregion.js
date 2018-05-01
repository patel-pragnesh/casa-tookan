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
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKGeometry.h
 * @class
 */
function MKCoordinateRegion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MKCoordinateRegion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$center = {};
	if (pointer) {
		this.$center.latitude = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$center.longitude = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	this.$span = {};
	if (pointer) {
		this.$span.f0 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$span.f1 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MKCoordinateRegion={CLLocationCoordinate2D=dd}{?=dd}}', 'MapKit', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKGeometry');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$center, 'latitude', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$center, 'longitude', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$span, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$span, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
}

function $initialize () {
	$imports = {};
	$imports.CLLocationCoordinate2D = require('/hyperloop/corelocation/cllocationcoordinate2d');

	MKCoordinateRegion._imports = $imports;

	// properties
	Object.defineProperties(MKCoordinateRegion.prototype, {
	
		center: {
			get: function () {
				return this.$center;
			},
		
			set: function (_center) {
				this.$center.latitude = _center.latitude;
				this.$center.longitude = _center.longitude;
			},
			enumerable: false
		},
	
		span: {
			get: function () {
				return this.$span;
			},
		
			set: function (_span) {
				this.$span.f0 = _span.f0;
				this.$span.f1 = _span.f1;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MKCoordinateRegion;
