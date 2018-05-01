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
function SparseOpaqueFactorization_Float (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseOpaqueFactorization_Float)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
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
	this.$symbolicFactorization = {};
	if (pointer) {
		this.$symbolicFactorization.f0 = $dispatch(pointer, 'valueAtIndex:', 11);
	}
	if (pointer) {
		this.$symbolicFactorization.f1 = $dispatch(pointer, 'valueAtIndex:', 12);
	}
	if (pointer) {
		this.$symbolicFactorization.f2 = $dispatch(pointer, 'valueAtIndex:', 13);
	}
	if (pointer) {
		this.$symbolicFactorization.f3 = $dispatch(pointer, 'valueAtIndex:', 14);
	}
	if (pointer) {
		this.$symbolicFactorization.f4 = $dispatch(pointer, 'valueAtIndex:', 15);
	}
	if (pointer) {
		this.$symbolicFactorization.f5 = $dispatch(pointer, 'valueAtIndex:', 16);
	}
	if (pointer) {
		this.$symbolicFactorization.f6 = $dispatch(pointer, 'valueAtIndex:', 17);
	}
	if (pointer) {
		this.$symbolicFactorization.f7 = $dispatch(pointer, 'valueAtIndex:', 18);
	}
	if (pointer) {
		this.$symbolicFactorization.f8 = $dispatch(pointer, 'valueAtIndex:', 19);
	}
	if (pointer) {
		this.$symbolicFactorization.f9 = $dispatch(pointer, 'valueAtIndex:', 20);
	}
	if (pointer) {
		this.$symbolicFactorization.f10 = $dispatch(pointer, 'valueAtIndex:', 21);
	}
	if (pointer) {
		this.$symbolicFactorization.f11 = $dispatch(pointer, 'valueAtIndex:', 22);
	}
	if (pointer) {
		this.$symbolicFactorization.f12 = $dispatch(pointer, 'valueAtIndex:', 23);
	}
	if (pointer) {
		this.$symbolicFactorization.f13 = $dispatch(pointer, 'valueAtIndex:', 24);
	}
	if (pointer) {
		this.$symbolicFactorization.f14 = $dispatch(pointer, 'valueAtIndex:', 25);
	}
	if (pointer) {
		this.$symbolicFactorization.f15 = $dispatch(pointer, 'valueAtIndex:', 26);
	}
	if (pointer) {
		this.$symbolicFactorization.f16 = $dispatch(pointer, 'valueAtIndex:', 27);
	}
	if (pointer) {
		this.$symbolicFactorization.f17 = $dispatch(pointer, 'valueAtIndex:', 28);
	}
	if (pointer) {
		this.$symbolicFactorization.f18 = $dispatch(pointer, 'valueAtIndex:', 29);
	}
	if (pointer) {
		this.$symbolicFactorization.f19 = $dispatch(pointer, 'valueAtIndex:', 30);
	}
	if (pointer) {
		this.$symbolicFactorization.f20 = $dispatch(pointer, 'valueAtIndex:', 31);
	}
	if (pointer) {
		this.$symbolicFactorization.f21 = $dispatch(pointer, 'valueAtIndex:', 32);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseOpaqueFactorization_Float=i{?=b1b1b2b11b1}{?=iii{?=b1b1b2b11b1}CC^vQQQQ}B^vQQ}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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
	Object.defineProperty(this.$symbolicFactorization, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 11]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 11);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 12]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 12);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 13]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 13);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 14]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 14);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 15]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 15);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 16]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 16);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 17]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 17);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f7', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 18]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 18);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f8', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 19]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 19);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f9', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 20]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 20);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f10', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 21]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 21);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f11', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 22]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 22);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f12', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 23]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 23);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f13', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 24]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 24);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f14', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 25]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 25);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f15', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 26]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 26);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f16', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 27]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 27);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f17', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 28]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 28);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f18', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 29]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 29);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f19', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 30]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 30);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f20', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 31]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 31);
		},
	});
	Object.defineProperty(this.$symbolicFactorization, 'f21', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 32]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 32);
		},
	});
}

function $initialize () {
	$imports = {};


	SparseOpaqueFactorization_Float._imports = $imports;

	// properties
	Object.defineProperties(SparseOpaqueFactorization_Float.prototype, {
	
		status: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_status) {
				$dispatch(this.$native, 'setValue:atIndex:', [_status, 0]);
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
	
		symbolicFactorization: {
			get: function () {
				return this.$symbolicFactorization;
			},
		
			set: function (_symbolicFactorization) {
				this.$symbolicFactorization.f0 = _symbolicFactorization.f0;
				this.$symbolicFactorization.f1 = _symbolicFactorization.f1;
				this.$symbolicFactorization.f2 = _symbolicFactorization.f2;
				this.$symbolicFactorization.f3 = _symbolicFactorization.f3;
				this.$symbolicFactorization.f4 = _symbolicFactorization.f4;
				this.$symbolicFactorization.f5 = _symbolicFactorization.f5;
				this.$symbolicFactorization.f6 = _symbolicFactorization.f6;
				this.$symbolicFactorization.f7 = _symbolicFactorization.f7;
				this.$symbolicFactorization.f8 = _symbolicFactorization.f8;
				this.$symbolicFactorization.f9 = _symbolicFactorization.f9;
				this.$symbolicFactorization.f10 = _symbolicFactorization.f10;
				this.$symbolicFactorization.f11 = _symbolicFactorization.f11;
				this.$symbolicFactorization.f12 = _symbolicFactorization.f12;
				this.$symbolicFactorization.f13 = _symbolicFactorization.f13;
				this.$symbolicFactorization.f14 = _symbolicFactorization.f14;
				this.$symbolicFactorization.f15 = _symbolicFactorization.f15;
				this.$symbolicFactorization.f16 = _symbolicFactorization.f16;
				this.$symbolicFactorization.f17 = _symbolicFactorization.f17;
				this.$symbolicFactorization.f18 = _symbolicFactorization.f18;
				this.$symbolicFactorization.f19 = _symbolicFactorization.f19;
				this.$symbolicFactorization.f20 = _symbolicFactorization.f20;
				this.$symbolicFactorization.f21 = _symbolicFactorization.f21;
			},
			enumerable: false
		},
	
		userFactorStorage: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_userFactorStorage) {
				$dispatch(this.$native, 'setValue:atIndex:', [_userFactorStorage, 3]);
			},
			enumerable: false
		},
	
		numericFactorization: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_numericFactorization) {
				$dispatch(this.$native, 'setValue:atIndex:', [_numericFactorization, 4]);
			},
			enumerable: false
		},
	
		solveWorkspaceRequiredStatic: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_solveWorkspaceRequiredStatic) {
				$dispatch(this.$native, 'setValue:atIndex:', [_solveWorkspaceRequiredStatic, 5]);
			},
			enumerable: false
		},
	
		solveWorkspaceRequiredPerRHS: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_solveWorkspaceRequiredPerRHS) {
				$dispatch(this.$native, 'setValue:atIndex:', [_solveWorkspaceRequiredPerRHS, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseOpaqueFactorization_Float;
