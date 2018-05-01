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
function SparseMatrix_Float (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseMatrix_Float)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$structure = {};
	if (pointer) {
		this.$structure.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$structure.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$structure.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$structure.f3 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$structure.f4 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$structure.f5 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$structure.f6 = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	if (pointer) {
		this.$structure.f7 = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (pointer) {
		this.$structure.f8 = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (pointer) {
		this.$structure.f9 = $dispatch(pointer, 'valueAtIndex:', 9);
	}
	if (pointer) {
		this.$structure.f10 = $dispatch(pointer, 'valueAtIndex:', 10);
	}
	if (pointer) {
		this.$structure.f11 = $dispatch(pointer, 'valueAtIndex:', 11);
	}
	if (pointer) {
		this.$structure.f12 = $dispatch(pointer, 'valueAtIndex:', 12);
	}
	if (pointer) {
		this.$structure.f13 = $dispatch(pointer, 'valueAtIndex:', 13);
	}
	if (pointer) {
		this.$structure.f14 = $dispatch(pointer, 'valueAtIndex:', 14);
	}
	if (pointer) {
		this.$structure.f15 = $dispatch(pointer, 'valueAtIndex:', 15);
	}
	if (pointer) {
		this.$structure.f16 = $dispatch(pointer, 'valueAtIndex:', 16);
	}
	if (pointer) {
		this.$structure.f17 = $dispatch(pointer, 'valueAtIndex:', 17);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseMatrix_Float={?=ii^q^i{?=b1b1b2b11b1}C}^f}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$structure, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$structure, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$structure, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$structure, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$structure, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$structure, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$structure, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$structure, 'f7', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$structure, 'f8', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
	Object.defineProperty(this.$structure, 'f9', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 9]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 9);
		},
	});
	Object.defineProperty(this.$structure, 'f10', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 10]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 10);
		},
	});
	Object.defineProperty(this.$structure, 'f11', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 11]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 11);
		},
	});
	Object.defineProperty(this.$structure, 'f12', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 12]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 12);
		},
	});
	Object.defineProperty(this.$structure, 'f13', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 13]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 13);
		},
	});
	Object.defineProperty(this.$structure, 'f14', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 14]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 14);
		},
	});
	Object.defineProperty(this.$structure, 'f15', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 15]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 15);
		},
	});
	Object.defineProperty(this.$structure, 'f16', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 16]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 16);
		},
	});
	Object.defineProperty(this.$structure, 'f17', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 17]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 17);
		},
	});
}

function $initialize () {
	$imports = {};


	SparseMatrix_Float._imports = $imports;

	// properties
	Object.defineProperties(SparseMatrix_Float.prototype, {
	
		structure: {
			get: function () {
				return this.$structure;
			},
		
			set: function (_structure) {
				this.$structure.f0 = _structure.f0;
				this.$structure.f1 = _structure.f1;
				this.$structure.f2 = _structure.f2;
				this.$structure.f3 = _structure.f3;
				this.$structure.f4 = _structure.f4;
				this.$structure.f5 = _structure.f5;
				this.$structure.f6 = _structure.f6;
				this.$structure.f7 = _structure.f7;
				this.$structure.f8 = _structure.f8;
				this.$structure.f9 = _structure.f9;
				this.$structure.f10 = _structure.f10;
				this.$structure.f11 = _structure.f11;
				this.$structure.f12 = _structure.f12;
				this.$structure.f13 = _structure.f13;
				this.$structure.f14 = _structure.f14;
				this.$structure.f15 = _structure.f15;
				this.$structure.f16 = _structure.f16;
				this.$structure.f17 = _structure.f17;
			},
			enumerable: false
		},
	
		data: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_data) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseMatrix_Float;
