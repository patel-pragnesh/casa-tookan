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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Quadrature/Integration.h
 * @class
 */
function quadrature_integrate_options (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof quadrature_integrate_options)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{quadrature_integrate_options=iddQQ}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Quadrature/Integration');
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


	quadrature_integrate_options._imports = $imports;

	// properties
	Object.defineProperties(quadrature_integrate_options.prototype, {
	
		integrator: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_integrator) {
				$dispatch(this.$native, 'setValue:atIndex:', [_integrator, 0]);
			},
			enumerable: false
		},
	
		abs_tolerance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_abs_tolerance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_abs_tolerance, 1]);
			},
			enumerable: false
		},
	
		rel_tolerance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_rel_tolerance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rel_tolerance, 2]);
			},
			enumerable: false
		},
	
		qag_points_per_interval: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_qag_points_per_interval) {
				$dispatch(this.$native, 'setValue:atIndex:', [_qag_points_per_interval, 3]);
			},
			enumerable: false
		},
	
		max_intervals: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_max_intervals) {
				$dispatch(this.$native, 'setValue:atIndex:', [_max_intervals, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = quadrature_integrate_options;
