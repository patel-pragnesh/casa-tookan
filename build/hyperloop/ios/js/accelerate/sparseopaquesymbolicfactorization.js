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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve.h
 * @class
 */
function SparseOpaqueSymbolicFactorization (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseOpaqueSymbolicFactorization)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$attributes = {};
	if (pointer) {
		this.$attributes.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$attributes.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$attributes.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$attributes.f3 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$attributes.f4 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$attributes.f5 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$attributes.f6 = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$attributes.f7 = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (pointer) {
		this.$attributes.f8 = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (pointer) {
		this.$attributes.f9 = $dispatch(pointer, 'valueAtIndex:', 9);
	}
	if (pointer) {
		this.$attributes.f10 = $dispatch(pointer, 'valueAtIndex:', 10);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseOpaqueSymbolicFactorization=iii{?=b1b1b2b11b1}CC^vQQQQ}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$attributes, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$attributes, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$attributes, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$attributes, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$attributes, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$attributes, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$attributes, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$attributes, 'f7', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$attributes, 'f8', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
	Object.defineProperty(this.$attributes, 'f9', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 9]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 9);
		},
	});
	Object.defineProperty(this.$attributes, 'f10', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 10]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 10);
		},
	});
}

function $initialize () {
	$imports = {};


	SparseOpaqueSymbolicFactorization._imports = $imports;

	// properties
	Object.defineProperties(SparseOpaqueSymbolicFactorization.prototype, {
	
		status: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_status) {
				$dispatch(this.$native, 'setValue:atIndex:', [_status, 0]);
			},
			enumerable: false
		},
	
		rowCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_rowCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rowCount, 1]);
			},
			enumerable: false
		},
	
		columnCount: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_columnCount) {
				$dispatch(this.$native, 'setValue:atIndex:', [_columnCount, 2]);
			},
			enumerable: false
		},
	
		attributes: {
			get: function () {
				return this.$attributes;
			},
		
			set: function (_attributes) {
				this.$attributes.f0 = _attributes.f0;
				this.$attributes.f1 = _attributes.f1;
				this.$attributes.f2 = _attributes.f2;
				this.$attributes.f3 = _attributes.f3;
				this.$attributes.f4 = _attributes.f4;
				this.$attributes.f5 = _attributes.f5;
				this.$attributes.f6 = _attributes.f6;
				this.$attributes.f7 = _attributes.f7;
				this.$attributes.f8 = _attributes.f8;
				this.$attributes.f9 = _attributes.f9;
				this.$attributes.f10 = _attributes.f10;
			},
			enumerable: false
		},
	
		blockSize: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_blockSize) {
				$dispatch(this.$native, 'setValue:atIndex:', [_blockSize, 4]);
			},
			enumerable: false
		},
	
		type: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_type) {
				$dispatch(this.$native, 'setValue:atIndex:', [_type, 5]);
			},
			enumerable: false
		},
	
		factorization: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_factorization) {
				$dispatch(this.$native, 'setValue:atIndex:', [_factorization, 6]);
			},
			enumerable: false
		},
	
		workspaceSize_Float: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_workspaceSize_Float) {
				$dispatch(this.$native, 'setValue:atIndex:', [_workspaceSize_Float, 7]);
			},
			enumerable: false
		},
	
		workspaceSize_Double: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_workspaceSize_Double) {
				$dispatch(this.$native, 'setValue:atIndex:', [_workspaceSize_Double, 8]);
			},
			enumerable: false
		},
	
		factorSize_Float: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_factorSize_Float) {
				$dispatch(this.$native, 'setValue:atIndex:', [_factorSize_Float, 9]);
			},
			enumerable: false
		},
	
		factorSize_Double: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 10);
			},
		
			set: function (_factorSize_Double) {
				$dispatch(this.$native, 'setValue:atIndex:', [_factorSize_Double, 10]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseOpaqueSymbolicFactorization;
