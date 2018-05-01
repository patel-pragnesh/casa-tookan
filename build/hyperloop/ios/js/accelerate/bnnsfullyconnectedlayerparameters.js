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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns.h
 * @class
 */
function BNNSFullyConnectedLayerParameters (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof BNNSFullyConnectedLayerParameters)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$weights = {};
	if (pointer) {
		this.$weights.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$weights.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$weights.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	if (pointer) {
		this.$weights.f3 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$weights.f4 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$weights.f5 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (pointer) {
		this.$weights.f6 = $dispatch(pointer, 'valueAtIndex:', 6);
	}
	this.$bias = {};
	if (pointer) {
		this.$bias.f0 = $dispatch(pointer, 'valueAtIndex:', 7);
	}
	if (pointer) {
		this.$bias.f1 = $dispatch(pointer, 'valueAtIndex:', 8);
	}
	if (pointer) {
		this.$bias.f2 = $dispatch(pointer, 'valueAtIndex:', 9);
	}
	if (pointer) {
		this.$bias.f3 = $dispatch(pointer, 'valueAtIndex:', 10);
	}
	if (pointer) {
		this.$bias.f4 = $dispatch(pointer, 'valueAtIndex:', 11);
	}
	if (pointer) {
		this.$bias.f5 = $dispatch(pointer, 'valueAtIndex:', 12);
	}
	if (pointer) {
		this.$bias.f6 = $dispatch(pointer, 'valueAtIndex:', 13);
	}
	this.$activation = {};
	if (pointer) {
		this.$activation.f0 = $dispatch(pointer, 'valueAtIndex:', 14);
	}
	if (pointer) {
		this.$activation.f1 = $dispatch(pointer, 'valueAtIndex:', 15);
	}
	if (pointer) {
		this.$activation.f2 = $dispatch(pointer, 'valueAtIndex:', 16);
	}
	if (pointer) {
		this.$activation.f3 = $dispatch(pointer, 'valueAtIndex:', 17);
	}
	if (pointer) {
		this.$activation.f4 = $dispatch(pointer, 'valueAtIndex:', 18);
	}
	if (pointer) {
		this.$activation.f5 = $dispatch(pointer, 'valueAtIndex:', 19);
	}
	if (pointer) {
		this.$activation.f6 = $dispatch(pointer, 'valueAtIndex:', 20);
	}
	if (pointer) {
		this.$activation.f7 = $dispatch(pointer, 'valueAtIndex:', 21);
	}
	if (pointer) {
		this.$activation.f8 = $dispatch(pointer, 'valueAtIndex:', 22);
	}
	if (pointer) {
		this.$activation.f9 = $dispatch(pointer, 'valueAtIndex:', 23);
	}
	if (pointer) {
		this.$activation.f10 = $dispatch(pointer, 'valueAtIndex:', 24);
	}
	if (pointer) {
		this.$activation.f11 = $dispatch(pointer, 'valueAtIndex:', 25);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{BNNSFullyConnectedLayerParameters=QQ{?=^viff^f}{?=^viff^f}{?=iffiii^i^i^i}}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$weights, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$weights, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$weights, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$weights, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$weights, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$weights, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
	Object.defineProperty(this.$weights, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 6]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 6);
		},
	});
	Object.defineProperty(this.$bias, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 7]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 7);
		},
	});
	Object.defineProperty(this.$bias, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 8]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 8);
		},
	});
	Object.defineProperty(this.$bias, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 9]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 9);
		},
	});
	Object.defineProperty(this.$bias, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 10]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 10);
		},
	});
	Object.defineProperty(this.$bias, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 11]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 11);
		},
	});
	Object.defineProperty(this.$bias, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 12]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 12);
		},
	});
	Object.defineProperty(this.$bias, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 13]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 13);
		},
	});
	Object.defineProperty(this.$activation, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 14]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 14);
		},
	});
	Object.defineProperty(this.$activation, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 15]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 15);
		},
	});
	Object.defineProperty(this.$activation, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 16]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 16);
		},
	});
	Object.defineProperty(this.$activation, 'f3', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 17]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 17);
		},
	});
	Object.defineProperty(this.$activation, 'f4', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 18]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 18);
		},
	});
	Object.defineProperty(this.$activation, 'f5', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 19]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 19);
		},
	});
	Object.defineProperty(this.$activation, 'f6', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 20]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 20);
		},
	});
	Object.defineProperty(this.$activation, 'f7', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 21]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 21);
		},
	});
	Object.defineProperty(this.$activation, 'f8', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 22]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 22);
		},
	});
	Object.defineProperty(this.$activation, 'f9', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 23]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 23);
		},
	});
	Object.defineProperty(this.$activation, 'f10', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 24]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 24);
		},
	});
	Object.defineProperty(this.$activation, 'f11', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 25]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 25);
		},
	});
}

function $initialize () {
	$imports = {};


	BNNSFullyConnectedLayerParameters._imports = $imports;

	// properties
	Object.defineProperties(BNNSFullyConnectedLayerParameters.prototype, {
	
		in_size: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_in_size) {
				$dispatch(this.$native, 'setValue:atIndex:', [_in_size, 0]);
			},
			enumerable: false
		},
	
		out_size: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_out_size) {
				$dispatch(this.$native, 'setValue:atIndex:', [_out_size, 1]);
			},
			enumerable: false
		},
	
		weights: {
			get: function () {
				return this.$weights;
			},
		
			set: function (_weights) {
				this.$weights.f0 = _weights.f0;
				this.$weights.f1 = _weights.f1;
				this.$weights.f2 = _weights.f2;
				this.$weights.f3 = _weights.f3;
				this.$weights.f4 = _weights.f4;
				this.$weights.f5 = _weights.f5;
				this.$weights.f6 = _weights.f6;
			},
			enumerable: false
		},
	
		bias: {
			get: function () {
				return this.$bias;
			},
		
			set: function (_bias) {
				this.$bias.f0 = _bias.f0;
				this.$bias.f1 = _bias.f1;
				this.$bias.f2 = _bias.f2;
				this.$bias.f3 = _bias.f3;
				this.$bias.f4 = _bias.f4;
				this.$bias.f5 = _bias.f5;
				this.$bias.f6 = _bias.f6;
			},
			enumerable: false
		},
	
		activation: {
			get: function () {
				return this.$activation;
			},
		
			set: function (_activation) {
				this.$activation.f0 = _activation.f0;
				this.$activation.f1 = _activation.f1;
				this.$activation.f2 = _activation.f2;
				this.$activation.f3 = _activation.f3;
				this.$activation.f4 = _activation.f4;
				this.$activation.f5 = _activation.f5;
				this.$activation.f6 = _activation.f6;
				this.$activation.f7 = _activation.f7;
				this.$activation.f8 = _activation.f8;
				this.$activation.f9 = _activation.f9;
				this.$activation.f10 = _activation.f10;
				this.$activation.f11 = _activation.f11;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = BNNSFullyConnectedLayerParameters;
